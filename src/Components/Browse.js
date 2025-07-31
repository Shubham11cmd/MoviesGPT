import React, { useEffect } from 'react'
import Header from './Header'
import useMovies_API from '../Hooks/useMovies_API'
import MainComponent from './MainComponent'
import SecondComponent from './SecondComponent'
import usePopularMovies_API from '../Hooks/usePopularMovies_API'
import useTopRatedMovies_API from '../Hooks/useTopRatedMovies_API'
import useUpcomingMovies_API from '../Hooks/useUpcomingMovies_API'
import MoviesGpt from './MoviesGpt'
import { useSelector } from 'react-redux'

const Browse = () => {

  useMovies_API()
  usePopularMovies_API()
  useTopRatedMovies_API()
  useUpcomingMovies_API()

  const gptshow = useSelector(store => store.gpt?.nowShowGpt)
  

 



  return (
    <div>
      
      <Header/>
      { gptshow ? (<MoviesGpt/>) :
      (
      <div>  
      <MainComponent/>
      <SecondComponent/>
      </div>)}
     
    </div>
  )
}

export default Browse
