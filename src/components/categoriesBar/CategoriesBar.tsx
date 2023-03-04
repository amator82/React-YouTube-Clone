import React, { useState, memo, FC } from 'react'

import { useAction } from './../../hooks/useAction'

import './_categoriesBar.scss'

const keywords: string[] = [
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

const CategoriesBar: FC = memo(() => {
    const { getPopularVideos, getVideosByCategory } = useAction()

    const [activeElement, setActiveElement] = useState('All')

    const handleCategoryClick = (category: string): void => {
        setActiveElement(category)

        if (category === 'All') {
            getPopularVideos()
        } else {
            getVideosByCategory(category)
        }
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
})

export default CategoriesBar
