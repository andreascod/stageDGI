import React, { useEffect, useState } from "react";
import AuthUser from "../components/AuthUser";
import { DataGrid } from '@mui/x-data-grid';

export default function AffichageInformation() {
    const [information, setInformation] = useState([]);
    const [search, setSearch] = useState('');
    const { http } = AuthUser();

    const Recherche = (e) => {
        setSearch(e.target.value);
    };

    const filteredData = !search ? information : information.filter((filtre) => {
        const searchTerm = search.toLowerCase();
        return (
            filtre.Nom_util.toLowerCase().includes(searchTerm) ||
            filtre.email.toLowerCase().includes(searchTerm) ||
            filtre.solde.toString().toLowerCase().includes(searchTerm)
        );
    });

    useEffect(() => {
        http.get('/comptes/tableau')
            .then(Response => {
                setInformation(Response.data);
                console.log(Response.data);
            })
            .catch(error => {
                console.log('Erreur', error);
            });
    }, [http]);

    const columns = [
        { field: 'Id_compte', headerName: 'Id compte', width: 300 },
        { field: 'Nom_util', headerName: 'Nom contribuable', width: 250 },
        { field: 'email', headerName: 'Email', width: 250 },
        { field: 'solde', headerName: 'Solde', width: 300 },
    ];

    return (
        <>
            <div className="md:flex ">
                <input
                    className="recherche placeholder:italic placeholder:text-slate-400 block bg-white border-slate-300 w-[50%]"
                    type="text"
                    value={search}
                    onChange={Recherche}
                    placeholder="Recherche...."
                />
            </div>
            <div className="mx-[6%] w-[92.3%]">
                <DataGrid
                
                    rows={filteredData}
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
