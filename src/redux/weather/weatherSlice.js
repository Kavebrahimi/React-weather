import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const weatherSlice = createSlice({
   name: "weather",
   initialState: {
       isLoading: false,
        data: {},
       error: ""
   },
   reducers: {
       sendRequest: (state)=> {
           state.isLoading = true;
           state.error = "";
       },
       receiveResponse: (state, action)=> {
           state.isLoading = false;
           state.data = action.payload
       },
       receiveError: (state, action)=> {
           state.isLoading = false;
           state.data = {};
           state.error = action.payload;
       },
   }
});

export const {receiveError, receiveResponse, sendRequest} = weatherSlice.actions;

export const getWeatherInfo = (query)=>{
    return(dispatch)=> {
        dispatch(sendRequest())
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=1675f39f800e2dacdf58c9a6a244345e&units=metric`, {
        }).then(res=> {
            dispatch(receiveResponse(res.data));
        }).catch(e=>{
            dispatch(receiveError(e.message));
        })
    }
}
export default weatherSlice.reducer;