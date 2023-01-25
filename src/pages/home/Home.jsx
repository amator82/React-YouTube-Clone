import React, { useEffect, useRef, memo } from 'react'

import InfiniteScroll from 'react-infinite-scroll-component'

import { useDispatch, useSelector } from 'react-redux'

import CategoriesBar from './../../components/categoriesBar/CategoriesBar'
import Video from './../../components/video/Video'

import {
    getPopularVideos,
    getVideosByCategory
} from '../../redux/actions/videos.action'

import './_home.scss'

const Home = () => {
    const dispatch = useDispatch()
    const isLoading = useRef(true)

    useEffect(() => {
        dispatch(getPopularVideos())
        isLoading.current = false
    }, [dispatch])

    const { videos, activeCategory } = useSelector((state) => state.homeVideos)

    const fetchData = () => {
        if (activeCategory === 'All') dispatch(getPopularVideos())
        else {
            dispatch(getVideosByCategory(activeCategory))
        }
    }

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
                <div className='home__videos'>
                    {videos.map((video) => {
                        return <Video key={video?.id?.videoId} video={video} />
                    })}
                </div>
            </InfiniteScroll>
        </>
    )
}

export default Home
