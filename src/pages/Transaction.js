import {motion} from 'framer-motion';
export default function Tresorerie(){
    return (
        <>
          <motion.div className="container3"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.8,duration:1.5}}
          >

          <motion.div className="container33"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1.5,duration:1.5}}
          >
         
          </motion.div>    
          </motion.div>
         
        </>
    )
}