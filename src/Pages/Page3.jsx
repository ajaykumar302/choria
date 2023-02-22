import React from 'react'
import video1 from '../assets/video-1.mp4'
import video2 from '../assets/video-2.mp4'
import video3 from '../assets/video-3.mp4'
import './Pages.css'

const Page3 = () => {
  return (
    <div className="page3">
    <video
      src={video1}
      width="100%"
      height="100%"
      loop
      autoPlay
    />

    <div>
      <video
        src={video2}
        width="100%"
        height="100%"
        loop
        autoPlay
      />
      <video
        src={video3}
        width="100%"
        height="100%"
        loop
        autoPlay
      />
    </div>
  </div>
  )
}

export default Page3