import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav className="nav"
            initial={{ y: -100 }}
            animate={{ y: -10 }}
            transition={{ delay: 3, duration: 1.5, type: 'spring', stiffness: 120 }}
        >
            {/* <Link to="/" className="logodgi" style={{

                color:'wheat'
                ,textDecoration:'none',
                fontWeight:'bold', 
            }}>
                DGI
            </Link> */}
            <h1 className="logodgi">DGI</h1>
            <ul
             style={{
                padding: '0',
             margin: '1rem 1rem',
             listStyle:' none',
             display:'flex',
             gap: '1rem',
             cursor: 'pointer',

             }}
            
            
            >
                <motion.li
                    whileHover={{ scale: 1.13, originX: 0.3 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <Link to="/Compte" className={window.location.pathname === "/Compte" ? "active" : ""} 
                    style={{
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    }}

                    >
                        Compte
                    </Link>
                </motion.li>
                {/* <motion.li
                    whileHover={{ scale: 1.13, originX: 0.3 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <Link to="/Transaction" className={window.location.pathname === "/Transaction" ? "active" : ""}
                    style={{
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    }}

                    >
                        Transactions
                    </Link>
                </motion.li> */}
                <motion.li
                    whileHover={{ scale: 1.13, originX: 0.3 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <Link to="/Financiers" className={window.location.pathname === "/Financiers" ? "active" : ""}
                    style={{
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    }}

                    >
                        Rapports financiers
                    </Link>
                </motion.li>
                {/* <motion.li
                    whileHover={{ scale: 1.13, originX: 0.3 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <Link to="/Justificatifs" className={window.location.pathname === "/Justificatifs" ? "active" : ""}
                    style={{
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    }}

                    >
                        Justificatifs
                    </Link>
                </motion.li> */}
            </ul>
        </motion.nav>
    );
}
