import React from 'react'
import {Link} from "react-router-dom"

function Sidenav() {

  


    return (
        <>
            <div className='w-[20%] h-full border-zinc-400  border-r-2 p-10' >
                <h1 className='text-2xl text-white font-black' >
                    <i class=" text-[#6556CD] ri-tv-fill text-2xl "></i>
                     <span className='text-2xl' >DSR MOVIES</span>
                 </h1>
                 
                 <nav className='flex flex-col text-zinc-400 text-xl gap-2'>
                    <h1 className='text-white font-semibold text-xl mt-5 mb-3 ' >New Feeds</h1>
                    <Link to='/trending' className='hover:bg-[#6556CD] hover:text-white duration-200 rounded-md p-3 ' >   <i class="ri-fire-fill"></i>Trending</Link>
                    <Link to="/popular" className='hover:bg-[#6556CD] hover:text-white duration-200 rounded-md p-3   ' >     <i class="ri-heart-fill"></i>Popular</Link>
                    <Link to="/movie" className='hover:bg-[#6556CD] hover:text-white duration-200 rounded-md p-3  ' >   <i class="ri-movie-2-fill"></i> Movies  </Link>
                    <Link to="/tv" className='hover:bg-[#6556CD] hover:text-white duration-200 rounded-md p-3 ' >   <i class="ri-tv-2-fill"></i>Tv Shows</Link>
                    <Link to="/people" className='hover:bg-[#6556CD] hover:text-white duration-200 rounded-md p-3 mb-3 ' >     <i class="ri-user-fill"></i>Peoples</Link>
                 </nav>
                 <hr className='border-1 border-white ' /> 
                  <nav className='flex flex-col text-zinc-400 text-xl gap-2'>
                    <h1 className='text-white font-semibold text-xl mt-5 mb-3' >Website Information</h1>
                    <Link className='hover:bg-[#6556CD] hover:text-white duration-200 rounded-md p-3 ' >About DSR</Link>
                    <Link className='hover:bg-[#6556CD] hover:text-white duration-200 rounded-md p-3 ' >Contact Us</Link>
                  
                 </nav>
            </div>
        </>
    )
}

export default Sidenav
