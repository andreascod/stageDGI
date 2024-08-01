


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormulaireAffichageCompte = () => {
    const [selectedCompteId, setSelectedCompteId] = useState('');
    const [comptes, setComptes] = useState([]);
    const [selectedAccount, setSelectedAccount] = useState({
        solde: '',
        date_creation_compte: ''
    });

    useEffect(() => {
        axios.get('http://localhost:8000/api/comptes')
            .then(response => {
                setComptes(response.data);
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des comptes:", error);
            });
    }, []);

    useEffect(() => {
        if (selectedCompteId) {
            axios.get(`http://localhost:8000/api/comptes/${selectedCompteId}`)
                .then(response => {
                    setSelectedAccount({
                        solde: response.data.solde || '',
                        date_creation_compte: response.data.date_creation_compte || ''
                    });
                })
                .catch(error => {
                    console.error("Erreur lors de la récupération du compte:", error);
                    alert('Erreur lors de la récupération du compte!');
                    setSelectedAccount({
                        solde: '',
                        date_creation_compte: ''
                    });
                });
        } else {
            setSelectedAccount({
                solde: '',
                date_creation_compte: ''
            });
        }
    }, [selectedCompteId]);

    const handleCompteChange = (e) => {
        setSelectedCompteId(e.target.value);
    };

    return (
        <div className="form-section">
            <h1 style={{ color: '#ffffff', padding: '1rem', textAlign: 'center', fontSize: '25px' }}>COMPTE DES CONTRIBUABLES</h1>
            <label htmlFor='Id_compte' className='labscom1'>ID Compte:</label>
            <select
                id="Id_compte"
                className='afficheC'
                name="Id_compte"
                value={selectedCompteId}
                onChange={handleCompteChange}
                required
            >
                <option value="">Sélectionner compte</option>
                {comptes.map((compte) => (
                    <option key={compte.Id_compte} value={compte.Id_compte}>
                        {compte.Id_compte}
                    </option>
                ))}
            </select>
           
           
                <label className='labscom1' htmlFor='solde'>Solde:</label>
                <input
                    className='afficheC'
                    type="text"
                    name="solde"
                    placeholder="solde"
                    value={selectedAccount.solde}
                    readOnly
                /> MGA
          
        </div>
    );
};

export default FormulaireAffichageCompte;
