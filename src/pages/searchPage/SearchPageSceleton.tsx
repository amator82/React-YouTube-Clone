import React, { FC } from 'react'
import ContentLoader from 'react-content-loader'

const SearchPageSceleton: FC = () => (
    <ContentLoader
        speed={2}
        width={1226}
        height={225}
        viewBox='0 0 1226 225'
        backgroundColor='#474747'
        foregroundColor='#969292'
    >
        <rect x='0' y='0' rx='13' ry='13' width='385' height='216' />
        <rect x='395' y='0' rx='4' ry='4' width='817' height='22' />
        <rect x='395' y='28' rx='3' ry='3' width='100' height='22' />
        <rect x='395' y='60' rx='4' ry='4' width='817' height='48' />
        <circle cx='413' cy='138' r='18' />
        <rect x='442' y='131' rx='3' ry='3' width='50' height='14' />
    </ContentLoader>
)

export default SearchPageSceleton
