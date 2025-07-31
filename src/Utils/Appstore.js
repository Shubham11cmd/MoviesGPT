import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./Userslice.js";
import moviesReducer from "./Moviesslice.js"
import MoviesGptReducer from "./MoviesGptslice.js"

const appStore = configureStore({
    reducer: {
        user : userReducer,
        movies : moviesReducer,
        gpt: MoviesGptReducer
    }
})

export default appStore