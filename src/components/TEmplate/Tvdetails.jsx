
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { asyncloadtv, removetv } from '../../store/actions/tvactions';
import Loader from "./Loader"
import HorizontalCards from './HorizontalCards';
import Trailer from './Trailer';



function Tvdetails() {
      const {pathname} = useLocation()
    const navigate = useNavigate();
    const {id} = useParams();
    const dispatch = useDispatch();
    const {info} = useSelector((state)=> state.tv)
    useEffect(()=>{
        dispatch(asyncloadtv(id))
        return ()=>{
            dispatch(removetv());
        }
    },[id])
    return info ? (
         <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,.4 ),rgba(0,0,0,.7),rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.profile_path || info.detail.backdrop_path})`,
                     backgroundPosition:"center ",
                     backgroundSize: "cover",
                     backgroundRepeat: 'no-repeat',   }} 
            className='relative h-[190vh] w-screen px-[10%] ' >

            {/*PART ! NAvIGATION COMPLETE  */}
            <nav className='w-full text-zinc-300 flex items-center gap-10 h-[10vh]  ' >
                <Link 
                   onClick={()=>navigate(-1)}  
                   class="mr-2 text-xl hover:text-[#6001D2] ri-arrow-left-fill" >
                </Link>
                <a target="_blank" href={info.detail.homepage}><i class="ri-external-link-fill"></i></a>
                <a target="_blank" href={`https://en.wikipedia.org/wiki/${info.externalid.wikidata_id}`}><i class="ri-earth-fill"></i></a>
                <a target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>imdb</a>

            </nav>

            {/*PART 2 POSTER AND DETAILS  */}
            <div className='flex' >
              <img className='h-[60vh] rounded-md  object-cover shadow-[8px_17px_38px_2px_rgba(0,0,.5)]' src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path  || info.detail.backdrop_path|| info.detail.profile_path}`} alt="" />
              <div className='content ml-[5%] text-white' >
                  <h1 className='text-white text-4xl font-black ' >
                     {info.detail.name || info.detail.title || info.detail.original_name || info.detail.original_title}
                     <small className='text-xl gap-2 font-bold text-zinc-300 ' >
                       ({info.detail.first_air_date.split("-")[0]})
                        </small>
                  </h1>

                  <div className='mt-3 mb-3 flex items-center gap-x-5 text-white ' >
                      <span className=' rounded-full text-xl font-semibold bg-yellow-600 text-white w-[6vh] h-[6vh] flex justify-center items-center '  >
                        {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
                     </span>

                     <h1 className='w-[60px] font-semibold text-xl leading-none  ' >User Score</h1>
                     <h1 className='' >{info.detail.first_air_date}</h1>
                     <h1>{info.detail.genres.map((g)=>g.name).join(",")}</h1>
                     <h1>{info.detail.runtime}</h1>
                   

                  </div>
                   
                  <h1 className='text-xl font-semibold italic text-zinc-200' >{info.detail.tagline}</h1> 

                  <h1 className='text-2xl font-semibold mt-3 ' >Overview</h1>
                  <p>{info.detail.overview}</p>

                  <h1 className='text-2xl font-semibold mt-3 ' >Movies Translated</h1>
                  <p className='mb-10' >{info.translations.join(", ")}</p>

                  <Link className='mt-10 p-10 bg-[#6556CD] px-4 py-2 rounded  ' to={`${pathname}/trailer`}  ><i class="mr-3 ri-play-large-fill"></i>{`Watch trailer`}</Link>
                   
              </div>
            </div>



            {/*PART 3  PLATFORM */}
            <div className='w-[80%] flex flex-col gap-y-2 mt-10 ' >
                
               {info?.watchproviders &&
                  info?.watchproviders?.flatrate && (
                    <div className='flex gap-x-10 items-center text-white ' >
                        <h1>Available on Platfrom</h1>
                     {info?.watchproviders?.flatrate?.map((w,i) => (
                        <img  key={i}
                              title={w?.provider_name}
                              className='w-[5vh] h-[5vh] rounded-md  object-cover shadow-[8px_17px_38px_2px_rgba(0,0,.5)]'
                              src={`https://image.tmdb.org/t/p/original/${w?.logo_path  }`} 
                              alt=""
                        />
                   ))}
                   </div>
                  )
                   
                }

                {info?.watchproviders &&
                  info?.watchproviders?.rent && (
                    <div className='flex gap-x-10 items-center text-white ' >
                        <h1>Available on rent</h1>
                     {info?.watchproviders?.rent.map((w,i) => (
                        <img  key={i}
                              title={w?.provider_name}
                              className='w-[5vh] h-[5vh] mr-8 rounded-md  object-cover shadow-[8px_17px_38px_2px_rgba(0,0,.5)]'
                              src={`https://image.tmdb.org/t/p/original/${w?.logo_path  }`} 
                              alt=""
                        />
                   ))}
                   </div>
                  )
                   
                }

               {info.watchproviders &&
                  info.watchproviders.buy && (
                    <div className='flex gap-x-10  items-center text-white ' >
                        <h1>Available to Buy    </h1>
                     {info.watchproviders.buy.map((w,i) => (
                        <img  key={i}
                               title={w.provider_name}  
                              className='w-[5vh] h-[5vh] mr-9 rounded-md  object-cover shadow-[8px_17px_38px_2px_rgba(0,0,.5)]'
                              src={`https://image.tmdb.org/t/p/original/${w.logo_path  }`} 
                              alt=""
                        />
                   ))}
                   </div>
                  )
                   
                }
                
            </div>


             {/*PART 4  SEASONS */}
            <hr className='border-[1px] border-white mt-5 border-zinc-400 '  />
            <h1 className='text-white text-2xl mt-10  ' > SEASONS </h1>
            <div className='w-full h-[40vh] rounded-md flex overflow-x-auto overflow-y-hidden p-5'  >
                {info.detail.seasons.map((s,i)=>(
                    <div key={i} className='min-w-[15%] bg-zinc-900 mr-5 rounded overflow-y-hidden h-[40vh] ' >
                         <img
                             className='w-full h-[100%] object-cover  '
                             src={`https://image.tmdb.org/t/p/original/${s.poster_path}`} alt="" />

                           <h1 className='text-lg font-semibold mt-3   ' >
                                  {s.name}
                                </h1>   
                    </div>
                      
                ))}
            </div>
             

            {/*PART 5  RECOMMENDATIONS AND SIMILAR */}
            <hr className='border-[1px] border-white mt-5 border-zinc-400 '  />
            <h1 className='text-white text-2xl mt-10  ' > RECOMMENDATIONS AND SIMILAR MOVIES </h1>
            <HorizontalCards data= {info?.recommendations?.length > 0 ?  info?.similar : info.recommendations }/> 
             
            <Outlet/>


        </div>
    ): (
        <Loader/>
    )
    
    
}

export default Tvdetails
