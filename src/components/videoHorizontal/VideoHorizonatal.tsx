import React, { useState, useEffect, FC } from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import request from '../../api'

import moment from 'moment'
import numeral from 'numeral'

import { TVideo } from './../../types/video'

import { AiFillEye } from 'react-icons/ai'
import { Row, Col } from 'react-bootstrap'
import './_videoHorizontal.scss'
import { RelatedVideos } from '../../types/relatedVideos'

type VideoHorizonatalProps = {
    video: RelatedVideos
    searchPage?: any
    subscriptionPage?: any
}

const VideoHorizonatal: FC<VideoHorizonatalProps> = ({
    video,
    searchPage,
    subscriptionPage
}) => {
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

    const [views, setViews] = useState<number | null>(null)
    const [duration, setDuration] = useState<number | null>(null)
    const [channelIcon, setChannelIcon] = useState<any | null>(null)

    const isVideo = !(id.kind === 'youtube#channel' || subscriptionPage)

    const _channelId = id?.videoId || channelId
    // resourceId?.channelId ||
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
        if (isVideo) getVideoDetails()
    }, [id, isVideo])

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

    const thumbnail = !isVideo && 'videoHorizontal__thumbnail-channel'

    return (
        <Link to={isVideo ? `/watch/${id.videoId}` : `/channel/${_channelId}`}>
            <Row className='videoHorizontal mx-1 mb-1 py-2'>
                <Col
                    xs={6}
                    md={searchPage || subscriptionPage ? 4 : 6}
                    className='videoHorizontal__left'
                >
                    <LazyLoadImage
                        src={medium.url}
                        effect='blur'
                        className={`videoHorizontal__thumbnail ${thumbnail}`}
                        wrapperClassName='videoHorizontal__thumbnail-wrapper'
                    />
                    {isVideo && (
                        <span className=' videoHorizontal__duration video__duration'>
                            {_duration}
                        </span>
                    )}
                </Col>
                <Col
                    xs={6}
                    md={searchPage || subscriptionPage ? 8 : 6}
                    className='videoHorizontal__right p-0'
                >
                    <div className='videoHorizontal__title mb-1'>{title}</div>
                    {isVideo && (
                        <div className='videoHorizontal__details'>
                            <span>
                                <AiFillEye /> {numeral(views).format('0.a')}
                                Views
                            </span>
                            <span className='video__date'>
                                {moment(publishedAt).fromNow()}
                            </span>
                        </div>
                    )}
                    {(searchPage || subscriptionPage) && (
                        <p className='mt-1 videoHorizontal__description'>
                            {description}
                        </p>
                    )}
                    <div className='videoHorizontal__channel d-flex align-items-center'>
                        {isVideo && (
                            <LazyLoadImage
                                src={channelIcon?.url}
                                effect='blur'
                            />
                        )}
                        <span>{channelTitle}</span>
                    </div>
                    {/* {subscriptionPage && (
                        <p className='mt-2'>
                            {video.contentDetails.totalItemCount} Videos
                        </p>
                    )} */}
                </Col>
            </Row>
        </Link>
    )
}

export default VideoHorizonatal
