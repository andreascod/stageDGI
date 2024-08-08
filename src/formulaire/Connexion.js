import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Login(){
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
        <h2>Connexion</h2>
        <form onSubmit={handleLogin}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Mot de passe:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPass(e.target.value)}
                    required
                />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Se connecter</button>
        </form>
    </div>
    </>
);
}