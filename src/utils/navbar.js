import React from 'react';
import useUniqueId from "../hooks/useId";
import { Loader } from './../components/Loader/index';


const HomePage = React.lazy(() => import('../pages/Home'));
const ProportiesPage = React.lazy(() => import('../pages/ProportiesPage'));
const FavouritesPage = React.lazy(() => import('../pages/FavouritesPage'));
const HousePage = React.lazy(() => import('../pages/HousePage'));
const MyProfilePage = React.lazy(() => import('../pages/MyProfilePage'));
const RegisterPage = React.lazy(() => import('../pages/RegisterPage'));
const SignInPage = React.lazy(() => import('../pages/SignInPage'));


// import { HomePage } from '../pages/Home';
// import { ProportiesPage } from '../pages/ProportiesPage';


export const navbar = [
    {
        id: useUniqueId,
        title: 'Home',
        path: '/home',
        private: false,
        hidden: false,
        element: (
            <React.Suspense fallback={<React.Fragment>
                <Loader />
            </React.Fragment>} >
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
            <React.Suspense fallback={<React.Fragment><Loader /></React.Fragment>} >
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
            <React.Suspense fallback={<React.Fragment><Loader /></React.Fragment>} >
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
            <React.Suspense fallback={<React.Fragment><Loader /></React.Fragment>} >
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
        element: (
            <React.Suspense fallback={<React.Fragment><Loader /></React.Fragment>} >
                <RegisterPage />
            </React.Suspense>
        ),
    },
    {
        id: useUniqueId,
        title: 'myprofile',
        path: '/myprofile',
        private: false,
        hidden: true,
        element: (
            <React.Suspense fallback={<React.Fragment><Loader /></React.Fragment>} >
                <MyProfilePage />
            </React.Suspense>
        ),
    },
    {
        id: useUniqueId,
        title: 'Sign In',
        path: '/signin',
        private: false,
        hidden: true,
        element: (
            <React.Suspense fallback={<React.Fragment><Loader /></React.Fragment>} >
                <SignInPage />
            </React.Suspense>
        ),
    },
];