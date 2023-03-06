import React, { FC } from 'react'

import moment from 'moment'

import './_singleComment.scss'

type SingleCommentProps = {
    comment: {
        authorDisplayName: string
        authorProfileImageUrl: string
        textDisplay: string
        publishedAt: string
    }
}

const SingleComment: FC<SingleCommentProps> = ({ comment }) => {
    const {
        authorDisplayName,
        authorProfileImageUrl,
        textDisplay,
        publishedAt
    } = comment

    return (
        <div className='singleComment p-2 d-flex'>
            <img
                className='channel-videoMetaData__icon rounded-circle mr-3'
                src={authorProfileImageUrl}
            />
            <div className='singleComment__body'>
                <div className='singleComment__header'>
                    <div className='singleComment__author'>
                        {authorDisplayName}
                        <span className='singleComment__date video__date'>
                            {moment(publishedAt).fromNow()}
                        </span>
                    </div>
                    <p className='singleComment__text'>{textDisplay}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleComment
