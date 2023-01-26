import React, { useEffect } from 'react'
import ShowMoreText from 'react-show-more-text'

import { useDispatch, useSelector } from 'react-redux'

import { MdThumbUp } from 'react-icons/md'

import HelmetCustom from '../HelmetCustom'

import {
    checkSubscriptoinStatus,
    getChannelDetails
} from './../../redux/actions/channel.action'

import numeral from 'numeral'
import moment from 'moment'

import './_videoMetaData.scss'

const VideoMetaData = ({ video: { snippet, statistics }, videoId }) => {
    const dispatch = useDispatch()

    const { channelId, channelTitle, description, title, publishedAt } = snippet
    const { viewCount, likeCount } = statistics

    const { snippet: channelSnippet, statistics: channelStatistics } =
        useSelector((state) => state.channelDetails.channel)

    const subscriptionStatus = useSelector(
        (state) => state.channelDetails.subscriptionStatus
    )

    useEffect(() => {
        dispatch(getChannelDetails(channelId))
        dispatch(checkSubscriptoinStatus(channelId))
    }, [dispatch, channelId])

    return (
        <div className='videoMetaData py-2'>
            <HelmetCustom title={title} description={description} />
            <div className='videoMetaData__top'>
                <h5 className='videoMetaData__title'>{title}</h5>
                <div className='d-flex justify-content-between align-items-center py-1'>
                    <div>
                        <span className='video__views'>
                            {numeral(viewCount).format('0.a')} Views
                        </span>
                        <span className='video__date'>
                            {moment(publishedAt).fromNow()}
                        </span>
                    </div>
                    <div className='videoMetaData__reviews'>
                        <div className='videoMetaData__review'>
                            <MdThumbUp size={26} />
                            <span>{numeral(likeCount).format('0.a')}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='videoMetaData__channel channel-videoMetaData d-flex justify-content-between align-items-center my-2 py-3'>
                <div className='channel-videoMetaData__info d-flex'>
                    <img
                        className='channel-videoMetaData__icon rounded-circle mr-3'
                        src={channelSnippet?.thumbnails?.default?.url}
                        alt='Channel Icon'
                    />
                    <div className='channel-videoMetaData__info d-flex flex-column'>
                        <div className='channel-videoMetaData__title'>
                            {channelTitle}
                        </div>
                        <div className='channel-videoMetaData__subscribers'>
                            {numeral(channelStatistics?.subscriberCount).format(
                                '0.a'
                            )}
                            <span>Subscribers</span>
                        </div>
                    </div>
                    <button
                        className={`channel-videoMetaData__btn border-0 p-2 m-2 ${
                            subscriptionStatus && 'btn-grey'
                        }`}
                    >
                        {subscriptionStatus ? 'Subscribed' : 'Subscribe'}
                    </button>
                </div>
            </div>
            <div className='videoMetaData__description my-2 py-3'>
                <ShowMoreText
                    lines={3}
                    more='SHOW MORE'
                    less='SHOW LESS'
                    anchorClass='showMoreText'
                    expanded={false}
                >
                    {description}
                </ShowMoreText>
            </div>
        </div>
    )
}

export default VideoMetaData
