import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useAction } from '../../hooks/useAction'

import './_login.scss'

const Login = () => {
    const { login } = useAction()
    const navigate = useNavigate()

    const { accessToken } = useTypedSelector((state) => state.auth)

    const handleLogin = () => {
        login()
    }

    useEffect(() => {
        if (accessToken) {
            navigate('/')
        }
    }, [accessToken, navigate])

    return (
        <div className='login'>
            <div className='login__container'>
                <div className='login__image'>
                    <img
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/800px-YouTube_full-color_icon_%282017%29.svg.png'
                        alt='logo'
                    />
                </div>
                <button onClick={handleLogin} className='login__button'>
                    Login with Google
                </button>
                <p className='login__text'>Made by using YouYube Data API</p>
            </div>
        </div>
    )
}

export default Login
