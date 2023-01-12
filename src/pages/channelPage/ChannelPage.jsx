import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import ChannelPageSceleton from './ChannelPageSceleton'
import Video from './../../components/video/Video'

import { getVideosByChannelId } from './../../redux/actions/videos.action'
import { getChannelDetails } from './../../redux/actions/channel.action'

import numeral from 'numeral'

import { Col, Container, Row } from 'react-bootstrap'
import './channelPage.scss'

const ChannelPage = () => {
    const dispatch = useDispatch()

    const { channelId } = useParams()

    useEffect(() => {
        dispatch(getVideosByChannelId(channelId))
        dispatch(getChannelDetails(channelId))
    }, [dispatch, channelId])

    const { videos, loading } = useSelector((state) => state.channelVideos)
    const { snippet, statistics } = useSelector(
        (state) => state.channelDetails.channel
    )
    return (
        <>
            <div className='xp-7 py-2 my-2 d-flex justify-content-between align-items-center channelHeader'>
                <div className='d-flex align-items-center channelHeader__content'>
                    <img src={snippet?.thumbnails?.default?.url} alt='' />
                    <div className='channelHeader__details'>
                        <h3>{snippet?.title}</h3>
                        <span>
                            {numeral(statistics?.subscriberCount).format('0.a')}{' '}
                            subscribers
                        </span>
                    </div>
                </div>
            </div>
            <Container>
                <Row className='mt-2'>
                    {!loading
                        ? videos?.map((video) => (
                              <Col md={4} lg={3} key={video.id}>
                                  <Video video={video} channelPage />
                              </Col>
                          ))
                        : [...new Array(15)].map((_, index) => (
                              <Col md={4} lg={3} key={index}>
                                  <ChannelPageSceleton />
                              </Col>
                          ))}
                </Row>
            </Container>
        </>
    )
}

export default ChannelPage
