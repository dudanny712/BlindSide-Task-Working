import React, { useState } from 'react'
import './_categoriesBar.scss'
import { useDispatch } from 'react-redux'
import {
   getPopularVideos,
   getVideosByCategory,
} from '../../redux/actions/videos.action'
const keywords = [
   'All',
   'Batman',
   'Superman',
   'Flash',
   'Marvel',
   'DC Comics',
   'Dr. Strange',
   'Iron Man ',
   'Captain America',
   'Black Widow',
   'Falcon',
   'Thor',
   'Aquaman',
   'Martian',
   'Wonder Woman',
   'Deadpool',
   'X-men',
]

const CategoriesBar = () => {

   const [activeElement, setActiveElement]= useState('All')
   const dispatch = useDispatch()
   const handleClick = value => {
      setActiveElement(value)
      if (value === 'All') {
         dispatch(getPopularVideos())
      } else {
         dispatch(getVideosByCategory(value))
      }
   }
   return (
      <div className='categoriesBar'>
         {keywords.map((value, index) => (
            <span
               onClick={() => handleClick(value)}
               key={index}
               className={activeElement === value ? 'active' : ''}>
               {value}
            </span>
         ))}
      </div>
   )
}

export default CategoriesBar
