import React from 'react';
import Navbar from './components/Navbar.js';
import AuthUser from './components/AuthUser.js';
import InterfaceLogin from './components/InterfaceLogin.js';
import CompteContribuable from './pages/CompteContribuable.js';

const App1 = () => {
    const { getToken, user } = AuthUser();

    if (!getToken()) {
        return <InterfaceLogin />;
    }

    if (user?.role === 'admin') {
        // return <Navbar />;
        return <Navbar/>
    } else if (user?.role === 'user') {
        return <CompteContribuable />;
    }

    return null;
};

export default App1;

