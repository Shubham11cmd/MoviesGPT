import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

const MovieList = ({title,movies}) => {
  

  return (
    <div>
    <h1 className='text-lg font-bold text-white'>{title}</h1>
    <div className='flex overflow-x-scroll'>
      
      <div className='flex'>
        {movies ? (
          movies.map((ele) => (
            <MovieCard
              key={ele.id}  
              poster={ele.poster_path}
              name = {ele.title}
            />
          ))
        ) : (
          <p>No movies currently playing.</p>
        )}
    
      </div>
    </div>
    </div>
  )
}

export default MovieList
