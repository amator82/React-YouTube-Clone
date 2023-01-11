import React from 'react'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { log_out } from '../../redux/actions/auth.action'

import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied
} from 'react-icons/md'

import './_sidebar.scss'

const Sidebar = ({ openSidebar, handleOpenSidebar }) => {
    const dispatch = useDispatch()

    const logOutHandler = () => {
        dispatch(log_out())
    }

    return (
        <aside
            className={openSidebar ? 'sidebar open' : 'sidebar'}
            onClick={() => handleOpenSidebar(false)}
        >
            <ul className='sidebar__list'>
                <Link to='/'>
                    <li className='sidebar__link'>
                        <MdHome size={23} />
                        <span>Home</span>
                    </li>
                </Link>
                <Link to='/feed/subscriptions'>
                    <li className='sidebar__link'>
                        <MdSubscriptions size={23} />
                        <span>Subscriptions</span>
                    </li>
                </Link>
                <li className='sidebar__link'>
                    <MdThumbUp size={23} />
                    <span>Liked Video</span>
                </li>
                <li className='sidebar__link'>
                    <MdHistory size={23} />
                    <span>History</span>
                </li>
                <li className='sidebar__link'>
                    <MdLibraryBooks size={23} />
                    <span>Library</span>
                </li>
                <li className='sidebar__link'>
                    <MdSentimentDissatisfied size={23} />
                    <span>bruh</span>
                </li>
                <li
                    className='sidebar__link sidebar__link_border'
                    onClick={logOutHandler}
                >
                    <MdExitToApp size={23} />
                    <span>Log out</span>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar
