import React from 'react'
import { createReactPlayer } from 'react-player/ReactPlayer';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Notfound from './notfound';
import ReactPlayer from "react-player"


function Trailer() {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const category = pathname.includes("movie" || "tv" ) ? "movie" : "tv";
    const ytvideo =  useSelector((state) => state[category].info.videos );
    console.log(ytvideo)

    if (!ytvideo || !ytvideo.key) {
    return <div className="text-white">No trailer available</div>;
    }
    return (
        <div className='w-screen h-screen flex itmes-center justify-center bg-[rgba(0,0,0,.9)] absolute z-[100] top-0 left-0  ' >
            <Link 
                   onClick={()=>navigate(-1)}  
                   class="mr-2 text-xl hover:text-[#6001D2] ri-arrow-left-fill text-white right-[5%] top-[5%] absolute   " >
            </Link>
            {ytvideo.key.length >0  ? 
            //    <ReactPlayer 
            //    className='bg-red-100 relative top-[20%] '
            //    height={400}
            //    width={1000}
                    
            //         url={`https://www.youtube.com/watch?v=${ytvideo?.key || 'b-WdRqzSJ9w' }`}
            //    />
             <iframe
                height={600}
                width={1700} 
                 className='bg-red-100 relative top-[10%] '
             
              src={`https://www.youtube.com/embed/${ytvideo.key}`} />  :  <Notfound/> 
            
            }

           
        </div>
    )
}

export default Trailer
