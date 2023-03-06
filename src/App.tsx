import React, { FC, useEffect } from 'react'

import { Routes, Route, useNavigate } from 'react-router-dom'

import Home from './pages/home/Home'
import Login from './pages/login/Login'
import NotFound from './pages/notFound/NotFound'
import WatchScreen from './pages/watchScreen/WatchScreen'
import SearchPage from './pages/searchPage/SearchPage'
import SubscriptionsPage from './pages/subsctiptionsPage/SubscriptionsPage'
import ChannelPage from './pages/channelPage/ChannelPage'

import MainLayout from './layouts/MainLayout'
import HomeLayout from './layouts/HomeLayout'

import { useTypedSelector } from './hooks/useTypedSelector'

import './scss/_app.scss'

const App: FC = () => {
    const { accessToken, loading } = useTypedSelector((state) => state.auth)

    const navigate = useNavigate()

    useEffect(() => {
        if (!loading && !accessToken) {
            navigate('/auth')
        }
    }, [accessToken, loading])

    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route path='' element={<HomeLayout />}>
                    <Route path='' element={<Home />} />
                    <Route path='search/:query' element={<SearchPage />} />
                    <Route path='watch/:id' element={<WatchScreen />} />
                    <Route
                        path='feed/subscriptions'
                        element={<SubscriptionsPage />}
                    />
                    <Route
                        path='channel/:channelId'
                        element={<ChannelPage />}
                    />
                </Route>
                <Route path='auth' element={<Login />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default App
