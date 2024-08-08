import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {FaExpeditedssl, FaRegEnvelope} from "react-icons/fa";

export default function CreationCompte(){
  const [email,setEmail]=useState('');
  const [password,setPass]=useState('');
  const [error,setError]=useState('');
  const navigate=useNavigate();

  const handleLogin = async (Event)=>{
    Event.preventDefault();
   try{
    const response  =await axios.post('http://localhost:8000/api/logks',{
      email,
      password
    }); 
    localStorage.setItem('token',response.data.token);
    console.log("connexion reussie");
    navigate('/Compte');
    alert('connexion');
   }catch(error){
    if(error.response){
      setError(error.response.data.message || "Information du compte incorrect");
    }else{
      console.log("erreur de la connexion");
    }
    console.log("erreur de la connexion",error);
   }
  };
  return (
    <>
    <div>
       <div className="header">
        <h2 style={{ color: '#00204a',textAlign:'center',fontWeight:'700', fontSize: '38px' }}>ADMINISTRATEUR</h2>
        <div className="underine" style={{ background: '#00204a',width:'100px',height:'6px',borderRadius:'9px',margin:'0rem 41%',marginBottom:'40px',marginTop:'-17px' }}/>
        </div>
        <form onSubmit={handleLogin}>
            <div className="input">
                <input
                    type="email"
                    value={email}
                    className="inputs"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                 <FaRegEnvelope style={{ color: '#00204a',margin:'0px 2%', fontSize: '25px' }} id="FaRegEnvelope-icon" />
            </div>
            <div className="input">
                <input
                    type="password"
                    className="inputs"
                    value={password}
                    placeholder="mot de passe"
                    onChange={(e) => setPass(e.target.value)}
                    required
                />
                 <FaExpeditedssl style={{ color: '#00204a',margin:'0px 2%', fontSize: '25px' }} id="FaExpeditedssl-icon" />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button className="btnconnexion" type="submit"
                whileHover={{ scale: 1.1 }}
            >Se connecter</button>
        </form>
    </div>
    </>
);
}