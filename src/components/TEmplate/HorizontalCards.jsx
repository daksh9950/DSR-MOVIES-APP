import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'

function HorizontalCards({data}) {
    return (
       
          
           <div className='w-full h-[40vh] rounded-md flex overflow-x-auto overflow-y-hidden p-5 ' >
              
              {data.map((d, i)=> (<div key={i} className='min-w-[15%] bg-zinc-900 mr-5 rounded overflow-y-hidden  '  >
                          
                          <img
                             className='w-full h-[55%] object-cover  '
                             src={`https://image.tmdb.org/t/p/original/${d.poster_path || d.profile_path || d.backdrop_path}`} alt="" />

                            <div className='text-white h-[45%] ' >
                                <h1 className='text-lg font-semibold mt-3   ' >
                                  {d.name || d.title || d.original_name || d.original_title}
                                </h1>
                                <p className=' text-sm font-semibold ' >{d?.overview?.slice(0,50) }...<span className='text-blue-200 font-semibold  ' >more</span></p>

                             </div>
                             
                            
       
                
              </div>
             ))}
           </div>

       
    )
}

export default HorizontalCards
