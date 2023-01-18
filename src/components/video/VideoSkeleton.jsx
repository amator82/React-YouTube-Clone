import React from 'react'
import ContentLoader from 'react-content-loader'

const VideoSkeleton = () => (
    <ContentLoader
        speed={2}
        width={312}
        height={280}
        viewBox='0 0 312 280'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
    >
        <circle cx='18' cy='258' r='18' />
        <rect x='337' y='0' rx='5' ry='5' width='150' height='23' />
        <rect x='337' y='35' rx='5' ry='5' width='722' height='48' />
        <rect x='337' y='100' rx='5' ry='5' width='80' height='20' />
        <rect x='0' y='0' rx='20' ry='20' width='312' height='175' />
        <rect x='0' y='185' rx='7' ry='7' width='312' height='21' />
        <rect x='0' y='215' rx='4' ry='4' width='312' height='16' />
        <rect x='49' y='252' rx='5' ry='5' width='90' height='12' />
    </ContentLoader>
)
export default VideoSkeleton
