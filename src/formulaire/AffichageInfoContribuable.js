import axios from "axios";
import { useEffect, useState } from "react";
import {FaSearch} from "react-icons/fa";
export default function AffichageInformation(){
    const [Information,setInformation]=useState([]);
    const [searsh,setSearsh]=useState('');

    const Recherche=(e)=>{
        setSearsh(e.target.value);
        console.log(e.target.value);
    }

    // let result=[]
    // if(!searsh){
    //     result  = Information
    // }else{
    //     Information.filter((filtre)=>
    //    filtre.email.toLowerCase().includes(searsh.toLocaleLowerCase())
    // )
    // }

    // const result = !searsh ? Information :Information.filter((filtre)=>filtre.Nom_util.toLowerCase().includes(searsh.toLocaleLowerCase()))

  const result= !searsh ? Information :Information.filter((filtre)=>{
    const searchTerm=searsh.toLowerCase();
    return (
        filtre.Nom_util.toLowerCase().includes(searchTerm)||
        filtre.email.toLowerCase().includes(searchTerm)||
        filtre.solde.toLowerCase().includes(searchTerm)
    );
  });



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
          
            <input className="recherche" type="text" value={searsh} onChange={Recherche} placeholder="recherche...."/>
            <FaSearch style={{ color: '#00204a',margin:'-0.7rem -14rem', fontSize: '25px' }} id="search-icon" />
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
                {result.map(contribuable => (
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