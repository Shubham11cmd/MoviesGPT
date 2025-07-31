import React from 'react'
import { useSelector } from 'react-redux'
import { API_Movies } from '../Utils/Constants'
import MovieList from './MovieList'

const GptDisplay = () => {

  const movies = useSelector(store => store.gpt?.moviesToShow)

  return (
    <div className='relative -mt-36 '>
      <MovieList movies={movies}/>
    </div>
  )
}

export default GptDisplay
