import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/TEmplate/Trending'
import Popular from './components/TEmplate/Popular'
import Movies from './components/TEmplate/Movies'
import Tvshows from './components/TEmplate/Tvshows'
import People from './components/TEmplate/People'
import Moviedetails from "./components/TEmplate/Moviedetails"
import Tvdetails from './components/TEmplate/Tvdetails'
import Peopledetails from './components/TEmplate/Persondetails'
import Trailer from './components/TEmplate/Trailer'

function App() {
  return (
    
    <div className='w-screen h-screen bg-[#1F1E24] flex ' >
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/trending' element={<Trending/>} />
        <Route path='/popular' element={<Popular/>} />
        <Route path='/movie' element={<Movies/>} />
        <Route
               path='/movie/details/:id'
               element={<Moviedetails/>} 
            >
              <Route 
              path='trailer'
               element={<Trailer/>}  /> 
            </Route>
            

           
        
        <Route path='/tv' element={<Tvshows/>} />
        <Route
               path='/tv/details/:id'
               element={<Tvdetails/>} 
            />
             
        
        <Route path='/people' element={<People/>} />
        <Route
               path='/people/details/:id'
               element={<Peopledetails/>} 
            />
           
        
      </Routes>
    </div>
  )
}

export default App
