import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getSubscribedChannels } from './../../redux/actions/videos.action'

import { Container } from 'react-bootstrap'
import './subscriptionsPage.scss'
import VideoHorizonatal from '../../components/videoHorizontal/VideoHorizonatal'

const SubscriptionsPage = () => {
    const dispatch = useDispatch()

    const { loading, videos } = useSelector(
        (state) => state.subscriptionsChannel
    )
    console.log(useSelector((state) => state.subscriptionsChannel))

    useEffect(() => {
        dispatch(getSubscribedChannels())
    }, [dispatch])

    return (
        <Container fluid>
            {!loading
                ? videos?.map((video) => (
                      <VideoHorizonatal
                          video={video}
                          key={video.id}
                          subscriptionPage
                      />
                  ))
                : ''}
        </Container>
    )
}

export default SubscriptionsPage
