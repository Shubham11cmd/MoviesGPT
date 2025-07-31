import React, { useEffect } from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import useMovies_API from '../Hooks/useMovies_API'

const SecondComponent = () => {
  const nowPlaying = useSelector(store => store.movies?.nowPlayingMovies)
  const popular = useSelector(store => store.movies?.popularMovies)
  const topRated = useSelector(store => store.movies?.topRatedMovies)
  const upcoming = useSelector(store=> store.movies?.upcomingMovies)
  return (
    <div className='bg-black'>
      <div className='-mt-28 relative z-50'>
      <MovieList title={"Now Playing"}movies={nowPlaying}/>
      <MovieList title={"Popular Movies"}movies={popular}/>
      <MovieList title={"Top Rated Movies"} movies={topRated}/>
      <MovieList title={"Upcoming Movies"} movies={upcoming}/>
      </div>
    </div>
  )
}

export default SecondComponent
