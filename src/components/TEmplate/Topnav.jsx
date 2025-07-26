import React, { useEffect, useState } from 'react'
import Sidenav from './Sidenav'
import { Links, Link } from 'react-router-dom'
import axios from "../../utlis/axios"
import img from "../../assets/image.jpeg"

function Topnav() {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState(null );
  const GetServics = async ()=>{
        try {
            const d = await axios.get(`/search/multi?query=${query}`)
            // console.log(d);
            setsearches(d.data.results);
             
        } catch (error) {
            console.log("ERROR", error)
            
        }
    }

    useEffect(()=>{
      GetServics()
    },[query]);

    return (
       <div className='w-[50%] h-[10vh] relative flex justify-center items-center ml-[10%] ' >
           <i class=" text-2xl text-zinc-400 ri-search-line"></i>
           <input 
            onChange={(e)=>setquery(e.target.value)}
            value={query}
            className='w-[50%] text-zinc-200 p-5 text-xl outline-none border-none mx-10   '
            type="text"
             placeholder='write movie' />

            {query.length > 0 && ( <i onClick={()=>setquery('')} class="absolute text-2xl text-zinc-400 right-0  ri-close-large-line"></i>)} 
          


           <div className='bg-zinc-100 absolute w-[50%] max-h-[50vh] top-[90%]  overflow-auto rounded z-[100] ' >
              {searches?.map((s,i)=>(
                <Link to={`/${s.media_type}/details/${s.id}`} key={i} className=' hover:text-black hover:bg-zinc-200 duraton-200  font-semibold  w-[100%] p-5 flex justify-start items-center border-b-2 border-zinc-300 ' >
                 <img 
                 className=' z-[100] w-[10vh] h-[10vh] object-cover rounded-md mr-10 shadow-lg '
                 src={s.poster_path || s.profile_path || s.backdrop_path ?`https://image.tmdb.org/t/p/original/${s.poster_path || s.profile_path || s.backdrop_path}`: img} alt="" />
                 <span>{s.name || s.title || s.original_name || s.original_title }</span>
              </Link>
              ))}

              
         
   
           </div>
       </div>
    )
}

export default Topnav
