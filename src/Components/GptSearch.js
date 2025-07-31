import React, { useRef } from 'react';
import OpenAI from 'openai';
import { useDispatch } from 'react-redux';
import { addMoviesToShow } from '../Utils/MoviesGptslice';
import { API_Movies } from '../Utils/Constants';

const GptSearch = () => {
    const Search = useRef();
    const dispatch = useDispatch()

    function getMovies(data,o){

        const t = []

        for(let i=0; i<10 ; i++){

            const matchedMovies = data[i].results.filter((s) => s.title === o[i]);

            
            t.push(...matchedMovies)

        }
        return t
    }

    const getTmdbMovie = async (mov) =>{
        const d = await fetch('https://api.themoviedb.org/3/search/movie?query='+mov+'&include_adult=false&language=en-US&page=1', API_Movies)

        const a = await d.json()

        return (a)



    }

    const handleSearchClick = async (e) => {
        e.preventDefault(); 
        const client = new OpenAI({
           apiKey: process.env.REACT_APP_OPENAI_API_KEY,
            dangerouslyAllowBrowser: true,
          });
          const completion = await client.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
              { role: 'developer', content: 'You are a movie recomendation system , give me 10 movie names seperated by commas like the example ahead based on input. example: Humtum,bahubali,My Name Is Khan,Dunki' },
              { role: 'user', content: Search.current.value },
            ],
          });

          
          
          const movie = completion.choices[0].message.content.split(", ");

          //const movie = ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Gol Maal", "Chhoti Si Baat", "Padosan", "Chup Chup Ke", "Do Aur Do Paanch", "Angoor", "Amar Akbar Anthony"]

          //console.log(movie)


          const l = movie.map((mov) => getTmdbMovie(mov));
            const movieData = await Promise.all(l);

           const y =  getMovies(movieData,movie)

           dispatch(addMoviesToShow(y))
            

            
          

    };

    return (
        <div>
            <img
                className='absolute h-screen w-screen  object-cover'
                src='https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_small.jpg'
                alt='Background'
            />
            <div className='py-64 flex justify-center w-screen relative z-40'>
                <form className='flex-col justify-center align-middle  md:flex-row md:justify-center h-9'>
                    <input
                        ref={Search}
                        className=' ml-12 md:ml-0 w-72 md:w-96 border-solid border-black border-2 rounded-lg p-4 h-12'
                        placeholder='What do u feel like watching today'
                    />
                    <button
                        className='  ml-24  bg-red-700 w-44 h-12 md:ml-8 mt-4 md:mt-0 rounded-lg text-white'
                        onClick={handleSearchClick}
                    >
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
};

export default GptSearch;
