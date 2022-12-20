import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from './style';

const Root = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<h1>Home</h1>} />
                <Route path='/proporties' element={<h1>proporties</h1>} />
                <Route path='/*' element={<h1>404 Not Found</h1>} />
                <Route path='/' element={<Navigate to={'/home'} />} />
            </Routes >
        </BrowserRouter >
    )
}

export default Root;
