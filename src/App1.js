
import React from 'react';
import Connex from './pages/Connex.js';
import CreateConnex from './pages/CreateConnex.js';
import { Route, Routes } from 'react-router-dom';
import InterfaceLogin from './components/InterfaceLogin.js';
import Navbar from './components/Navbar.js';
import App from './App.js';
import Compte from './pages/Compte.js';
import Transaction from './pages/Transaction.js';
import Justificatifs from './pages/Justificatifs.js';
import Financiers from './pages/Financiers.js';

const App1 = () => {
    return (
        <>
             <div className='container'>
                <Routes>
                <Route path='/' element={<Compte />} />
                    <Route path='/Compte' element={<Compte />} />
                    <Route path='/Transaction' element={<Transaction />} />
                    <Route path='/Financiers' element={<Financiers />} />
                    <Route path='/App' element={<App/>}/>
                    <Route path='/Connex' element={<Connex/>}/>
                    <Route path='/CreateConnex' element={<CreateConnex/>}/>
                    <Route path='/Navbar' element={<Navbar />} />
                </Routes>
             </div>
        </>
    );
};

export default App1;

