import React, { useEffect, useRef, FC } from 'react'

import InfiniteScroll from 'react-infinite-scroll-component'

import CategoriesBar from '../../components/categoriesBar/CategoriesBar'
import Video from '../../components/video/Video'

import { useAction } from './../../hooks/useAction'
import { useTypedSelector } from './../../hooks/useTypedSelector'

import { PopularVideos } from '../../types/popularVideos'

import './_home.scss'

const Home: FC = () => {
    const { getPopularVideos, getPopularVideosByCategory } = useAction()
    const isLoading = useRef(true)

    useEffect(() => {
        getPopularVideos()
        isLoading.current = false
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const { videos, activeCategory } = useTypedSelector(
        (state) => state.popularVideos
    )

    const fetchData = () => {
        if (activeCategory === 'All') {
            getPopularVideos()
        } else {
            getPopularVideosByCategory(activeCategory)
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
                        const {
                            id,
                            snippet: {
                                channelId,
                                channelTitle,
                                title,
                                publishedAt,
                                thumbnails: { medium }
                            }
                        } = video
                        // return <Video key={video.id} video={video} />
                        return (
                            <Video
                                key={id}
                                id={id}
                                channelId={channelId}
                                channelTitle={channelTitle}
                                title={title}
                                publishedAt={publishedAt}
                                imageURL={medium.url}
                            />
                        )
                    })}
                </div>
            </InfiniteScroll>
        </>
    )
}

export default Home
