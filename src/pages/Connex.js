import {useRef,useState} from 'react';
import {motion} from 'framer-motion';
import Connexion from '../formulaire/Connexion';
import InterfaceLogin from '../components/InterfaceLogin';
import AuthUser from '../components/AuthUser';
import IMAGE  from '../logo_by_vahatra/DGI.png'
export default function Connex(){
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
     alert('connexion');
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
     
          <motion.div 
           className='w-full min-h-screen flex items-start fixed '
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1.5,duration:1.5}}
          
          >  
           <div  className='relative w-1/2 h-full flex flex-col'>
            <div className='absolute top-[25%] left-[10%] flex flex-col'>
                 
            </div>
            <img src={IMAGE} className='w-[400px] h-[400px] object-cover mx-[150px] my-[80px]'/>
           </div>
           <div className='w-1/2 h-4/5 bg-[#ffffff]  flex flex-col p-20 '>

            <div className='w-full flex flex-col mb-2'>
             <div className='w-full h-[400px] flex flex-col '>
             <h3 className='text-2xl text-[#336666] font-semibold mb-4 my-6'>connecter</h3>
             <p className='text-sm mb-12'>Bienvenue !entre votre information</p>
             <form onSubmit={handleLogin}>
             <div
                className='w-full flex flex-col'
             >
                <input
                
                type='email'
                ref={emailRef}
                placeholder='email'
                required
                className="mt-1 block my-[1rem] w-[100%] px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <input
                
                type='password'
                placeholder='mot de passe '
                 ref={passwordRef}
                 required
                 className="mt-1 block my-[1rem] w-[100%] px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                  {errors && <p style={{ color: 'red' }}>{errors}</p>}
              <button  className='w-[100%] h-14 text-white bg-[#568986] rounded-md text-center flex items-center justify-center my-6'type='submit'>
                 Connexion
              </button>
              <div className='flex items-center justify-center my-3'>
               <p className='text-sm font-normal text-[#060606]'>Vous n'avez pas encors un contribuable en seint de la DGI n'esite pas de contacter le responsable.<span className='font-semibold underline underline-offset-2 cursor-pointer'>contact</span></p>
             </div>
             </div>
             </form>
             </div>
            
            </div>
           </div>
          </motion.div>
         </>
    )
}