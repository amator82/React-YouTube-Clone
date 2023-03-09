import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import numeral from 'numeral'

import ChannelPageSceleton from './ChannelPageSceleton'
import Video from '../../components/video/Video'

import { useAction } from './../../hooks/useAction'
import { useTypedSelector } from './../../hooks/useTypedSelector'

import { IChannelVideos } from '../../types/chanelVideos'

import { Col, Container, Row } from 'react-bootstrap'
import './channelPage.scss'

const ChannelPage: FC = () => {
    const { getChannelDetails, getVideosByChannelId } = useAction()

    const { channelId } = useParams<{ channelId?: string }>()

    useEffect(() => {
        getVideosByChannelId(channelId)
        getChannelDetails(channelId)
    }, [channelId])

    const { videos, loading }: { videos: IChannelVideos[]; loading: boolean } =
        useTypedSelector((state) => state.channelVideos)
    const { snippet, statistics } = useTypedSelector(
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
                            {numeral(statistics?.subscriberCount).format('0.a')}
                            subscribers
                        </span>
                    </div>
                </div>
            </div>
            <Container>
                <Row className='mt-2'>
                    {!loading
                        ? videos?.map((video: IChannelVideos) => (
                              <Col md={4} lg={3} key={video.id.videoId}>
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
