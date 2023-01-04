import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SingleComment from './../singleComment/SingleComment'

import './_comments.scss'
import { getCommentsOfVideoId } from './../../redux/actions/comments.action'

const Comments = ({ videoId }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCommentsOfVideoId(videoId))
    }, [dispatch, videoId])

    const comments = useSelector((state) => state.commentsList.comments)

    const _comments = comments?.map(
        (comment) => comment.snippet.topLevelComment.snippet
    )

    const handleComment = () => {}

    return (
        <div className='comments'>
            <p>13234 comments</p>
            <div className='comments__body d-flex w-100 my-2'>
                <img
                    className='channel-videoMetaData__icon rounded-circle mr-3'
                    src='https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'
                    alt='person logo'
                />
                <form onSubmit={handleComment} className='d-flex flex-grow-1'>
                    <input
                        className='comments__input flex-grow-1'
                        type='text'
                        placeholder='Write a comment'
                    />
                    <button className='comments__button border-0 p-2'>
                        Comment
                    </button>
                </form>
            </div>
            <div className='comments__list'>
                {_comments?.map((comment, index) => (
                    <SingleComment comment={comment} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Comments
