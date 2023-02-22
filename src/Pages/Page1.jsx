import React from 'react'
import video1 from '../assets/video-1.mp4'
import './Pages.css'

const Page1 = () => {
  return (
    <div className='page1'>
    <video src={video1} width="100%" height="100%" loop autoPlay>

    </video>
  </div>
  )
}

export default Page1