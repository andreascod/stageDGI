import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
import {FaExpeditedssl, FaRegEnvelope} from "react-icons/fa";
//import { useStateContext } from "../context/ContextProviders";
import AuthUser from "../components/AuthUser";
// import http from "../components/AuthUser";


export default function Login(){
  // const [email,setEmail]=useState('');
  // const [password,setPass]=useState('');
  // const [error,setError]=useState('');
   

  const {http,setToken}=AuthUser();
  const emailRef=useRef();
  const passwordRef=useRef();
//  const {setUser,setToken}=useStateContext();
 const[errors,setError]=useState();

  const handleLogin = async (Event)=>{
    Event.preventDefault();
   const payload={
    email:emailRef.current.value,
    password:passwordRef.current.value,
   }
   http.post('/login', payload).then((res)=>{
    setToken(res.data.user,res.data.access_token);
   })
    .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
            setError(response.data.errors);
        } else if (response && response.status === 405) {
            setError('Méthode non autorisée');
        } else if (response && response.status === 401) {
            setError('Identifiants incorrects');
        } else {
            setError('Erreur inconnue');
        }
    });
  };
  return (
    <>
    <div>
       <div className="header">
        <h2 style={{ color: '#00204a',textAlign:'center',fontWeight:'700', fontSize: '38px' }}>Connexion</h2>
        <div className="underine" style={{ background: '#00204a',width:'100px',height:'6px',borderRadius:'9px',margin:'0rem 41%',marginBottom:'40px',marginTop:'-17px' }}/>
        </div>
        <form onSubmit={handleLogin}>
            <div className="input">
                <input
                    type="email"
                    // value={email}
                    className="inputs"
                    placeholder="email"
                    // onChange={(e) => setEmail(e.target.value)}
                    ref={emailRef}
                    required
                />
                 <FaRegEnvelope style={{ color: '#00204a',margin:'0px 2%', fontSize: '25px' }} id="FaRegEnvelope-icon" />
            </div>
            <div className="input">
                <input
                    type="password"
                    className="inputs"
                    ref={passwordRef}
                    // value={password}
                    placeholder="mot de passe"
                    // onChange={(e) => setPass(e.target.value)}
                    required
                />
                 <FaExpeditedssl style={{ color: '#00204a',margin:'0px 2%', fontSize: '25px' }} id="FaExpeditedssl-icon" />
            </div>
            {errors && <p style={{ color: 'red' }}>{errors}</p>}
            <button className="btnconnexion" type="submit"
            >Se connecter</button>
        </form>
    </div>
    </>
);
}