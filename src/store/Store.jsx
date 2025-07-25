import  movieReducer  from './reducers/Moveslice'
import  personReducer  from './reducers/Peopleslice'
import  tvReducer  from './reducers/Tvslice'

import { configureStore } from '@reduxjs/toolkit'

export const  store = configureStore({
  reducer: {
       movie : movieReducer, 
       tv: tvReducer, 
       person : personReducer, 
  },
  devTools: true 
})
