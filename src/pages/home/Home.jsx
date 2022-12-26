import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import Video from '../../components/video/Video'
import CategoriesBar from './../../components/categoriesBar/CategoriesBar'

const Home = () => {
    return (
        <>
            <Container fluid className='app__main'>
                <Container>
                    <CategoriesBar />
                    <Row>
                        {[...new Array(20)].map((_, index) => (
                            <Col lg={3} md={4} key={index}>
                                <Video />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Home
