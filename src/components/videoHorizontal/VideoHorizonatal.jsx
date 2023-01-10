import React, { useState, useEffect } from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component'

import request from './../../api'

import moment from 'moment'
import numeral from 'numeral'

import { AiFillEye } from 'react-icons/ai'

import { Row, Col } from 'react-bootstrap'

import './_videoHorizontal.scss'
import { Link } from 'react-router-dom'

const VideoHorizonatal = ({ video }) => {
    const {
        id,
        snippet: {
            channelId,
            channelTitle,
            description,
            title,
            publishedAt,
            thumbnails: { medium }
        }
    } = video

    const [views, setViews] = useState(null)
    const [duration, setDuration] = useState(null)
    const [channelIcon, setChannelIcon] = useState(null)

    useEffect(() => {
        const getVideoDetails = async () => {
            const {
                data: { items }
            } = await request('/videos', {
                params: {
                    part: 'contentDetails,statistics',
                    id: id.videoId
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

    const seconds = moment.duration(duration).asSeconds()
    const _duration = moment.utc(seconds * 1000).format('mm:ss')

    return (
        <Link to={`/watch/${id.videoId}`}>
            <Row className='videoHorizontal mx-1 mb-1 py-2 align-items-center'>
                <Col xs={6} md={6} className='videoHorizontal__left'>
                    <LazyLoadImage
                        src={medium.url}
                        effect='blur'
                        className='videoHorizontal__thumbnail'
                        wrapperClassName='videoHorizontal__thumbnail-wrapper'
                    />
                    <span className=' videoHorizontal__duration video__duration'>
                        {_duration}
                    </span>
                </Col>
                <Col xs={6} md={6} className='videoHorizontal__right p-0'>
                    <div className='videoHorizontal__title mb-1'>{title}</div>
                    <div className='videoHorizontal__details'>
                        <span>
                            <AiFillEye /> {numeral(views).format('0.a')} Views
                        </span>
                        <span className='video__date'>
                            {moment(publishedAt).fromNow()}
                        </span>
                    </div>
                    <div className='videoHorizontal__channel d-flex align-items-center'>
                        {/* <LazyLoadImage
                        src='https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'
                        effect='blur'
                    /> */}
                        <span>{channelTitle}</span>
                    </div>
                </Col>
            </Row>
        </Link>
    )
}

export default VideoHorizonatal
