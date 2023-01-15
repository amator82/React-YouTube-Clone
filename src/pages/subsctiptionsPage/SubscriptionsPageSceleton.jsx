import React from 'react'
import ContentLoader from 'react-content-loader'

const SubscriptionsPageSceleton = () => (
    <ContentLoader
        speed={2}
        width={1226}
        height={225}
        viewBox='0 0 1226 225'
        backgroundColor='#474747'
        foregroundColor='#969292'
    >
        <circle cx='168' cy='86' r='84' />
        <rect x='337' y='0' rx='5' ry='5' width='150' height='23' />
        <rect x='337' y='35' rx='5' ry='5' width='722' height='48' />
        <rect x='337' y='100' rx='5' ry='5' width='80' height='20' />
    </ContentLoader>
)

export default SubscriptionsPageSceleton
