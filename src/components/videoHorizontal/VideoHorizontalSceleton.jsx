import React from 'react'
import ContentLoader from 'react-content-loader'

const VideoHorizontalSceleton = () => (
    <ContentLoader
        speed={2}
        width={395}
        height={106}
        viewBox='0 0 395 106'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
    >
        <rect x='0' y='0' rx='13' ry='13' width='174' height='98' />
        <rect x='180' y='0' rx='4' ry='4' width='198' height='56' />
        <rect x='180' y='60' rx='3' ry='3' width='198' height='12' />
        <rect x='180' y='77' rx='4' ry='4' width='40' height='16' />
    </ContentLoader>
)

export default VideoHorizontalSceleton
