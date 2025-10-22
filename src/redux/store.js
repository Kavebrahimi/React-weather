import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weather/weatherSlice.js";

const store = configureStore({
    reducer: {
        weather: weatherReducer,
    }
})

export default store;