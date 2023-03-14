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
                ? videos?.map((video) => {
                      const {
                          id,
                          snippet: {
                              title,
                              description,
                              resourceId: { kind, channelId },
                              publishedAt,
                              thumbnails: { medium }
                          },
                          contentDetails: {
                            totalItemCount
                          }
                      } = video

                      return (
                          <VideoHorizonatal
                              key={id}
                              videoId={id}
                              kind={kind}
                              channelId={channelId}
                              description={description}
                              title={title}
                              publishedAt={publishedAt}
                              imageURL={medium.url}
                              totalItemCount={totalItemCount}
                              subscriptionPage
                          />
                      )
                  })
                : [...new Array(6)].map((_, index) => (
                      <SubscriptionsPageSceleton key={index} />
                  ))}
        </Container>
    )
}

export default SubscriptionsPage
