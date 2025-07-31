import { API_Movies } from '../Utils/Constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../Utils/Moviesslice'
import { useEffect } from 'react'

const useMovies_API = ()=> {

    const dispatch = useDispatch()
    
useEffect(()=>{ fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_Movies).then((data)=>{ return (data.json())}).then((data) => {dispatch(addNowPlayingMovies(data.results))})},[])
}

export default useMovies_API