import React from 'react'
import ContentLoader from 'react-content-loader'

const VideoSkeleton = () => (
    <ContentLoader
        speed={2}
        width='310'
        height='190'
        viewBox='0 0 290 190'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
    >
        <rect x='0' y='0' rx='3' ry='3' width='290' height='100' />
        <rect x='0' y='110' rx='3' ry='3' width='290' height='6' />
        <rect x='0' y='125' rx='3' ry='3' width='210' height='6' />
        <circle cx='21' cy='160' r='20' />
        <rect x='50' y='155' rx='3' ry='3' width='100' height='6' />
    </ContentLoader>
)
export default VideoSkeleton
