import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useTrailer_API from '../Hooks/useTrailer_API';


const VideoBG = ({ id }) => {
  
  const videoid = useSelector((state) => state.movies.videoTrailer); // Assuming it's an object with `key`

  useTrailer_API(id)

  return (
    <div>
      {videoid && videoid.key ? (
        <iframe className='w-screen h-screen'
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoid.key}?&autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          
        ></iframe>
      ) : (
        <p>Loading trailer...</p> // Show a loading message if no trailer is available
      )}
    </div>
  );
};

export default VideoBG;
