import React, { useEffect } from 'react'

import { Routes, Route, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Home from './pages/home/Home'
import Login from './pages/login/Login'
import NotFound from './pages/notFound/NotFound'
import WatchScreen from './pages/watchScreen/WatchScreen'

import MainLayout from './layouts/MainLayout'
import HomeLayout from './layouts/HomeLayout'

import './scss/_app.scss'

const App = () => {
    const { accessToken, loading } = useSelector((state) => state.auth)

    const navigate = useNavigate()

    useEffect(() => {
        if (!loading && !accessToken) {
            navigate('/auth')
        }
    }, [accessToken, loading, navigate])

    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route path='' element={<HomeLayout />}>
                    <Route path='' element={<Home />} />
                    <Route path='search' element={<h1>Search Value</h1>} />
                    <Route path='watch/:id' element={<WatchScreen />} />
                </Route>
                <Route path='auth' element={<Login />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default App
