import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

import { getVideosFromCategory } from '../../redux/actions/videos.action'

import './_categoriesBar.scss'

const keywords = [
    'All',
    'React js',
    'Angular js',
    'React Native',
    'use of API',
    'Redux',
    'Music',
    'Algorithm Art ',
    'Guitar',
    'Bengali Songs',
    'Coding',
    'Cricket',
    'Football',
    'Real Madrid',
    'Gatsby',
    'Poor Coder',
    'Shwetabh'
]

const CategoriesBar = () => {
    const dispatch = useDispatch()

    const [activeElement, setActiveElement] = useState('All')

    const handleCategoryClick = (category) => {
        setActiveElement(category)
        dispatch(getVideosFromCategory(category))
    }

    return (
        <div className='categoriesBar'>
            {keywords.map((keyword, index) => (
                <span
                    className={
                        activeElement === keyword
                            ? 'categoriesBar__link active'
                            : 'categoriesBar__link'
                    }
                    onClick={() => handleCategoryClick(keyword)}
                    key={index}
                >
                    {keyword}
                </span>
            ))}
        </div>
    )
}

export default CategoriesBar
