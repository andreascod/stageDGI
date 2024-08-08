import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function InterfaceLogin() {
    return (
        <>
        <motion.nav className="navl"
            initial={{ y: -100 }}
            animate={{ y: -10 }}
            transition={{ delay: 0.2, duration: 1, type: 'spring', stiffness: 120 }}
        >
            <p className="logodgi" style={{color:'#233142'}}>
                DGI
            </p>
            <ul>
                <motion.li
                    whileHover={{ scale: 1.13, originX: 0.3 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <Link id="link" to="/CreateConnex" className={window.location.pathname === "/CreateConnex" ? "active" : ""}
                     style={{
                        color: '#233142',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        }}
                    
                    >
                        Creer Compte
                    </Link>
                </motion.li>
                <motion.li
                    whileHover={{ scale: 1.13, originX: 0.3 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <Link id="link" to="/Connex" className={window.location.pathname === "/Connex" ? "active" : ""}
                     style={{
                        color: '#233142',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        }}
                    >
                        connexion
                    </Link>
                </motion.li>
            </ul>
        </motion.nav>
        </>
    );
}
