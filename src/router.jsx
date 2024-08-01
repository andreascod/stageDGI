import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Notfund from "./views/Notfund";
import DefaultLayout from "./components/DefaultLayout";
import Users from "./views/Users";
import GestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";

const router = createBrowserRouter ([
    {
        path:'/',
        element:<DefaultLayout/>,
        children:[
            {
                path:'/',
                element:<Navigate to="/users" />
             },
            {
                path:'/Dashboard',
                element:<Dashboard />
             },
             {
                path:'/Users',
                element:<Users />
             },
        ]
    },
    {
        path:"/",
        element:<GestLayout/>,
        children:[
            {
                path:'/Login',
                element:<Login />
             },
             {
               path:'/Signup',
               element:<Signup />
            },
        ]
    },
 
 {
    path:'*',
    element:<Notfund />
 }
])

export default router;
