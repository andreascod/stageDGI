import React, { useState } from 'react'; 
import axios from 'axios'; 
const TypeMouv = () => { 
 const [formData
   , setFormData] = useState({ 
 Nom_type: '', 
 
 });
 const handleChange = (e) => { 
    const { name, value } = e.target; 
    setFormData({ 
    ...formData, 
    [name]: value 
    }); 
    }; 
    const handleSubmit = async (e) => { 
    e.preventDefault(); 
    try { 
    const response = await axios.post('http://localhost:8000/api/type_entreprises', 
   formData); 
    console.log('Data inserted successfully:', response.data); 
    } catch (error) { 
    console.error('Error inserting data:', error); 
    } 
    }; 
    return (
    <form onSubmit={handleSubmit}>
    <input type="text" name="Nom_type" placeholder="Nom" value={formData.Nom_type} 
   onChange={handleChange} required />
<button type="submit">Submit</button>
 </form> 
 ); 
}; 
export default TypeMouv;   