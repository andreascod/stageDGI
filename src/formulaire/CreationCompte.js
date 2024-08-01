import React, { useState} from 'react';
import { motion } from 'framer-motion'; 
import axios from 'axios'; 

const CreationCompte = () => { 
 const [formData, setFormData] = useState({ 
 email:'',
 mot_de_passe:'', 
 
 });
  

 const handleChange = (e) => { 
    const { name, value } = e.target; 
    setFormData({ 
    ...formData, 
    [name]: value 
    }); 
    }; 
    const handleSubmit = async (e) => { 
    e.preventDefault(); 
    try { 
    const response = await axios.post('http://localhost:8000/api/type_en', 
   formData); 
    console.log('Data inserted successfully:', response.data); 
    } catch (error) { 
    console.error('Error inserting data:', error); 
    } 
    }; 
    return (
        
    <form onSubmit={handleSubmit}>
         <h1 style={{color:'#ffffff',padding:'1rem ',textAlign:'center',fontSize:'25px'}}>ADMINISTRATEUR</h1>
         <p style={{color:'#233142',textAlign:'center',}}>Pour creer un compte il faut au compte d'utilisateur,pour avoir l'accee a cette application</p>
    
   <label className='labscom1' htmlFor='email'>email</label>
   <br/>
   <input className='inputEntreprise' type="email" name="email" placeholder="email" value={formData.email} 
   onChange={handleChange} required />
   <br/><br/>
   <label className='labscom1' htmlFor='mot_de_passe'>mot de passe</label>
   <br/>
   <input className='inputEntreprise' type="password" name="mot_de_passe" placeholder="mot de passe" value={formData.mot_de_passe} 
   onChange={handleChange} required />
<br/>
<motion.button className='btnentreprise' type="submit"
 whileHover={{
    scale:1.1,
 }}
>connexion</motion.button>
 </form> 
 ); 
}; 
export default CreationCompte;   