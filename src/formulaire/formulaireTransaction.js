import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import axios from 'axios'; 
import AnimatedAlert from './AnimatedAlert';

const FormulaireTransaction = () => { 
    const [formData, setFormData] = useState({ 
        Id_compte: '',
        montan: '',
        type: '', // Assurez-vous que ce champ est bien initialisé
    });
    
    const [comptes, setComptes] = useState([]);
    const [alert, setAlert] = useState(null);

    useEffect(() => {
        // Récupérer la liste des comptes
        axios.get('http://localhost:8000/api/comptes')
            .then(response => {
                setComptes(response.data);
            })
            .catch(error => {
                console.error("Il y a eu une erreur lors de la récupération des comptes!", error);
            });
    }, []);

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
            const response = await axios.post('http://localhost:8000/api/transactions', formData); 
            console.log('Data inserted successfully:', response.data); 
            setAlert({ message: 'Transaction réussie!', type: 'success' });
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
        <form onSubmit={handleSubmit}>
            {/* <div> */}
            <h1 style={{ color: '#ffffff', padding: '1rem', textAlign: 'center', fontSize: '25px' }}>Transaction</h1>
                <label className='labscom1' htmlFor="Id_compte">Compte ID:</label>
                <select
                    id="Id_compte"
                    className='transac'
                    style={{overflowY:'auto',}}
                    name="Id_compte"
                    value={formData.Id_compte}
                    onChange={handleChange}
                    required
                >
                    <option value="">Sélectionner un compte</option>
                    {comptes.map((compte) => (
                        <option key={compte.Id_compte} value={compte.Id_compte}>
                           {compte.Nom_util}
                        </option>
                    ))}
                </select>
            {/* </div> */}
           
              
                <label className='labscom1' htmlFor="montan">Montant:</label>
                <input
                    type="number"
                    step="0.01"
                    id="montan"
                    className='transac'
                    name='montan'
                    placeholder='montant'
                    value={formData.montan}
                    onChange={handleChange}
                    required
                />
               
            {/* </div>
           
            <div> */}
                <label className='labscom1' htmlFor="type">Type:</label>
              
                <select
                    id="type"
                    name='type'
                    className='transacc '
                    value={formData.type}
                    onChange={handleChange}
                    required
                >
                    <option value="">Sélectionner un type</option>
                    <option value="recette">Recette</option>
                    <option value="depense">Dépense</option>
                </select>
              
            {/* </div> */}
           
            <motion.button className='btnentreprise1' type="submit"
                whileHover={{ scale: 1.1 }}
            >
                Ajouter Transaction
            </motion.button>
        </form>
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

export default FormulaireTransaction;
