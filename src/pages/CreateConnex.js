import {motion} from 'framer-motion';
import CreationCompte from '../formulaire/CreationCompte';


export default function Entreprises(){
    return (
        <>
          <motion.div className="container2"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.8,duration:1.5}}
          >
             <motion.div className="container22"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1.5,duration:1.5}}
          >  
           {/* place pour ajouter le contenu  */}
           <CreationCompte />
          </motion.div>

          </motion.div>
        </>
    )
}