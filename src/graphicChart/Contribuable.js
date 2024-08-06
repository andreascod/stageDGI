import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  // BarChart,
  Bar,
  ComposedChart,
  ResponsiveContainer,
  XAxis,
  // Area,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  Scatter,
} from 'recharts';

const ChartContribuable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get('http://localhost:8000/api/transactions/trans');
        const response = await axios.get('http://localhost:8000/api/transactions/trans');
        setData(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart 
      // width={500} height={400} data={data}
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
        {/* <Area type="monotone" dataKey="Nom_util" fill="#8884d8" stroke="#8884d8" /> fafaina */}
        {/* <Bar dataKey="recette" fill="#42b883" >
         <LabelList dataKey="utilisateur" position="top"/>
        </Bar>
        <Bar dataKey="depense" fill="#272343" >
        <LabelList dataKey="utilisateur" position="top"/>
         </Bar> */}
          <Bar dataKey="recette" fill="#42b883" ></Bar>
          <Bar dataKey="depense" fill="#272343" ></Bar>
          <Scatter dataKey="utilisateur" fill="red" />
        </ComposedChart>
    </ResponsiveContainer>
  );
};

export default ChartContribuable;
