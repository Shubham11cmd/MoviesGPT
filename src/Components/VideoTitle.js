import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const VideoTitle = ({title, overview}) => {
 
  return (
    <div className='p-36 absolute text-white w-screen aspect-video bg-gradient-to-b from-black '>
      <div className=' ml-0 mt-[10%]'>
      <h1 className=' text-4xl mt-80  md:mr-0 md:mt-0 md:text-6xl md:font-bold'>{title}</h1>
      <h2 className=' hidden md:inline-block w-1/4 my-6 px-3 text-lg'>{overview}</h2>
      <div>
        <button className='bg-white text-black w-24 mb-4 md:mb-0 mt-4 md:mt-0 text-lg rounded-sm px-2 mr-4 hover:bg-gray-200'>Play /\</button>
        <button className='bg-gray-400 text-black w-24 text-lg rounded-sm px-2'>More Info</button>
      </div>
      </div>
    </div>
  )
}

export default VideoTitle
