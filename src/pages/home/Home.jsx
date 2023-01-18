import React, { useEffect } from 'react'

import Video from '../../components/video/Video'
import CategoriesBar from './../../components/categoriesBar/CategoriesBar'

import { useDispatch, useSelector } from 'react-redux'

import {
    getPopularVideos,
    getVideosByCategory
} from './../../redux/actions/videos.action'

import InfiniteScroll from 'react-infinite-scroll-component'

import VideoSkeleton from './../../components/video/VideoSkeleton'
import './_home.scss'

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
            dispatch(getVideosByCategory(activeCategory))
        }
    }

    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch])

    return (
        <>
            <CategoriesBar />
            <InfiniteScroll
                dataLength={videos.length}
                next={fetchData}
                hasMore={true}
                loader={
                    <div className='spinner-border text-danger d-block mx-auto'></div>
                }
            >
                {!loading ? (
                    <div className='home__videos'>
                        {videos.map((video) => {
                            console.log(video)
                            return <Video key={video.id} video={video} />
                        })}
                    </div>
                ) : (
                    <div className='skeletons'>{videoSkeletons}</div>
                )}
            </InfiniteScroll>
        </>
    )
}

export default Home
