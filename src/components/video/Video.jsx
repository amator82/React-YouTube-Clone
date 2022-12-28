import React, { useState, useEffect } from 'react'

import request from './../../api'

import moment from 'moment'
import numeral from 'numeral'

import { AiFillEye } from 'react-icons/ai'

import './_video.scss'

const Video = ({ video }) => {
    const {
        id,
        snippet: {
            channelId,
            channelTitle,
            title,
            publishedAt,
            thumbnails: { standard }
        }
    } = video

    const [views, setViews] = useState(null)
    const [duration, setDuration] = useState(null)
    const [channelIcon, setChannelIcon] = useState(null)

    const seconds = moment.duration(duration).asSeconds()
    const _duration = moment.utc(seconds * 1000).format('mm:ss')

    useEffect(() => {
        const getVideoDetails = async () => {
            const {
                data: { items }
            } = await request('/videos', {
                params: {
                    part: 'contentDetails,statistics',
                    id
                }
            })
            setDuration(items[0].contentDetails.duration)
            setViews(items[0].statistics.viewCount)
        }
        getVideoDetails()
    }, [id])

    useEffect(() => {
        const getChannelIcon = async () => {
            const {
                data: { items }
            } = await request('/channels', {
                params: {
                    part: 'snippet',
                    id: channelId
                }
            })
            setChannelIcon(items[0].snippet.thumbnails.default)
        }
        getChannelIcon()
    }, [channelId])

    return (
        <div className='video'>
            <div className='video__top'>
                <img src={standard.url} alt='' />
                <span className='video__duration'>{_duration}</span>
            </div>
            <div className='video__title'>{title}</div>
            <div className='video__details'>
                <span className='video__views'>
                    <AiFillEye /> {numeral(views).format('0.a')} Views
                </span>
                <div className='video__date'>
                    {moment(publishedAt).fromNow()}
                </div>
            </div>
            <div className='video__channel'>
                <img src={channelIcon?.url} alt={channelTitle} />
                <p>{channelTitle}</p>
            </div>
        </div>
    )
}

export default Video
