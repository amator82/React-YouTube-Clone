import React from 'react'
import './_video.scss'

import { AiFillEye } from 'react-icons/ai'

const Video = () => {
    return (
        <div className='video'>
            <div className='video__top'>
                <img
                    src='https://i.ytimg.com/vi/_RDZSZyAlEw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLbL9ce6pmF-QncujFnJmAd1FNuQ'
                    alt=''
                />
                <span className='video__viewing-time'>05:43</span>
            </div>
            <div className='video__title'>
                Create app in 5 minutes memmemmememmem
            </div>
            <div className='video__details'>
                <span className='video__views'>
                    <AiFillEye /> 5m views
                </span>
                <div className='video__date'>5d ago</div>
            </div>
            <div className='video__channel'>
                <img
                    src='https://yt3.ggpht.com/UaPCPInrPnfhrT7zcGxj-t0gM685qfemo_wgmMuW2vswffGP70EQVSNX_c4dtHm6EWBv6T3P=s68-c-k-c0x00ffffff-no-rj'
                    alt=''
                />
                <p>Lorem, ipsum dolor.</p>
            </div>
        </div>
    )
}

export default Video
