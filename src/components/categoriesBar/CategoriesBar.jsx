import React, { useState } from 'react'
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
    const [activeElement, setActiveElement] = useState('All')

    const handleCategoryClick = (category) => {
        setActiveElement(category)
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
