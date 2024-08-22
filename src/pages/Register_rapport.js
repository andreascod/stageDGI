import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import axios from 'axios'; 
import AnimatedAlert from '../formulaire/AnimatedAlert';
import AuthUser from '../components/AuthUser';

const Register_rapport = () => { 
    const [formData, setFormData] = useState({ 
        Id_util: '',
        titre: '',
        contenue: '', // Assurez-vous que ce champ est bien initialisé
    });
    
    const [comptes, setComptes] = useState([]);
    const [alert, setAlert] = useState(null);
    const {http}=AuthUser();
    useEffect(() => {
        // Récupérer la liste des comptes
        http.get('/recuperation')
            .then(response => {
                setComptes(response.data);
            })
            .catch(error => {
                console.error("Il y a eu une erreur lors de la récupération des utilisateurs!", error);
            });
    }, [http]);

    const handleChange = (e) => { 
        const { name, value } = e.target; 
        setFormData({ 
            ...formData, 
            [name]: value 
        }); 
    };

    const handleSubmit = async (e) => { 
        e.preventDefault(); 
        console.log('Données envoyées:', formData); // Affichez les données pour vérifier

        try { 
            const response = await http.post('/gereRapport', formData); 
            console.log('Data inserted successfully:', response.data); 
            setAlert({ message: 'rapport gerer avec succes !piece justificatif envoyer!', type: 'success' });
        } catch (error) { 
            let message = 'Erreur inconnue.';
            if (error.response) {
                console.log('Erreur réponse:', error.response); // Affichez les détails de l'erreur
                message = `Erreur : ${error.response.data.message}`;
            } else if (error.request) {
                message = 'Erreur. Aucune réponse reçue du serveur.';
            }
            setAlert({ message, type: 'error' });
        } 
    }; 

    const handleCloseAlert = () => {
        setAlert(null);
    };

    return (
        <>
         <div className='w-[100%] h-[550px] bg-[#ffffff] flex flex-col p-20'>
        <div className='w-full flex flex-col mb-2'>
          <div className='w-full h-[400px] flex flex-col '>
          <h3 className='text-2xl text-[#336666] font-semibold mb-4 my-6'>Gerer rapport</h3>
        <form onSubmit={handleSubmit}>
            {/* <div> */}
            <div className='w-full flex flex-col'>
                <label className='labscom1' htmlFor="Id_util">contribuable:</label>
                <select
                    id="Id_util"
                    className='w-[47%] text-black bg-none  bg-[#ffffff] outline-none focus:outline-none my-4'
                    style={{overflowY:'auto',}}
                    name="Id_util"
                    value={formData.Id_util}
                    onChange={handleChange}
                    required
                >
                    <option value="">Sélectionner contribuable</option>
                    {comptes.map((compte) => (
                        <option key={compte.Id_util} value={compte.Id_util}>
                           {compte.Nom_util}
                        </option>
                    ))}
                </select>
            {/* </div> */}
           
              
                <label className='labscom1' htmlFor="titre">titre:</label>
                <input
                    type="text"
                    id="titre"
                    className="mt-1 block my-[1rem] w-[100%] px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    name='titre'
                    placeholder='titre du rapport'
                    value={formData.titre}
                    onChange={handleChange}
                    required
                />
               
            {/* </div>
           
            <div> */}
               
               <label className='labscom1' htmlFor="contenue">contenue:</label>
                <input
                    type="text"
                    id="contenue"
                    className="mt-1 block my-[1rem] w-[100%] px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    name='contenue'
                    placeholder='contenue du rapport'
                    value={formData.contenue}
                    onChange={handleChange}
                    required
                />
               
            {/* </div> */}
           
            <motion.button  className='w-[47%] h-14 mx-[53%] text-white bg-[#336666] rounded-md text-center flex items-center justify-center my-6' type="submit"
                whileHover={{ scale: 1.1 }}
            >
                gerer rapport
            </motion.button>
            </div>
        </form>
        </div>
        </div>
        </div>
         <AnimatePresence>
         {alert && (
             <AnimatedAlert
                 message={alert.message}
                 type={alert.type}
                 onClose={handleCloseAlert}
             />
         )}
     </AnimatePresence>
    </>
    ); 
}; 

export default Register_rapport;
