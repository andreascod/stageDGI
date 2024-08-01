import { motion } from "framer-motion"
import ChartContribuable from "../graphicChart/Contribuable"
export default function Financiers(){
    return (
        <>
         {/* affichage liste des contribuable  */}
         <motion.div className="containerContribuable"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.8,duration:1.5}}
          >
             <ChartContribuable/>
          </motion.div>
          <motion.div className="containergraph1"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1.5,duration:1.5}}
          >
         
          </motion.div>

         
        </>
    )
}