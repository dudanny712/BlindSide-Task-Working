import React from 'react'
import { AiFillEye } from 'react-icons/ai'
import './_video.scss'


const Video = () => {


   return (
      <div className='video' >
         <div className="video_top">
            <img src="" alt="" />
            <span>04:05</span>
         </div>
         <div className="video_title">
            Sample title
            
         </div>
         <div className="video_details">
            <span>
            <AiFillEye/> 12m views
            </span>
            <span>10days ago</span>
         </div>
         <div className="video_channel">
            <img src="" alt="" />
            <p>Channel name</p>
         </div>
      </div>
   )
}

export default Video
