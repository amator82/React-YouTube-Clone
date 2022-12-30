import React from 'react'
import ContentLoader from 'react-content-loader'

const VideoSkeleton = () => (
    <ContentLoader
        speed={2}
        width='320'
        height='272'
        viewBox='0 0 310 272'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
    >
        <rect x='0' y='0' rx='20' ry='20' width='309' height='172' />
        <rect x='0' y='180' rx='3' ry='3' width='306' height='6' />
        <rect x='0' y='193' rx='3' ry='3' width='164' height='6' />
        <circle cx='24' cy='230' r='24' />
        <rect x='55' y='225' rx='3' ry='3' width='92' height='6' />
    </ContentLoader>
)
export default VideoSkeleton
