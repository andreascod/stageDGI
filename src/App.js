import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Connex from './pages/Connex.js';
import CreateConnex from './pages/CreateConnex.js';
import Navbar from './components/Navbar.js';
import Tableau from './pages/Tableau.js';
import InterfaceLogin from './components/InterfaceLogin.js';
import Compte from './pages/Compte.js';
import Transaction from './pages/Transaction.js';
import Justificatifs from './pages/Justificatifs.js';
import Financiers from './pages/Financiers.js';

const App = () => {
    return (
        <>
             {/* <InterfaceLogin /> */}
             <Navbar />
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Tableau />} />
                    <Route path='/Compte' element={<Compte />} />
                    <Route path='/Transaction' element={<Transaction />} />
                    <Route path='/Justificatifs' element={<Justificatifs />} />
                    <Route path='/Financiers' element={<Financiers />} />
                    <Route path='/Connex' element={<Connex />} />
                    <Route path='/CreateConnex' element={<CreateConnex />} />
                    <Route path='/Navbar' element={<Navbar />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
