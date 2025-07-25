import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: null,
}   

export const tvSlice = createSlice({
  name : "container",
  initialState, 
  reducers: {

        tvmovie: (state, action) =>{
          state.info = action.payload;
        },
        tvmovie: (state, action) =>{
            state.info = null;
        }
        
    }
    
});

export const { loadtv, removetv} = tvSlice.actions

export default tvSlice.reducer 