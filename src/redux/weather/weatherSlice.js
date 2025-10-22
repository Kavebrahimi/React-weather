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

export default weatherSlice.reducer;