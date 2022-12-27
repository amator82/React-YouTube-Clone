import React from 'react'
import { useDispatch } from 'react-redux'

import { login } from './../../redux/actions/auth.action'

import './_login.scss'

const Login = () => {
    const dispatch = useDispatch()

    const handleLogin = () => {
        console.log('handleLogin');
        dispatch(login())
    }
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
