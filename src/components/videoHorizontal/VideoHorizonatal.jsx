import React from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component'

import request from './../../api'

import moment from 'moment'
import numeral from 'numeral'

import { AiFillEye } from 'react-icons/ai'

import { Row, Col } from 'react-bootstrap'

import './_videoHorizontal.scss'

const VideoHorizonatal = () => {
    const seconds = moment.duration(1000).asSeconds()
    const _duration = moment.utc(seconds * 1000).format('mm:ss')

    return (
        <Row className='videoHorizontal m-1 py-2 align-items-center'>
            <Col xs={6} md={4} className='videoHorizontal__left'>
                <LazyLoadImage
                    src='https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'
                    effect='blur'
                    className='videoHorizontal__thumbnail'
                    wrapperClassName='videoHorizontal__thumbnail-wrapper'
                />
                <span className='video__duration'>{_duration}</span>
            </Col>
            <Col xs={6} md={8} className='videoHorizontal__right p-0'>
                <div className='videoHorizontal__title mb-1'>Some title</div>
                <div className='videoHorizontal__deatails'>
                    {' '}
                    <span>
                        <AiFillEye /> {numeral(1000).format('0.a')} Views
                    </span>
                    <span className='video__date'>
                        {moment('2020-06-02').fromNow()}
                    </span>
                </div>
                <div className='videoHorizontal__channel d-flex align-items-center'>
                    {/* <LazyLoadImage
                        src='https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'
                        effect='blur'
                    /> */}
                    <span>Channel</span>
                </div>
            </Col>
        </Row>
    )
}

export default VideoHorizonatal
