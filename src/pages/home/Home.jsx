import React, { useEffect } from 'react'

import Video from '../../components/video/Video'
import CategoriesBar from './../../components/categoriesBar/CategoriesBar'

import { useDispatch, useSelector } from 'react-redux'

import {
    getPopularVideos,
    getVideosFromCategory
} from './../../redux/actions/videos.action'

import InfiniteScroll from 'react-infinite-scroll-component'

import { Col, Row } from 'react-bootstrap'

const Home = () => {
    const dispatch = useDispatch()

    const { videos, activeCategory } = useSelector((state) => state.homeVideos)

    const fetchData = () => {
        if (activeCategory === 'All') dispatch(getPopularVideos())
        else {
            dispatch(getVideosFromCategory(activeCategory))
        }
    }

    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch])

    return (
        <>
            <CategoriesBar />
            <InfiniteScroll
                className='row'
                dataLength={videos.length}
                next={fetchData}
                hasMore={true}
                loader={
                    <div className='spinner-border text-danger d-block mx-auto'></div>
                }
            >
                {videos.map((video) => {
                    return (
                        <Col lg={3} md={4} key={video.id}>
                            <Video video={video} />
                        </Col>
                    )
                })}
            </InfiniteScroll>
        </>
    )
}

export default Home
