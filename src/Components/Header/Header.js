import React from 'react'
import './_header.scss'

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'

const Header = ({handleToggleSidebar}) => {
   return (
      <div className='header '>
         <FaBars
            className='header__menu'
            size={26} 
            onClick={() => handleToggleSidebar()}
         />
         <div className='logoDiv'>

         
         <img
            src='https://media-exp1.licdn.com/dms/image/C560BAQF9_p9J5KF09A/company-logo_200_200/0/1611760152204?e=2147483647&v=beta&t=d1CxWBkT5wUh6lw3YksDNXyGEqaibg1bwuQ67cciSl0'
            alt=''
            className='header__logo'/>
            <h4 className='logo__header'>BlindSide Task</h4>
            </div>
         <form >
            <input
               type='text'
               placeholder='Search'
            />
            <button type='submit'>
               <AiOutlineSearch size={22} />
            </button>
         </form>
         <div className='header__icons'>
            <MdNotifications size={28} />
            <MdApps size={28} />
            <img src='https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg' alt='avatar' />
         </div>
      </div>
   )
}

export default Header
