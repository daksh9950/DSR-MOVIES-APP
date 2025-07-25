import React from 'react'
import { Link } from 'react-router-dom'

function Cards({data,title}) {
    console.log(title);
    return (
        <div>
            <div className='  flex flex-wrap w-[full] h-full px-[3%] bg-[#1F1E24] ' >{data.map((c,i)=>(
                <Link to={`/${c.media_type || title}/details/${c .id}`} className='relative w-[30vh] mr-[5%] mb-[5%] mt-5  ' key={i} >
                    <img className=' h-[40vh] rounded-md  object-cover shadow-[8px_17px_38px_2px_rgba(0,0,.5)]' src={`https://image.tmdb.org/t/p/original/${data.poster_path  || c.backdrop_path|| c.profile_path}`} alt="" />
                   <h1 className='text-2xl text-zinc-400 mt-3 font-semibold' >
                     {c.name || c.title || c.original_name || c.original_title}
                   </h1>

                   {c.vote_average &&(
                     <div className='  right-[-5%] absolute top-[50%] rounded-full text-xl font-semibold bg-yellow-600 text-white w-[6vh] h-[6vh] flex justify-center items-center '  >
                        {(c.vote_average * 10).toFixed()} <sup>%</sup>
                     </div>
                   )}
                </Link>
            ))}</div> 
        </div>
    )
}

export default Cards
