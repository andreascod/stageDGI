import {motion} from 'framer-motion';
import FormulaireCompte from '../formulaire/formulaireCompte';
import FormulaireAffichageCompte from '../formulaire/formulaireAffichageCompte';
import AffichageCompte from '../formulaire/AffichageCompte';
import FormulaireTransaction from '../formulaire/formulaireTransaction';



export default function Entreprises(){
    return (
        <>
          <motion.div className="container2"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.8,duration:1.5}}
          >
             <motion.div className="containerafficheCompte"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1.5,duration:1.5}}
          >  
           {/* place pour ajouter le contenu  */}
          <FormulaireAffichageCompte />
          </motion.div>



          {/* container pour ajouter l'affichage de tout les compte du
          contribuable */}
          <motion.div className="containerafficheresultcompte"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1.5,duration:1.5}}
          >  
           {/* place pour ajouter le contenu  */}
             <AffichageCompte/>
          </motion.div>


         
                      {/* container pour creation compte_tresorerie */}
             <motion.div className="container22"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1.5,duration:1.5}}
          >  
           {/* place pour ajouter le contenu  */}
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
        </>
    )
}