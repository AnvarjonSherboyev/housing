import useUniqueId from "../hooks/useId";
import { HomePage } from './../pages/Home/index';
import { ProportiesPage } from './../pages/Proporties/index';


export const navbar = [
    {
        id: useUniqueId,
        title: 'Home',
        path: '/home',
        private: false,
        hidden: false,
        element: <HomePage />,
    },
    {
        id: useUniqueId,
        title: 'Proporties',
        path: '/Proporties',
        private: false,
        hidden: false,
        element: <ProportiesPage />,
    },
    {
        id: useUniqueId,
        title: 'Sign In',
        path: '/SignIn',
        private: false,
        hidden: true,
        element: <h1>Sign IN</h1> ,
    },
    {
        id: useUniqueId,
        title: 'Sign Up',
        path: '/SignUp',
        private: false,
        hidden: true,
        element: <h1>Sign Up</h1> ,
    },
];