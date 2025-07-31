import { createSlice } from "@reduxjs/toolkit";


const Moviesslice = createSlice({
    name : "Movies",
    initialState : {
        nowPlayingMovies : null,
        popularMovies: null,
        videoTrailer : null,
        topRatedMovies : null,
        upcomingMovies : null
    },
    reducers :{
        addNowPlayingMovies : (state,action) =>{
            state.nowPlayingMovies= action.payload;

        },
        addVideoTrailer : (state,action) =>{
            state.videoTrailer = action.payload;
        },
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies : (state,action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies : (state,action)=>{
            state.upcomingMovies = action.payload
        }
    }
})

export const {addNowPlayingMovies, addVideoTrailer, addPopularMovies,addTopRatedMovies, addUpcomingMovies} = Moviesslice.actions

export default Moviesslice.reducer
