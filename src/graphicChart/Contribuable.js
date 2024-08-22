import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import AuthUser from '../components/AuthUser';

// Fonction pour ajouter un délai avant l'exécution d'une fonction (debounce)
function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

const ChartContribuable = () => {
  const [data, setData] = useState([]);
  const { http } = AuthUser();

  useEffect(() => {
    const fetchData = debounce(async () => {
      try {
        const response = await http.get('/transactions');
        console.log('Données récupérées:', response.data); // Vérifier les données récupérées
        setData(response.data);
      } catch (error) {
        if (error.response && error.response.status === 429) {
          console.error('Trop de requêtes. Veuillez réessayer plus tard.');
        } else {
          console.error('Erreur lors de la récupération des données:', error);
        }
      }
    }, 1000); // 1 seconde de délai pour limiter les requêtes
    fetchData();
  }, [http]);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart 
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <XAxis dataKey="minute" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="recette" fill="#42b883" />
        <Bar dataKey="depense" fill="#272343" />
        <Scatter dataKey="utilisateur" fill="red" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default ChartContribuable;
