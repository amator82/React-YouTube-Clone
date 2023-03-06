import React, { FC, useState, useEffect } from 'react'

import SingleComment from '../singleComment/SingleComment'

import { useAction } from './../../hooks/useAction'
import { useTypedSelector } from './../../hooks/useTypedSelector'

import './_comments.scss'
import { Profile } from '../../types/auth'

type CommentsProps = {
    videoId: any
    totalComments: number
}

const Comments: FC<CommentsProps> = ({ videoId, totalComments }) => {
    const [text, setText] = useState<string>('')

    const { getCommentsOfVideoId, addComment } = useAction()

    const { user }: { user: Profile } = useTypedSelector((state) => state.auth)

    useEffect(() => {
        getCommentsOfVideoId(videoId)
    }, [videoId])

    const { comments } = useTypedSelector((state) => state.commentsList)

    const _comments = comments?.map(
        (comment: any) => comment.snippet.topLevelComment.snippet
    )

    const handleComment = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (text.length === 0) {
            return
        }

        addComment(videoId, text)
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
                {_comments?.map((comment: any, index: number) => (
                    <SingleComment comment={comment} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Comments
