import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { getVideosBySearch } from './../../redux/actions/videos.action'

import SearchPageSceleton from './SearchPageSceleton'
import VideoHorizonatal from '../../components/videoHorizontal/VideoHorizonatal'

import { Container } from 'react-bootstrap'
import './searchPage.scss'

const SearchPage = () => {
    const { query } = useParams()

    const dispatch = useDispatch()

    const { videos, loading } = useSelector((state) => state.searchedVideos)

    useEffect(() => {
        dispatch(getVideosBySearch(query))
    }, [query, dispatch])

    return (
        <Container>
            {!loading
                ? videos?.map((video) => (
                      <VideoHorizonatal
                          video={video}
                          key={video.id.videoId}
                          searchPage
                      />
                  ))
                : [...new Array(7)].map((_, index) => (
                      <SearchPageSceleton key={index} />
                  ))}
        </Container>
    )
}

export default SearchPage
