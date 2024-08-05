import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Connexion = () => {
  const [formData, setFormData] = useState({
    email: '',
    pass: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:8000/api/utilisateurs/login', formData);
  //     console.log('Connexion réussie :', response.data);
  //     alert('connexion reussie');
  //     // Stocker le token ou effectuer toute autre action nécessaire
  //     // localStorage.setItem('auth_token', response.data.access_token);

  //     // // Rediriger vers Navbar
  //     // navigate('Financiers'); // Assurez-vous que cette route est définie dans App.js
  //   } catch (error) {
  //     console.error('Erreur lors de la connexion :', error);
  //     alert('eereur');
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    try {
        const response = await axios.post('http://localhost:8000/api/logks', formData);
        console.log('Data inserted successfully:', response.data);
          alert('connexion');
    } catch (error) {
        if (error.response) {
            // console.log("Erreur lors du connexion:", error.response.data.message);
            alert('erreur');
        } else if (error.request) {
            console.log('Erreur lors de l\'ajout du compte. Aucun réponse reçue du serveur.');
            alert('erreur');
        }
    }
};

  return (
    <form onSubmit={handleSubmit}>
      <h1 style={{color:'#ffffff',padding:'1rem ',textAlign:'center',fontSize:'25px'}}>CONTRIBUABLE</h1>
      <p style={{color:'#233142',textAlign:'center'}}>Pour créer un compte, il faut un compte d'utilisateur pour avoir accès à cette application</p>
      <div>
        <label htmlFor="email" className='labscom1'>Email:</label>
        <input
          type="email"
          id="email"
          className='inputEntreprise'
          placeholder='votre email'
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <br/>
      <div>
        <label htmlFor="pass" className='labscom1'>Mot de passe:</label>
        <input
          type="password"
          id="pass"
          placeholder='votre mot de passe'
          name="pass"
          className='inputEntreprise'
          value={formData.pass}
          onChange={handleChange}
          required
        />
      </div>
      <motion.button  className='btnentreprise' type="submit"
        whileHover={{ scale: 1.1 }}
      >
        connexion
      </motion.button>
    </form>
  );
};

export default Connexion;
