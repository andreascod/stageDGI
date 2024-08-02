import { motion} from 'framer-motion';
import FormulaireCompte from '../formulaire/formulaireCompte';
import FormulaireAffichageCompte from '../formulaire/formulaireAffichageCompte';
import AffichageCompte from '../formulaire/AffichageCompte';
import FormulaireTransaction from '../formulaire/formulaireTransaction';
import { useEffect, useState,CSSProperties } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
const override: CSSProperties = {
  display: "block",
  margin: "20% 47%",
  borderColor: "#53a8b6",
};


export default function Entreprises(){
    const[loading,setLoading]=useState(false)
    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },3000)
    },[])
    return (
        <>
        
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
         
        
         
          <motion.div className="container2"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.8,duration:1.5}}
          >
             <motion.div className="containerafficheCompte"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.8,duration:1.5}}
          >  
           {/* place pour ajouter le contenu  */}
          <FormulaireAffichageCompte />
          </motion.div>



          {/* container pour ajouter l'affichage de tout les compte du
          contribuable */}
          <motion.div className="containerafficheresultcompte"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:2,duration:1.5}}
          >  
           {/* place pour ajouter le contenu  */}
             <AffichageCompte/>
          </motion.div>


         
                      {/* container pour creation compte_tresorerie */}
             <motion.div className="container22"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1,duration:1.5}}
          >  
           {/* place pour ajouter une transaction */}
           <FormulaireCompte />
          </motion.div>
          <motion.div className="container33"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1.5,duration:1.5}}
          >
          <FormulaireTransaction />   
          </motion.div>    
         </motion.div>
         
        )}
        </div>
        </>
    )
}