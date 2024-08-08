import {motion} from 'framer-motion';
import CreationCompte from '../formulaire/CreationCompte';
import InterfaceLogin from '../components/InterfaceLogin';


export default function Entreprises(){
    return (
        <>
         <InterfaceLogin/>
             <motion.div className="containerLog"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1.5,duration:1.5}}
          >  
           {/* place pour ajouter le contenu  */}
           <CreationCompte/>
          </motion.div>
        </>
    )
}