import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SingleComment from './../singleComment/SingleComment'

import './_comments.scss'
import {
    getCommentsOfVideoId,
    addComment
} from './../../redux/actions/comments.action'

const Comments = ({ videoId, totalComments }) => {
    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const user = useSelector((state) => state.auth?.user)

    useEffect(() => {
        dispatch(getCommentsOfVideoId(videoId))
    }, [dispatch, videoId])

    const comments = useSelector((state) => state.commentsList.comments)

    const _comments = comments?.map(
        (comment) => comment.snippet.topLevelComment.snippet
    )

    const handleComment = (e) => {
        e.preventDefault()
        if (text.length === 0) return

        dispatch(addComment(videoId, text))
        setText('')
    }

    return (
        <div className='comments'>
            <p>{totalComments} comments</p>
            <div className='comments__body d-flex w-100 my-2'>
                <img
                    className='channel-videoMetaData__icon rounded-circle mr-3'
                    src={user?.photoURL}
                    alt='person logo'
                />
                <form onSubmit={handleComment} className='d-flex flex-grow-1'>
                    <input
                        className='comments__input flex-grow-1'
                        type='text'
                        placeholder='Write a comment'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
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
