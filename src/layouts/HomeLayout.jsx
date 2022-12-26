import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { Container } from 'react-bootstrap'
import Header from './../components/header/Header'
import Sidebar from './../components/sidebar/Sidebar'

const HomeLayout = () => {
    const [openSidebar, setOpenSidebar] = useState(false)

    const handleOpenSidebar = () => {
        setOpenSidebar((value) => !value)
    }

    return (
        <>
            <Header handleOpenSidebar={handleOpenSidebar} />
            <div className='app__container'>
                <Sidebar
                    handleOpenSidebar={handleOpenSidebar}
                    openSidebar={openSidebar}
                />
                <Container fluid className='app__main'>
                    <Container>
                        <Outlet />
                    </Container>
                </Container>
            </div>
        </>
    )
}

export default HomeLayout
