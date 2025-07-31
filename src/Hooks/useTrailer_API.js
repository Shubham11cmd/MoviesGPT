import { addVideoTrailer } from '../Utils/Moviesslice';
import { API_Movies } from '../Utils/Constants';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const useTrailer_API = (id)=>{
    const dispatch = useDispatch();
    useEffect(() => {
        // Fetch the video data
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_Movies)
          .then((response) => response.json())
          .then((data) => {
            // Filter the trailers and store the first one
            const trailers = data.results.filter((item) => item.type === 'Trailer');
            if (trailers.length > 0) {
              dispatch(addVideoTrailer(trailers[0])); // Dispatch the first trailer's data
            }
          })
          .catch((error) => {
            console.error('Error fetching video data:', error);
          });
      }, [id, dispatch]); // Re-run the effect if `id` changes
}

export default useTrailer_API