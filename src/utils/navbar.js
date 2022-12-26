import React from 'react';
import useUniqueId from "../hooks/useId";

// const { HomePage } = React.lazy(() => import('../pages/Home'));
// const { ProportiesPage } = React.lazy(() => import('../pages/Proporties'));

import { HomePage } from '../pages/Home';
import { ProportiesPage } from '../pages/Proporties';


export const navbar = [
    {
        id: useUniqueId,
        title: 'Home',
        path: '/home',
        private: false,
        hidden: false,
        element: (
            // <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>} >
            //     <HomePage />{''}
            // </React.Suspense>
            <HomePage />
        ),
    },
    {
        id: useUniqueId,
        title: 'Proporties',
        path: '/proporties',
        private: false,
        hidden: false,
        element: (
            // <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>} >
            //     <ProportiesPage />
            // </React.Suspense>
            <ProportiesPage />
        ),
    },
    {
        id: useUniqueId,
        title: 'Sign In',
        path: '/SignIn',
        private: false,
        hidden: true,
        element: <h1>Sign IN</h1>,
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