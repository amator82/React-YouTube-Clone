import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import Video from '../../components/video/Video'
import CategoriesBar from './../../components/categoriesBar/CategoriesBar'

import { getPopularVideos } from './../../redux/actions/videos.action'

import { Col, Row } from 'react-bootstrap'

const Home = () => {
    const dispatch = useDispatch()

    const { videos } = useSelector((state) => state.homeVideos)

    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch])

    return (
        <>
            <CategoriesBar />
            <Row>
                {videos.map((video, index) => (
                    <Col lg={3} md={4} key={video.id}>
                        <Video video={video} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Home
