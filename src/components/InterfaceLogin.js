import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Connex from "../pages/Connex";
import CreateConnex from "../pages/CreateConnex"
import { Route, Routes } from 'react-router-dom';
import LOGO from "../logo_by_vahatra/logo.png";

export default function InterfaceLogin() {
    return (
        <>
        <motion.nav className="navl"
            initial={{ y: -100 }}
            animate={{ y: -10 }}
            transition={{ delay: 0.2, duration: 1, type: 'spring', stiffness: 120 }}
        >
            {/* <p className="logodgi" style={{color:'#233142'}}>
                DGI
            </p> */}
            <img src={LOGO} className="w-[6%] "/>
            <ul>
                <li
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
                </li>
            </ul>
        </motion.nav>
                 <div className='container'>
                 <Routes>
                 <Route path='/' element={<Connex/>}/>
                 <Route path='/Connex' element={<Connex />} />
                 </Routes>
             </div>
        </>
    );
}
