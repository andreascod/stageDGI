import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function InterfaceLogin() {
    return (
        <motion.nav className="navl"
            initial={{ y: -100 }}
            animate={{ y: -10 }}
            transition={{ delay: 0.2, duration: 1, type: 'spring', stiffness: 120 }}
        >
            <Link to="/" className="logodgi">
                DGI
            </Link>
            <ul>
                <motion.li
                    whileHover={{ scale: 1.13, originX: 0.3 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <Link to="/CreateConnex" className={window.location.pathname === "/CreateConnex" ? "active" : ""}>
                        Creer Compte
                    </Link>
                </motion.li>
                <motion.li
                    whileHover={{ scale: 1.13, originX: 0.3 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <Link to="/Connex" className={window.location.pathname === "/Connex" ? "active" : ""}>
                        connexion
                    </Link>
                </motion.li>
            </ul>
        </motion.nav>
    );
}
