import React, { useEffect, useRef, FC } from 'react'

import InfiniteScroll from 'react-infinite-scroll-component'

import CategoriesBar from '../../components/categoriesBar/CategoriesBar'
import Video from '../../components/video/Video'

import { useAction } from './../../hooks/useAction'
import { useTypedSelector } from './../../hooks/useTypedSelector'

import './_home.scss'
import { IVideo } from './../../types/video';

const Home: FC = () => {
    const { getPopularVideos, getVideosByCategory } = useAction()
    const isLoading = useRef(true)

    useEffect(() => {
        getPopularVideos()
        isLoading.current = false
    }, [])

    const { videos, activeCategory } = useTypedSelector(
        (state) => state.popularVideos
    )

    const fetchData = () => {
        if (activeCategory === 'All') {
            getPopularVideos()
        } else {
            getVideosByCategory(activeCategory)
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
                    {videos.map((video: IVideo) => {
                        return <Video key={video?.id?.videoId} video={video} />
                    })}
                </div>
            </InfiniteScroll>
        </>
    )
}

export default Home
