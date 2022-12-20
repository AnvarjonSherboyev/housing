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
];