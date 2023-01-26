import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
import { useSelector } from 'react-redux'

import './_header.scss'

const Header = ({ handleOpenSidebar }) => {
    const navigate = useNavigate()

    const [input, setInput] = useState('')

    const user = useSelector((state) => state.auth?.user)

    const handleSubmit = (e) => {
        e.preventDefault()

        navigate(`/search/${input}`)
    }

    return (
        <div className='header'>
            <FaBars
                className='header__menu'
                size={26}
                onClick={() => handleOpenSidebar()}
            />
            <Link to='/' className='header__logo'>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/800px-YouTube_full-color_icon_%282017%29.svg.png'
                    alt='logo'
                />
            </Link>
            <form className='header__form' onSubmit={handleSubmit}>
                <input
                    className='header__input'
                    type='text'
                    placeholder='Search'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className='header__submit' type='submit'>
                    <AiOutlineSearch size={22} />
                </button>
            </form>
            <div className='header__icons'>
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img
                    src={user?.photoURL}
                    alt='avatar'
                    className='header__avatar'
                />
            </div>
        </div>
    )
}

export default Header
