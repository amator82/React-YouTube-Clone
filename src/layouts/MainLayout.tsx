import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout: FC = () => {
    return (
        <div className='wrapper'>
            <Outlet />
        </div>
    )
}

export default MainLayout
