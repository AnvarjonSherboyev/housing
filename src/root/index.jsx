import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from './style';
import { navbar } from './../utils/navbar';
import { Navbar } from './../components/Navbar/index';

const Root = () => {
    return (
        <Container>
            <BrowserRouter>
                <Routes>
                    <Route element={<Navbar />}>

                        {
                            navbar.map(({ id, path, title, element }) => {
                                return (
                                    <Route key={id} path={path} element={element} />
                                )
                            })
                        }
                        <Route path='/*' element={<h1>404 Not Found</h1>} />А
                        <Route path='/' element={<Navigate to={'/home'} />} />
                    </Route>
                </Routes >
            </BrowserRouter >
        </Container>
    )
}

export default Root;
