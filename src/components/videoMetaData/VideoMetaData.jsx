import React from 'react'

import ShowMoreText from 'react-show-more-text'

import { MdThumbUp, MdThumbDown } from 'react-icons/md'

import numeral from 'numeral'
import moment from 'moment'

import './_videoMetaData.scss'

const VideoMetaData = () => {
    return (
        <div className='videoMetaData py-2'>
            <div className='videoMetaData__top'>
                <h5 className='videoMetaData__title'>Video Title</h5>
                <div className='d-flex justify-content-between align-items-center py-1'>
                    <div>
                        <span className='video__views'>
                            {numeral(10000).format('0.a')} Views
                        </span>
                        <span className='video__date'>
                            {moment('2020-06-6').fromNow()}
                        </span>
                    </div>
                    <div className='videoMetaData__reviews'>
                        <div className='videoMetaData__review'>
                            <MdThumbUp size={26} />
                            <span>{numeral(3000).format('0.a')}</span>
                        </div>
                        <div className='videoMetaData__review'>
                            <MdThumbDown size={26} />
                            <span>{numeral(3000).format('0.a')}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='videoMetaData__channel channel-videoMetaData d-flex justify-content-between align-items-center my-2 py-3'>
                <div className='channel-videoMetaData__info d-flex'>
                    <img
                        className='channel-videoMetaData__icon rounded mr-3'
                        src='https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'
                        alt='Channel Icon'
                    />
                    <div className='channel-videoMetaData__info d-flex flex-column'>
                        <span className='channel-videoMetaData__title'>
                            Channel Title
                        </span>
                        <span className='channel-videoMetaData__subscribers'>
                            {numeral(100000).format('0.a')}
                        </span>
                    </div>
                    <button className='channel-videoMetaData__btn border-0 p-2 m-2'>
                        Subscribe
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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Error, quae harum vitae earum iusto iure. Praesentium
                    doloremque unde expedita rem et tempore nam officia dolorum
                    fuga aut? Ipsum, at reiciendis. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Error, quae harum vitae earum
                    iusto iure. Praesentium doloremque unde expedita rem et
                    tempore nam officia dolorum fuga aut? Ipsum, at reiciendis.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Error, quae harum vitae earum iusto iure. Praesentium
                    doloremque unde expedita rem et tempore nam officia dolorum
                    fuga aut? Ipsum, at reiciendis.Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Error, quae harum vitae earum
                    iusto iure. Praesentium doloremque unde expedita rem et
                    tempore nam officia dolorum fuga aut? Ipsum, at reiciendis.
                </ShowMoreText>
            </div>
        </div>
    )
}

export default VideoMetaData
