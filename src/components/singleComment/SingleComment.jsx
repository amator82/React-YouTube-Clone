import React from 'react'

import moment from 'moment'

import './_singleComment.scss'

const SingleComment = () => {
    return (
        <div className='singleComment p-2 d-flex'>
            <img
                className='channel-videoMetaData__icon rounded-circle mr-3'
                src='https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'
            />
            <div className='singleComment__body'>
                <div className='singleComment__header'>
                    <div className='singleComment__author'>
                        Pelya Vlas{' '}
                        <span className='singleComment__date video__date'>
                            {moment('2020-05-05').fromNow()}
                        </span>
                    </div>
                    <p className='singleComment__text'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quidem, esse?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SingleComment
