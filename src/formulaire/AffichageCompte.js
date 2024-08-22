import React, { useEffect, useState } from "react";
import AuthUser from "../components/AuthUser";
import { DataGrid } from '@mui/x-data-grid';
const AffichageCompte = () => {
    const [comptes, setComptes] = useState([]);
    const [searsh,setSearsh]=useState('');
    const { http } = AuthUser();
    
    const Recherche=(e)=>{
        setSearsh(e.target.value);
        console.log(e.target.value);
    }
    const result= !searsh ? comptes :comptes.filter((filtre)=>{
    const searchTerm=searsh.toLowerCase();
    return (
        filtre.Nom_util.toLowerCase().includes(searchTerm)
    );
  });
    useEffect(() => {
        http.get('/comptes')
            .then(response => {
                // Assure-toi que response.data est un tableau
                if (Array.isArray(response.data)) {
                    setComptes(response.data);
                } else {
                    console.error('La réponse de l\'API n\'est pas un tableau', response.data);
                }
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des comptes', error);
            });
    }, [http]);
       
    const columns = [
        { field: 'Id_compte', headerName: 'Id compte', width: 400 },
        { field: 'Nom_util', headerName: 'Nom contribuable', width: 400 },
        { field: 'created_at', headerName: 'date creation compte', width: 250},
    ];
    return (
        <>
        <div>
        <input className="recherche placeholder:italic placeholder:text-slate-400 block bg-white  border-slate-300  " type="text" value={searsh} onChange={Recherche} placeholder="recherche...."/>
        
  </div>
  <div className="mx-[6%] w-[92.3%]">
                <DataGrid
                
                    rows={result}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10, 20]}
                    getRowId={(row) => row.Id_compte}
                    disableSelectionOnClick
                />
            </div>
  </>
    );
}

export default AffichageCompte;
