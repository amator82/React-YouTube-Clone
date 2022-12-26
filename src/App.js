import React, { useState } from 'react'

import Home from './pages/home/Home'
import Login from './pages/login/Login'

import { Routes, Route, Switch } from 'react-router-dom'

import './scss/_app.scss'
import MainLayout from './layouts/MainLayout'

const App = () => {

    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route
                    path=''
                    element={<Home />}
                />
                <Route path='auth' element={<Login />} />
            </Route>
        </Routes>
    )
}

export default App
