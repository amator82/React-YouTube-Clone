import React, { useState } from 'react'

import { Container } from 'react-bootstrap'

import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'

import './_app.scss'

const App = () => {
    const [openSidebar, setOpenSidebar] = useState(false)

    const handleOpenSidebar = () => {
        setOpenSidebar((value) => !value)
    }
    return (
        <>
            <Header handleOpenSidebar={handleOpenSidebar} />
            <div className='app__container border border-info'>
                <Sidebar openSidebar={openSidebar} />
                <Container fluid className='app__main border border-warning'>
                    <HomeScreen />
                </Container>
            </div>
        </>
    )
}

export default App
