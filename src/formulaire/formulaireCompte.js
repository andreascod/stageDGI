import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import AnimatedAlert from './AnimatedAlert';
import AuthUser from '../components/AuthUser';

const FormulaireCompte = () => {
    const [formData, setFormData] = useState({
        Id_util: '',
        solde: '',
        date_creation_compte: '',
    });
    const [UT, setUT] = useState([]);
    const [alert, setAlert] = useState(null);
    const {http}=AuthUser();
    useEffect(() => {
        http.get('/recuperation')
            .then(response => {
                setUT(response.data);
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
        console.log('Form Data:', formData);
        try {
            const response = await http.post('/comptes', formData);
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
                {/* <h1 style={{ color: '#233142', padding: '1rem', textAlign: 'center', fontSize: '25px' }}>Ajouter compte</h1> */}
                <label htmlFor='Id_util' className='labscom1'>ID Utilisateur:</label>
                <br />
                <div className='md:flex space-x-12 hidden'>
                <select
                    id="Id_util"
                    //className='inputEntreprise'
                    className='w-ful my-{12rem} text-black   bg-[#ffffff] outline-none  focus:outline-none my-16 mx-12 max-h-40 overflow-y-scroll'
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
                <motion.button className='w-{54%} h-12 text-white bg-[#568986] rounded-md  my-12 text-center flex items-center justify-center  'type="submit"
                    whileHover={{
                        scale: 1.1,
                    }}
                >Ajouter compte</motion.button>
                </div>
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
