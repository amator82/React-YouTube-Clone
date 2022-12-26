import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import Login from './pages/login/Login'
import NotFound from './pages/notFound/NotFound';

import MainLayout from './layouts/MainLayout'
import HomeLayout from './layouts/HomeLayout'

import './scss/_app.scss'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route path='' element={<HomeLayout />}>
                    <Route path='' element={<Home />} />
                    <Route path='search' element={<h1>Search Value</h1>} />
                </Route>
                <Route path='auth' element={<Login />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default App
