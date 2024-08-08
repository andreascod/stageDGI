import {motion} from 'framer-motion';
import Connexion from '../formulaire/Connexion';
import InterfaceLogin from '../components/InterfaceLogin';


export default function Connex(){
    return (
        <>
         <InterfaceLogin/>
             <motion.div className="containerLog"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1.5,duration:1.5}}
          >  
           {/* place pour ajouter le contenu  */}
           <Connexion />
          </motion.div>
       
        </>
    )
}