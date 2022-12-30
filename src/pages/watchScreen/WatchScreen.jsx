import React from 'react'

import VideoMetaData from '../../components/videoMetaData/VideoMetaData'
import VideoHorizonatal from './../../components/videoHorizontal/VideoHorizonatal'
import Comments from '../../components/comments/Comments'

import { Row, Col } from 'react-bootstrap'
import './watchScreen.scss'

const WatchScreen = () => {
    return (
        <Row>
            <Col lg={8}>
                <div className='watchscreen__player'>
                    <iframe
                        src='https://www.youtube.com/embed/tgbNymZ7vqY'
                        frameBorder='0'
                        title='VIDEO'
                        width='100%'
                        height='100%'
                        allowFullScreen
                    ></iframe>
                </div>
                <VideoMetaData />
                <Comments/>
            </Col>
            <Col lg={4}>
                {[...Array(10)].map(() => (
                    <VideoHorizonatal />
                ))}
            </Col>
        </Row>
    )
}

export default WatchScreen
