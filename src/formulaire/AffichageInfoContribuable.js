import axios from "axios";
import { useEffect, useState } from "react";

export default function AffichageInformation(){
    const [Information,setInformation]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/compte/affichage')
        .then(Response=>{
            setInformation(Response.data);
            console.log(Response.data);
        })
        .catch(error=>{
            console.log('erreur',error);
        });
    },[]);
    return (
        <div>
        <table>
            <thead>
                <tr>
                    <th>Id compte</th>
                    <th>Nom contribuable</th>
                    <th>email</th>
                    <th>solde</th>

                </tr>
            </thead>
            <tbody>
                {Information.map(contribuable => (
                    <tr key={contribuable.Id_compte}>
                        <td>{contribuable.Id_compte}</td>
                        <td>{contribuable.Nom_util}</td>
                        <td>{contribuable.email}</td>
                        <td>{contribuable.solde}</td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    </div>
    )
}