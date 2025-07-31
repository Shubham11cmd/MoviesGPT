import { API_Movies } from '../Utils/Constants'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../Utils/Moviesslice'
import { useEffect } from 'react'

const usePopularMovies_API = ()=> {

    const dispatch = useDispatch()
    
useEffect(()=>{ fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_Movies).then((data)=>{ return (data.json())}).then((data) => {dispatch(addPopularMovies(data.results))})},[])
}

export default usePopularMovies_API