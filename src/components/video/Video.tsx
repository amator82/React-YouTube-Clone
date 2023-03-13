import React, { useState, useEffect, memo, FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { LazyLoadImage } from 'react-lazy-load-image-component'

import request from '../../api'

import moment from 'moment'
import numeral from 'numeral'

import { AiFillEye } from 'react-icons/ai'
import './_video.scss'

type VideoProps = {
    id: string
    channelId: string
    channelTitle: string
    title: string
    publishedAt: string
    imageURL: string
    channelPage?: boolean
}

const Video: FC<VideoProps> = ({
    id,
    channelId,
    channelTitle,
    title,
    imageURL,
    publishedAt,
    channelPage
}) => {
    const navigate = useNavigate()

    const [views, setViews] = useState(null)
    const [duration, setDuration] = useState(null)
    const [channelIcon, setChannelIcon] = useState<any | null>(null)

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

    const handleVideoClick = (): void => {
        navigate(`/watch/${id}`)
    }

    return (
        <div className='video' onClick={handleVideoClick}>
            <div className='video__top'>
                <LazyLoadImage src={imageURL} effect='blur' />
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

export default memo(Video)
