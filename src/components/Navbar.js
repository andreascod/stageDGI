import React, { useState } from "react";
import { Link ,Routes,Route} from "react-router-dom";
import { motion } from "framer-motion";
import Compte from "../pages/Compte";
import Financiers from "../pages/Financiers";
import Transaction from "../pages/Transaction";
import AuthUser from "./AuthUser";
import { FaBars ,FaTimes} from "react-icons/fa";
import LOGO from "../logo_by_vahatra/logo.png";
export default function Navbar() {
    const { token, logout, user } = AuthUser();
    const [isMenuOpen,setIsMenuOpen]=useState(false)
    const logoutUser = () => {
        if (token !== undefined) {
            logout();
        }
    };
    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header>
            <motion.nav 
                initial={{ y: -100 }}
                animate={{ y: -10 }}
                transition={{ delay: 3, duration: 1.5, type: 'spring', stiffness: 120 }}
                className={`py-4 lg:px-14 px-4 `}
            >
                <div className="flex  justify-between items-center text-base gap-8 ">
                <ul
                    className="md:flex space-x-12 hidden  "
                >
                     <img src={LOGO} className="w-[6%]"/>
                    <motion.li 
                        whileHover={{ scale: 1.13, originX: 0.3 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <Link to="/Compte"
                            className={window.location.pathname === "/Compte" ? "active" : ""}
                            
                        >
                            Compte
                        </Link>
                    </motion.li>

                    <motion.li
                        whileHover={{ scale: 1.13, originX: 0.3 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <Link to="/Transaction"
                            className={window.location.pathname === "/Transaction" ? "active" : ""}
                          
                        >
                            transaction
                        </Link>
                    </motion.li>

                    <motion.li
                        whileHover={{ scale: 1.13, originX: 0.3 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <Link to="/Financiers"
                            className={window.location.pathname === "/Financiers" ? "active" : ""}
                           
                        >
                            Rapports financiers
                        </Link>
                    </motion.li>
                </ul>
                <div className="md:hidden">
                <span role="button"  onClick={toggleMenu}
                 className="text-neutralDGrey focus:outline-none focus:text-gray-500"
                > 
                {
                   isMenuOpen ? (<FaTimes className="h-6 w-6"/>):( <FaBars className="h-6 w-6"/>)
                }
                   </span>
                   </div>
                   <div className={`space-y-1 px-10 mt-16 py-3  bg-brandPrimary ${isMenuOpen ? "block fixed top-0 rigth-12 left-0":"hidden"}`}>
                    
                     </div>
                 </div>
               
            </motion.nav>

            {/* Routes spécifiquement gérées dans Navbar */}
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Compte />} />
                    <Route path='/Compte' element={<Compte />} />
                    <Route path='/Transaction' element={<Transaction />} />
                    <Route path='/Financiers' element={<Financiers />} />
                </Routes>
            </div>
        </header>
    );
}


