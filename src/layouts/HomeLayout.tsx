import React, { FC, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { Container } from 'react-bootstrap'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'

const HomeLayout: FC = () => {
    const [openSidebar, setOpenSidebar] = useState<boolean>(false)

    function handleOpenSidebar(): void {
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
                <Container className='app__main'>
                    <Outlet />
                </Container>
            </div>
        </>
    )
}

export default HomeLayout
