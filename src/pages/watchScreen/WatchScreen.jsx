import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import VideoMetaData from '../../components/videoMetaData/VideoMetaData'
import VideoHorizonatal from './../../components/videoHorizontal/VideoHorizonatal'
import Comments from '../../components/comments/Comments'

import { getVideoById } from './../../redux/actions/videos.action'

import { Row, Col } from 'react-bootstrap'
import './watchScreen.scss'

const WatchScreen = () => {
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getVideoById(id))
    }, [dispatch, id])

    const { video, loading } = useSelector((state) => state.selectedVideo)

    return (
        <Row>
            <Col lg={8}>
                <div className='watchscreen__player'>
                    <iframe
                        src={`https://www.youtube.com/embed/${id}`}
                        frameBorder='0'
                        title={video?.snippet?.title}
                        width='100%'
                        height='100%'
                        allowFullScreen
                    ></iframe>
                </div>
                {!loading ? (
                    <VideoMetaData video={video} videoId={id} />
                ) : (
                    <h6>Loading...</h6>
                )}
                <Comments
                    videoId={id}
                    totalComments={video?.statistics?.commentCount}
                />
            </Col>
            <Col lg={4}>
                {[...Array(10)].map((_, index) => (
                    <VideoHorizonatal key={index} />
                ))}
            </Col>
        </Row>
    )
}

export default WatchScreen
