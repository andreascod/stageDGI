import { motion } from "framer-motion"; // Correction de l'importation de 'color'
import ChartContribuable from "../graphicChart/Contribuable";
import { useEffect, useState, CSSProperties, Fragment } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import Graph from "../graphicChart/contribuableparId";
import Modal from '../components/Modal';
import AffichageInformation from "../formulaire/AffichageInfoContribuable";
import FloatingBox from '../Floatingbox';
const override: CSSProperties = {
  display: "block",
  margin: "20% 47%",
  borderColor: "#53a8b6",
};

export default function Financiers() {
  const [loading, setLoading] = useState(false);
  const [showModal,setShowModal]=useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Fragment>
      {/* <Navbar/> */}
      <div>
        {loading ? (
          <PropagateLoader
            color={"#53a8b6"} // Remplacez par la couleur souhaitée
            loading={loading}
            cssOverride={override}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <>
            <div className="md:flex space-x-12 hidden  ">
            <motion.div
              className="bg-[#ffffff] w-[50%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.5 }}
            >
              <ChartContribuable />
            </motion.div>

            <motion.div
              className="bg-[#ffffff] w-[50%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
            >
              {/* Contenu pour le graph1 */}
             {/* <AffichageCompte/> */}
             <Graph />
             <renderCustomizedLabel/>
            
            </motion.div>
           </div>
           
                  <AffichageInformation/>
                  <FloatingBox onContribuableClick={()=>setShowModal(true)}/>

          </>
        )}
      </div>
      <Modal isVisible={showModal} onClose={()=>setShowModal(false)}/>
    </Fragment>
  );
}
