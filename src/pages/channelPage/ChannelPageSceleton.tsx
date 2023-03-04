import React from 'react'
import ContentLoader from 'react-content-loader'

const ChannelPageSceleton = () => (
    <ContentLoader
        speed={2}
        width={255}
        height={205}
        viewBox='0 0 255 205'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
    >
        <rect x='0' y='0' rx='13' ry='13' width='255' height='143' />
        <rect x='0' y='150' rx='4' ry='4' width='255' height='21' />
        <rect x='0' y='180' rx='3' ry='3' width='150' height='16' />
    </ContentLoader>
)
export default ChannelPageSceleton
