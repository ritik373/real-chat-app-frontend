import React from 'react';
import SignUp from './signUp/SignUp';
import { Routes, Route } from 'react-router-dom';
import Login from './login/Login';
import Home from './Home/Home';
import Private from './Private/Private';
import Chat from './chat/Chat';

function AllRoutes(props) {
    return (
        <Routes>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />

            <Route path='/' element={
                <Private>
                    <Home />
                </Private>} />
            <Route path='/chat' element={
                <Private>
                    <Chat />
                </Private>} />
        </Routes>
    );
}

export default AllRoutes;