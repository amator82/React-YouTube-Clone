import React from 'react'
import './_header.scss'

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'

const Header = () => {
    return (
        <div className='header border border-dark'>
            <FaBars className='header__menu' size={26} />
            <img
                src='https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg'
                alt='logo'
                className='header__logo'
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
                />
            </div>
        </div>
    )
}

export default Header
