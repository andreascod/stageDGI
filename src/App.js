import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Connex from './pages/Connex.js';
import CreateConnex from './pages/CreateConnex.js';
import Navbar from './components/Navbar.js';
import Compte from './pages/Compte.js';
import Transaction from './pages/Transaction.js';
import Justificatifs from './pages/Justificatifs.js';
import Financiers from './pages/Financiers.js';

const App = () => {
    return (
        <>
             {/* <InterfaceLogin /> */}
             {/* <Navbar/> */}
            <div className='container'>
                <Routes>
                    {/* <Route path='/' element={<Tableau />} /> */}
                    <Route path='/' element={<Compte />} />
                    <Route path='/Compte' element={<Compte />} />
                    <Route path='/Transaction' element={<Transaction />} />
                    <Route path='/Financiers' element={<Financiers />} />
                    <Route path='/Connex' element={<Connex />} />
                    <Route path='/CreateConnex' element={<CreateConnex />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
