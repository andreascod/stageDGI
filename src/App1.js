
import React from 'react';
import Connex from './pages/Connex.js';
import CreateConnex from './pages/CreateConnex.js';
import { Route, Routes } from 'react-router-dom';
import InterfaceLogin from './components/InterfaceLogin.js';
import Navbar from './components/Navbar.js';

const App = () => {
    return (
        <>
             <InterfaceLogin />
             <div className='container'>
                <Routes>
                    <Route path='/Connex' element={<Connex/>}/>
                    <Route path='/CreateConnex' element={<CreateConnex/>}/>
                    <Route path='/Navbar' element={<Navbar />} />
                </Routes>
             </div>
        </>
    );
};

export default App;

