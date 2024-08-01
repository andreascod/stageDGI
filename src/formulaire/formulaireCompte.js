import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import AnimatedAlert from './AnimatedAlert';

const FormulaireCompte = () => {
    const [formData, setFormData] = useState({
        Id_util: '',
        solde: '',
        date_creation_compte: '',
    });
    const [UT, setUT] = useState([]);
    const [alert, setAlert] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/utilisateurs/recuperer')
            .then(response => {
                setUT(response.data);
            })
            .catch(error => {
                console.error("Il y a eu une erreur lors de la récupération des utilisateurs!", error);
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
        console.log('Form Data:', formData);
        try {
            const response = await axios.post('http://localhost:8000/api/comptes', formData);
            console.log('Data inserted successfully:', response.data);
            setAlert({ message: 'Compte ajouté avec succès!', type: 'success' });
        } catch (error) {
            let message = 'Erreur lors de l\'ajout du compte.';
            if (error.response) {
                message = `Erreur lors de l'ajout du compte: ${error.response.data.message}`;
            } else if (error.request) {
                message = 'Erreur lors de l\'ajout du compte. Aucun réponse reçue du serveur.';
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
                <h1 style={{ color: '#ffffff', padding: '1rem', textAlign: 'center', fontSize: '25px' }}>Ajouter compte</h1>
                <label htmlFor='Id_util' className='labscom1'>ID Utilisateur:</label>
                <br />
                <select
                    id="Id_util"
                    className='inputEntreprise'
                    name="Id_util"
                    value={formData.Id_util}
                    onChange={handleChange}
                    required
                >
                    <option value="">Sélectionner utilisateur</option>
                    {UT.map((util) => (
                        <option key={util.Id_util} value={util.Id_util}>
                            {util.Nom_util}
                        </option>
                    ))}
                </select>
                
                {/* <label className='labscom1' htmlFor='solde'>Solde:</label>
                <br />
                <input className='inputEntreprise' type="number" name="solde" placeholder="solde" value={formData.solde}
                    onChange={handleChange} required />
                <br /><br /> */}
                {/* <label className='labscom1' htmlFor='date_creation_compte'>Date:</label>
                <br />
                <input className='inputEntreprise' type="date" name="date_creation_compte" placeholder="date creation compte" value={formData.date_creation_compte}
                    onChange={handleChange} required />
                <br /> */}
                <motion.button className='btnentreprise' type="submit"
                    whileHover={{
                        scale: 1.1,
                    }}
                >Ajouter compte</motion.button>
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

export default FormulaireCompte;
