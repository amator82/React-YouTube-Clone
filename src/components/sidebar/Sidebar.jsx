import React from 'react'
import './_sidebar.scss'

import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied
} from 'react-icons/md'

const Sidebar = () => {
    return (
        <aside className='sidebar'>
            <ul className='sidebar__list'>
                <li className='sidebar__link'>
                    <MdHome size={23} />
                    <span>Home</span>
                </li>
                <li className='sidebar__link'>
                    <MdSubscriptions size={23} />
                    <span>Subscriptions</span>
                </li>
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
                <li className='sidebar__link sidebar__link_border'>
                    <MdExitToApp size={23} />
                    <span>Log out</span>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar