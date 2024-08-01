import React, { useEffect, useState } from "react";
import axios from "axios";

const AffichageCompte = () => {
    const [comptes, setComptes] = useState([]);
    const [utilisateur,setUtilisateur]  =useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/comptes')
            .then(response => {
                setComptes(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log('Erreur', error);
            });
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id compte</th>
                        <th>Nom contribuable</th>
                        <th>Date création compte</th>
                    </tr>
                </thead>
                <tbody>
                    {comptes.map(compte => (
                        <tr key={compte.Id_compte}>
                            <td>{compte.Id_compte}</td>
                            <td>{compte.Nom_util}</td>
                            <td>{compte.created_at}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    );
}

export default AffichageCompte;
