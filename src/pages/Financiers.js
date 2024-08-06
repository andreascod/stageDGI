import { motion } from "framer-motion"; // Correction de l'importation de 'color'
import ChartContribuable from "../graphicChart/Contribuable";
import { useEffect, useState, CSSProperties } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import Graph from "../graphicChart/contribuableparId";
const override: CSSProperties = {
  display: "block",
  margin: "20% 47%",
  borderColor: "#53a8b6",
};

export default function Financiers() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
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
            <motion.div
              className="containerContribuable"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.5 }}
            >
              <ChartContribuable />
            </motion.div>

            <motion.div
              className="containergraph1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.5 }}
            >
              {/* Contenu pour le graph1 */}
             {/* <AffichageCompte/> */}
             <Graph />
             <renderCustomizedLabel/>
            </motion.div>
            <div className="tableauContainer">

            </div>
          </>
        )}
      </div>
    </>
  );
}
