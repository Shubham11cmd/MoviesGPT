import React from 'react'
import { useSelector } from 'react-redux'

const MovieCard = ({poster,name}) => {

  const gpt = useSelector(store=> store.gpt?.nowShowGpt)
  return (
    <div className='w-48 m-4 cursor-pointer hover:w-[200px]'>
      {gpt && (<p className='text-white'>{name}</p>)}
      <img  src={'https://image.tmdb.org/t/p/w500'+poster}></img>
    </div>
  )
}

export default MovieCard
