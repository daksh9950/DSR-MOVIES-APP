import React from 'react'
import { createReactPlayer } from 'react-player/ReactPlayer';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Notfound from './notfound';



function Trailer() {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const category = pathname.includes("movie" || "tv" ) ? "movie" : "tv";
    const ytvideo =  useSelector((state) => state[category].info?.videos || null );
    console.log(ytvideo)

    // if (!ytvideo || !ytvideo.key) {
    // return <div className=" relative top-[10%] text-white flex items-center justify-center font-semibold bg-[#0E1218] "> <Notfound/> 
    //         </div>;
    // }
    return ytvideo? (
        <div className='w-screen h-screen flex itmes-center justify-center bg-[rgba(0,0,0,.9)] absolute z-[100] top-0 left-0  ' >
            <Link 
                   onClick={()=>navigate(-1)}  
                   className="mr-2 text-xl hover:text-[#6001D2] ri-arrow-left-fill text-white right-[5%] top-[5%] absolute   " >
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
                controls
                 className=' relative top-[10%] '
             
              src={`https://www.youtube.com/embed/${ytvideo.key}`} />  :  <Notfound/> 
            
            }

           
        </div>
    ): (
        <Notfound/>
    )
}

export default Trailer
