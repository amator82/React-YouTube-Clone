import React from 'react'
import './_header.scss'

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'

const Header = ({ handleOpenSidebar }) => {
    return (
        <div className='header'>
            <FaBars
                className='header__menu'
                size={26}
                onClick={() => handleOpenSidebar()}
            />
            <img
                className='header__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/800px-YouTube_full-color_icon_%282017%29.svg.png'
                alt=''
            />
            <form>
                <input type='text' placeholder='Search' />
                <button type='submit'>
                    <AiOutlineSearch size={22} />
                </button>
            </form>
            <div className='header__icons'>
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img
                    src='https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'
                    alt='avatar'
                    className='header__avatar'
                />
            </div>
        </div>
    )
}

export default Header
