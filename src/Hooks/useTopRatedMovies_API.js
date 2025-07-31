import { API_Movies } from '../Utils/Constants'
import { useDispatch } from 'react-redux'
import { addTopRatedMovies } from '../Utils/Moviesslice'
import { useEffect } from 'react'

const useTopRatedMovies_API = ()=> {

    const dispatch = useDispatch()
    
useEffect(()=>{ fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_Movies).then((data)=>{ return (data.json())}).then((data) => {dispatch(addTopRatedMovies(data.results))})},[])
}

export default useTopRatedMovies_API
