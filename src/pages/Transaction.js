import React, { useState, useEffect,Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import AnimatedAlert from "../formulaire/AnimatedAlert"
import AuthUser from '../components/AuthUser';
import IMAGE from "../3D/data.png";
import Modal from '../components/Modal';
import FloatingBox from '../Floatingbox';
import PropagateLoader from 'react-spinners/PropagateLoader';
const Transaction = () => { 
    const [formData, setFormData] = useState({ 
        Id_compte: '',
        montan: '',
        type: '', // Assurez-vous que ce champ est bien initialisé
    });
    const override: CSSProperties = {
        display: "block",
        margin: "20% 47%",
        borderColor: "#53a8b6",
      };
    const [comptes, setComptes] = useState([]);
    const [alert, setAlert] = useState(null);
    const {http}=AuthUser();
    const [showModal,setShowModal]=useState(false);
    useEffect(() => {
        // Récupérer la liste des comptes
        http.get('/comptes/recuperation')
            .then(response => {
                setComptes(response.data);
            })
            .catch(error => {
                console.error("Il y a eu une erreur lors de la récupération des comptes!", error);
            });
    }, [http]);

    const handleChange = (e) => { 
        const { name, value } = e.target; 
        setFormData({ 
            ...formData, 
            [name]: value 
        }); 
    };

    const handleSubmit = async (e) => { 
        e.preventDefault(); 
        console.log('Données envoyées:', formData); // Affichez les données pour vérifier

        try { 
            const response = await http.post('/transactions', formData); 
            console.log('Data inserted successfully:', response.data); 
            setAlert({ message: 'Transaction réussie!', type: 'success' });
        } catch (error) { 
            let message = 'Erreur inconnue.';
            if (error.response) {
                console.log('Erreur réponse:', error.response); // Affichez les détails de l'erreur
                message = `Erreur : ${error.response.data.message}`;
            } else if (error.request) {
                message = 'Erreur. Aucune réponse reçue du serveur.';
            }
            setAlert({ message, type: 'error' });
        } 
    }; 

    const handleCloseAlert = () => {
        setAlert(null);
    };
    const[loading,setLoading]=useState(false)
    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },3000)
    },[])
    return (
        <Fragment>
          {/* <Navbar/> */}
         <div>
          {
          loading?(
          <PropagateLoader
        color='#53a8b6'
        loading={loading}
        cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />   
           ) :( 
          <motion.div  className='w-[70%] h-[460px] mx-[15%]  flex items-start fixed border-[1px] '
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1.5,duration:1.5}}
          
          >  
           <div className='relative mx-[12%] flex flex-col'>
            <div className='absolute top-[25%] left-[10%] flex flex-col'>
                 
            </div>
            {/* <img src={IMAGE} className='w-[400px] h-[400px] object-cover mx-[150px] my-[90px]' alt='Background' /> */}
           </div>
           <div className='w-1/2 h-4/5 bg-[#ffffff]  flex flex-col p-20 '>

            <div  className='w-full flex flex-col mb-2'>
             <div className='w-full h-[400px] flex flex-col '>
             <p className='text-2xl text-[#336666] font-semibold mb-4 my-6'>Transaction</p>
             <form onSubmit={handleSubmit}>
             <div
               className='w-full flex flex-col'
             >
                <select
                
                id='Id_compte'
                name='Id_compte'
                value={formData.Id_compte}
                onChange={handleChange}
                required
                className='w-[100%] text-black  bg-[#ffffff] outline-none focus:outline-none my-4'
                >
                  <option value="">Sélectionner une compte</option>
                    {comptes.map((compte) => (
                        <option key={compte.Id_compte} value={compte.Id_compte}>
                           {compte.Id_compte}
                        </option>
                    ))}
                </select>
                <input
                
                type='number'
                placeholder='montant en Ariary '
                 name='montan'
                 value={formData.montan}
                 onChange={handleChange}
                 required
                 className="mt-1 block my-[1rem] w-[100%] px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                 <select
                    id="type"
                    name='type'
                    className='w-ful text-black    bg-[#ffffff] outline-none  focus:outline-none my-4'
                    value={formData.type}
                    onChange={handleChange}
                    required
                >
                    <option value="">Sélectionner un type</option>
                    <option value="recette">Recette</option>
                    <option value="depense">Dépense</option>
                </select>
              
              <button  className='w-[100%] h-14 text-white bg-[#336666] rounded-md text-center flex items-center justify-center my-6'type='submit'>
                 Ajouter transaction
              </button>
             </div>
             <div>
                <FloatingBox/>
             </div>
             </form>
             <AnimatePresence>
         {alert && (
             <AnimatedAlert
                 message={alert.message}
                 type={alert.type}
                 onClose={handleCloseAlert}
             />
         )}
     </AnimatePresence>
             </div>
            
            </div>
           </div>
           <FloatingBox onContribuableClick={()=>setShowModal(true)}/>
          </motion.div>
        )}
        </div>
        <Modal isVisible={showModal} onClose={()=>setShowModal(false)}/>
    </Fragment>
    ); 
}; 

export default Transaction;
