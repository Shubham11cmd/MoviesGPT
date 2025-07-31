import { API_Movies } from '../Utils/Constants'
import { useDispatch } from 'react-redux'
import { addUpcomingMovies } from '../Utils/Moviesslice'
import { useEffect } from 'react'

const useUpcomingMovies_API = ()=> {

    const dispatch = useDispatch()
    
useEffect(()=>{ fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_Movies).then((data)=>{ return (data.json())}).then((data) => {dispatch(addUpcomingMovies(data.results))})},[])
}

export default useUpcomingMovies_API

