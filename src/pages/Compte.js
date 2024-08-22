import { motion} from 'framer-motion';
import FormulaireCompte from '../formulaire/formulaireCompte';
import FormulaireAffichageCompte from '../formulaire/formulaireAffichageCompte';
import AffichageCompte from '../formulaire/AffichageCompte';
import { useEffect, useState,CSSProperties, Fragment } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import FloatingBox from '../Floatingbox';
import Modal from '../components/Modal';
import ModelRapp from '../components/ModelRapp'
const override: CSSProperties = {
  display: "block",
  margin: "20% 47%",
  borderColor: "#53a8b6",
};


export default function Entreprises(){
    const[loading,setLoading]=useState(false);
    const [showModal,setShowModal]=useState(false);
    const [hiseo,setHiseo]=useState(false);
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
         
            <motion.div 
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{delay:1.5,duration:1.5}}
            >
             <div className='md:flex space-x-12 hidden border  w-[92.3%] mx-[6%]'>
           <FormulaireCompte/>
           <FormulaireAffichageCompte/>
            </div>
            <div >
         <AffichageCompte/>
           </div>
              <FloatingBox onVuClick={()=>setHiseo(true)} onContribuableClick={()=>setShowModal(true)}/>
             
         </motion.div>
        )}
        </div>
        <Modal isVisible={showModal} onClose={()=>setShowModal(false)}/>
        <ModelRapp isVu={hiseo} onClose={()=>setHiseo(false)}/>
        </Fragment>
    )
}