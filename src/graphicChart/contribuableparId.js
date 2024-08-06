import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Bar,
  ComposedChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from 'recharts';

export default function Graph() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/comptes')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des identités des transactions:", error);
      });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedUser) {
        try {
          const response = await axios.get(`http://localhost:8000/api/transaction/trans/${selectedUser}`);
          setData(response.data); // Correction ici : utiliser response.data
        } catch (error) {
          console.error("Erreur lors de la récupération des données:", error);
        }
      }
    };
    fetchData();
  }, [selectedUser]);

  const handleSelectChange = (e) => {
    setSelectedUser(e.target.value);
  };

  return (
    <div>
      <select
        id="Id_trans"
        className='afficheC'
        name="Id_trans"
        value={selectedUser}
        onChange={handleSelectChange}
        required
      >
        <option value="">Sélectionner Contribuable</option>
        {users.map((user) => (
          <option key={user.Id_compte} value={user.Id_compte}>
            {user.Nom_util}
          </option>
        ))}
      </select>

      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart 
          width={50} height={400} data={data} margin={{top: 20, right: 20, bottom: 20, left: 20}}
        >
          <XAxis dataKey="minute"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip/>
          <Legend />
          <Bar dataKey="recette" fill="#42b883" />
          <Bar dataKey="depense" fill="#272343" />
          <Scatter dataKey="utilisateur" fill="red"/>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
