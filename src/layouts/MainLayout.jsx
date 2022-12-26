import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './../components/sidebar/Sidebar'
import Header from './../components/header/Header'
import CategoriesBar from './../components/categoriesBar/CategoriesBar'

const MainLayout = () => {
    const [openSidebar, setOpenSidebar] = useState(false)

    const handleOpenSidebar = () => {
        setOpenSidebar((value) => !value)
    }

    return (
        <div className='wrapper'>
            <Header handleOpenSidebar={handleOpenSidebar} />
            <div className='app__container'>
                <Sidebar
                    handleOpenSidebar={handleOpenSidebar}
                    openSidebar={openSidebar}
                />
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout
