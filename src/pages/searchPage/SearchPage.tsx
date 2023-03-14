import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import SearchPageSceleton from './SearchPageSceleton'
import VideoHorizonatal from '../../components/videoHorizontal/VideoHorizonatal'

import { useAction } from './../../hooks/useAction'
import { useTypedSelector } from './../../hooks/useTypedSelector'

import { Container } from 'react-bootstrap'
import './searchPage.scss'

const SearchPage: FC = () => {
    const { query } = useParams()

    const { getSearchedVideos } = useAction()

    const { videos, loading } = useTypedSelector(
        (state) => state.searchedVideos
    )

    useEffect(() => {
        getSearchedVideos(query)
    }, [query])

    return (
        <Container>
            {!loading
                ? videos?.map((video) => {
                      const {
                          id: {
                            kind,
                            videoId
                          },
                          snippet: {
                              title,
                              channelId,
                              channelTitle,
                              description,
                              publishedAt,
                              thumbnails: { medium }
                          }
                      } = video
                      
                      return (
                          <VideoHorizonatal
                              kind={kind}
                              videoId={videoId}
                              channelId={channelId}
                              channelTitle={channelTitle}
                              description={description}
                              title={title}
                              publishedAt={publishedAt}
                              imageURL={medium.url}
                              key={video.id.videoId}
                              searchPage
                          />
                      )
                  })
                : [...new Array(7)].map((_, index) => (
                      <SearchPageSceleton key={index} />
                  ))}
        </Container>
    )
}

export default SearchPage
