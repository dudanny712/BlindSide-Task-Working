import React from 'react'
import { AiFillEye } from 'react-icons/ai'
import './_video.scss'


const Video = () => {


   return (
      <div className='video' >
         <div className="video__top">
            <img  src="https://i.ytimg.com/vi/UhKBn3CJA0k/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLBq-Mpn_FxVSz2RhxwV2HtQOY3A3g" alt="" />
            <span className="video__duration">01:03</span>
         </div>
         <div className="video__title">
            Sample title of the video Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni recusandae maiores fuga quas expedita laboriosam, ratione fugiat provident sit repellat delectus et quidem repudiandae iste autem facilis atque nam aliquid?
            
         </div>
         <div className="video__details">
            <span>
            <AiFillEye/>  12m views •
            </span>
            <span> 10days ago</span>
         </div>
         <div className="video__channel">
            <img src="https://yt3.ggpht.com/ytc/AKedOLTd1D4XGx78xptNiPDa_GhgT01gjnoW4M3qo4rKQQ=s68-c-k-c0x00ffffff-no-rj" alt="" />
            <p>Channel name</p>
         </div>
      </div>
   )
}

export default Video
