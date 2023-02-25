import React from 'react';
import useUniqueId from "../hooks/useId";
import RegisterPage from "../pages/RegisterPage"

const  HomePage  = React.lazy(() => import('../pages/Home'));
const  ProportiesPage  = React.lazy(() => import('../pages/Proporties'));
const  FavouritesPage  = React.lazy(() => import('../pages/FavouritesPage'));
const  HousePage  = React.lazy(() => import('../pages/HousePage'));



// import { HomePage } from '../pages/Home';
// import { ProportiesPage } from '../pages/Proporties';


export const navbar = [
    {
        id: useUniqueId,
        title: 'Home',
        path: '/home',
        private: false,
        hidden: false,
        element: (
            <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>} >
                <HomePage />{''}
            </React.Suspense>
            // <HomePage />
        ),
    },
    {
        id: useUniqueId,
        title: 'Proporties',
        path: '/proporties',
        private: false,
        hidden: false,
        element: (
            <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>} >
                <ProportiesPage />
            </React.Suspense>
            // <ProportiesPage />
        ),
    },
    {
        id: useUniqueId,
        title: 'Favourites',
        path: '/favourites',
        private: true,
        hidden: true,
        element: (
            <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>} >
                <FavouritesPage />
            </React.Suspense>
            // <ProportiesPage />
        ),
    },
    {
        id: useUniqueId,
        title: 'HousePage',
        path: '/proporties/:id',
        private: false,
        hidden: true,
        element: (
            <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>} >
                <HousePage />
            </React.Suspense>
            // <ProportiesPage />
        ),
    },
    {
        id: useUniqueId,
        title: 'Register',
        path: '/Register',
        private: false,
        hidden: true,
        element: <RegisterPage/>,
    },
    {
        id: useUniqueId,
        title: 'Sign Up',
        path: '/SignUp',
        private: false,
        hidden: true,
        element: <h1>Sign Up</h1>,
    },
];