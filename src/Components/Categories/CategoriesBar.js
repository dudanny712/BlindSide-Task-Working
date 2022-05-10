import React, { useState } from 'react'
import './_categoriesBar.scss'
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
   const handleClick = (value) =>{
      setActiveElement(value)
   }
   return (
      <div className='categoriesBar'>
         {
            keywords.map((value,index) =><span 
            onClick={() =>handleClick(value)}
            className={activeElement=== value? 'active': ''}
            key={index}>{value}</span>)
         }
       
      </div>
   )
}

export default CategoriesBar
