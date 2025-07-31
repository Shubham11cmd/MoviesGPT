import React, { useEffect } from 'react'
import VideoTitle from "./VideoTitle";
import { useSelector } from 'react-redux';
import VideoBG from './VideoBG';


const MainComponent = () => {
    const movie = useSelector(state => state.movies?.nowPlayingMovies)
    if(!movie) return;

    const {title,overview,id} = movie[0]
    
       
  return (
    <div>
        <h1>{console.log(movie)}</h1>
        <VideoTitle title={title} overview={overview}/>
        <VideoBG id={id}/>
      
    </div>
  )
}

export default MainComponent
