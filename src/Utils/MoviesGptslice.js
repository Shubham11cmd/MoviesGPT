import { createSlice } from "@reduxjs/toolkit";

 const MoviesGptslice = createSlice ({
    name : "Gpt",
    initialState :{
        nowShowGpt : false,
        moviesToShow : null
    },
    reducers :{
        showGpt : (state) =>{
            state.nowShowGpt = !state.nowShowGpt
        },

        addMoviesToShow: (state,action)=>{
            state.moviesToShow = action.payload

        }
    }
 })

 export const {showGpt,addMoviesToShow} = MoviesGptslice.actions
 
 export default MoviesGptslice.reducer