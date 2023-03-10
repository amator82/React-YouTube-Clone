import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import VideoMetaData from '../../components/videoMetaData/VideoMetaData'
import VideoHorizonatal from '../../components/videoHorizontal/VideoHorizonatal'
import Comments from '../../components/comments/Comments'
import VideoHorizontalSceleton from '../../components/videoHorizontal/VideoHorizontalSceleton'

import { Helmet } from 'react-helmet'

import { useAction } from './../../hooks/useAction'
import { useTypedSelector } from './../../hooks/useTypedSelector'

import { Row, Col } from 'react-bootstrap'
import './watchScreen.scss'
import { RelatedVideos } from '../../types/relatedVideos'

const WatchScreen: FC = () => {
    const { getVideoById, getRelatedVideos } = useAction()
    const { id } = useParams<{ id?: string }>()

    useEffect(() => {
        getVideoById(id)
        getRelatedVideos(id)
    }, [id])

    const { videos }= useTypedSelector((state) => state.relatedVideos.videos)

    const { video, loading } = useTypedSelector((state) => state.selectedVideo)

    return (
        <Row>
            <Helmet>
                <title>{video?.snippet?.title}</title>
            </Helmet>
            <Col lg={8}>
                <div className='watchscreen__player'>
                    <iframe
                        src={`https://www.youtube.com/embed/${id}`}
                        frameBorder='0'
                        title={video?.snippet?.title}
                        width='100%'
                        height='100%'
                        allowFullScreen
                    ></iframe>
                </div>
                {!loading ? (
                    <VideoMetaData video={video} />
                ) : (
                    <h6>Loading...</h6>
                )}
                <Comments
                    videoId={id}
                    totalComments={video?.statistics?.commentCount}
                />
            </Col>
            <Col lg={4}>
                {!loading
                    ? videos
                          ?.filter((video: any) => video.snippet)
                          ?.map((video: RelatedVideos) => (
                              <VideoHorizonatal
                                  video={video}
                                  key={video.id.videoId}
                              />
                          ))
                    : [...new Array(7)].map((_, index) => (
                          <VideoHorizontalSceleton key={index} />
                      ))}
            </Col>
        </Row>
    )
}

export default WatchScreen
