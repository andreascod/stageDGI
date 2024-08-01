
import {motion} from 'framer-motion';
export default function Tableau(){
    return (
        <>
          <motion.div className="container1"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.8,duration:1.5}}
          >
             
          </motion.div>
        </>
    )
}