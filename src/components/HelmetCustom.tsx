import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

type HelmetCustomProps = {
    title: string
    description: string
}

const HelmetCustom: FC<HelmetCustomProps> = ({
    title = 'YouTube Clone',
    description = 'Project with react and redux'
}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description}></meta>
            <meta property='og:locale' content='uk_UA' />
            <meta property='og:type' content='website' />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
        </Helmet>
    )
}

export default HelmetCustom
