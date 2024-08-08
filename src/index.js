import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Style.css';
import './stylecomponents.css';
import './graphic.css';
 import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
