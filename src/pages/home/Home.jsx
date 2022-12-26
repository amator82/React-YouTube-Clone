import React from 'react'
import { Col, Row } from 'react-bootstrap'

import Video from '../../components/video/Video'
import CategoriesBar from './../../components/categoriesBar/CategoriesBar'

const Home = () => {
    return (
        <>
            <CategoriesBar />
            <Row>
                {[...new Array(20)].map((_, index) => (
                    <Col lg={3} md={4} key={index}>
                        <Video />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Home
