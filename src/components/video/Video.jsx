import React, { useState, useEffect, memo } from 'react'
import { useNavigate } from 'react-router-dom'

import { LazyLoadImage } from 'react-lazy-load-image-component'

import request from './../../api'

import moment from 'moment'
import numeral from 'numeral'

import { AiFillEye } from 'react-icons/ai'

import './_video.scss'

const Video = ({ video, channelPage }) => {
    const navigate = useNavigate()

    const {
        id,
        snippet: {
            channelId,
            channelTitle,
            title,
            publishedAt,
            thumbnails: { medium }
        },
        contentDetails
    } = video

    const [views, setViews] = useState(null)
    const [duration, setDuration] = useState(null)
    const [channelIcon, setChannelIcon] = useState(null)

    const seconds = moment.duration(duration).asSeconds()
    const _duration = moment.utc(seconds * 1000).format('mm:ss')

    const _videoId = id?.videoId || contentDetails?.videoId || id

    useEffect(() => {
        const getVideoDetails = async () => {
            const {
                data: { items }
            } = await request('/videos', {
                params: {
                    part: 'contentDetails,statistics',
                    id: _videoId
                }
            })
            setDuration(items[0].contentDetails.duration)
            setViews(items[0].statistics.viewCount)
        }
        getVideoDetails()
    }, [_videoId])

    useEffect(() => {
        const get_channel_icon = async () => {
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
        get_channel_icon()
    }, [channelId])

    const handleVideoClick = () => {
        navigate(`/watch/${_videoId}`)
    }

    return (
        <div className='video' onClick={handleVideoClick}>
            <div className='video__top'>
                <LazyLoadImage src={medium.url} effect='blur' />
                <span className='video__duration'>{_duration}</span>
            </div>
            <div className='video__title'>{title}</div>
            <div className='video__details'>
                <span>
                    <AiFillEye /> {numeral(views).format('0.a')} Views
                </span>
                <span className='video__date'>
                    {moment(publishedAt).fromNow()}
                </span>
            </div>
            {!channelPage && (
                <div className='video__channel'>
                    <LazyLoadImage src={channelIcon?.url} effect='blur' />
                    <p>{channelTitle}</p>
                </div>
            )}
        </div>
    )
}

export default memo( Video)
