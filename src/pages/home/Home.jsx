import React, { useEffect } from 'react'

import Video from '../../components/video/Video'
import CategoriesBar from './../../components/categoriesBar/CategoriesBar'

import { useDispatch, useSelector } from 'react-redux'

import {
    getPopularVideos,
    getVideosFromCategory
} from './../../redux/actions/videos.action'

import InfiniteScroll from 'react-infinite-scroll-component'

import { Col } from 'react-bootstrap'
import VideoSkeleton from './../../components/video/VideoSkeleton'

const videoSkeletons = [...new Array(15)].map((_, index) => (
    <VideoSkeleton key={index} />
))

const Home = () => {
    const dispatch = useDispatch()

    const { videos, activeCategory, loading } = useSelector(
        (state) => state.homeVideos
    )

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
                {loading ? (
                    videos.map((video) => {
                        return (
                            <Col lg={3} md={4} key={video.id}>
                                <Video video={video} />
                            </Col>
                        )
                    })
                ) : (
                    <div className='skeletons'>
                        {videoSkeletons}
                    </div>
                )}
            </InfiniteScroll>
        </>
    )
}

export default Home
