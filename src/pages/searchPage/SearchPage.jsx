import React from 'react'

import { useParams } from 'react-router-dom'

import './searchPage.scss'

const SearchPage = () => {
    const { query } = useParams()
    console.log(query);

    return <div>Search</div>
}

export default SearchPage
