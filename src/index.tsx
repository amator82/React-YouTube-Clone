import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from './redux/store'

import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-lazy-load-image-component/src/effects/blur.css'

import './scss/_base.scss'
import './scss/null.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)
