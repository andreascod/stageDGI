
import {motion} from 'framer-motion';
// import {ReactComponent as Mylogo} from '../image/dgi.svg';
export default function Tableau(){
    return (
        <>
          <motion.div className="container1"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.8,duration:1.5}}
          >
              {/* <Mylogo /> */}
          </motion.div>
        </>
    )
}