import React, { FC, useEffect } from 'react'

import VideoHorizonatal from '../../components/videoHorizontal/VideoHorizonatal'
import SubscriptionsPageSceleton from './SubscriptionsPageSceleton'

import { useTypedSelector } from './../../hooks/useTypedSelector'
import { useAction } from './../../hooks/useAction'

import { Container } from 'react-bootstrap'
import './subscriptionsPage.scss'

const SubscriptionsPage: FC = () => {
    const { getSubscribedChannels } = useAction()
    const { loading, videos } = useTypedSelector(
        (state) => state.subscribedChannel
    )

    useEffect(() => {
        getSubscribedChannels()
    }, [])

    return (
        <Container fluid>
            {!loading
                ? videos?.map((video: any) => (
                      <VideoHorizonatal
                          video={video}
                          key={video.id}
                          subscriptionPage
                      />
                  ))
                : [...new Array(6)].map((_, index) => (
                      <SubscriptionsPageSceleton key={index} />
                  ))}
        </Container>
    )
}

export default SubscriptionsPage
