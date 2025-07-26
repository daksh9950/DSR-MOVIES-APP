import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { asyncloadperson, removeperson } from "../../store/actions/peopleactions";
import Loader from "./Loader"
import HorizontalCards from './HorizontalCards';
import Dropdown from './Dropdown';

function Persondetails() {
        const {pathname} = useLocation()
        const navigate = useNavigate();
        const {id} = useParams();
        const dispatch = useDispatch();
        const {info} = useSelector((state)=> state.person)
        const [category,setcategory] = useState("movie")
        console.log(info)
        useEffect(()=>{
            dispatch(asyncloadperson(id))
            return ()=>{
                dispatch(removeperson());
            }
        },[id])
    
    return info ? (
        <div className='w-screen px-[10%] h-[150vh] bg-[#1F1E24] ' >
            <nav className='w-full text-zinc-300 flex items-center gap-10 h-[10vh]  ' >
                <Link 
                    onClick={()=>navigate(-1)}  
                    className="mr-2 text-xl hover:text-[#6001D2] ri-arrow-left-fill" >
                </Link>
                        
             </nav>

            <div className='w-full flex ' >
               {/* {part 2 left poster and details} */}
                <div className='w-[20%]'  >
                     <img 
                     className='h-[40vh] rounded-md  object-cover shadow-[8px_17px_38px_2px_rgba(0,0,.5)]' 
                     src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path  || info.detail.backdrop_path|| info.detail.profile_path}`} 
                     alt="" 
                     />
                      <hr className='border-[1px] border-white mt-5 border-zinc-400 '  />
                      {/* {social media links} */}
                      <div className='text-white text-2xl  gap-x-6 flex  ' >
                         <a target="_blank" href={`https://en.wikipedia.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-earth-fill"></i></a>
                         <a target="_blank" href={`https://www.facebook.com/${info.externalid.facebook_id}`}><i className="ri-facebook-circle-fill"></i></a>
                         <a target="_blank" href={`https://www.instagram.com/${info.externalid.instagram_id}`}><i className="ri-instagram-fill"></i></a>
                         <a target="_blank" href={`https://www.twitter.com/${info.externalid.twitter_id}`}><i className="ri-twitter-x-fill"></i></a>
                      </div>

                      {/* {personal information} */}
                      <h1 className='text-2xl text-zinc-300 font-semibold my-5' >Person info</h1>

                      <h1 className='text-lg text-zinc-300 font-semibold ' >Known For</h1>
                      <h1 className=' text-zinc-300 font-semibold mb-3' >{info.detail.known_for_department}</h1>

                      <h1 className='text-lg text-zinc-300 font-semibold  ' >Gender</h1>
                      <h1 className=' text-zinc-300 font-semibold mb-3 ' >{info.detail.gender === 2 ? "male" : "female"}</h1>

                       <h1 className='text-lg text-zinc-300 font-semibold  ' >Birthday</h1>
                      <h1 className=' text-zinc-300 font-semibold mb-3 ' >{info.detail.birthday}</h1>

                        <h1 className='text-lg text-zinc-300 font-semibold  ' >Place Of Birth</h1>
                      <h1 className=' text-zinc-300 font-semibold mb-3 ' >{info.detail.place_of_birth}</h1>
                    
                </div>  

                {/* {part 3 rifght details and information} */}
                <div className='w-[80%] px-[5%]   ' >
                     <h1 className='text-6xl text-zinc-300 font-black mb-5' >{info.detail.name}</h1>

                      <h1 className='text-lg text-zinc-300 font-semibold ' >Biography</h1>
                      <p className='text-zinc-300' >{info.detail.biography.slice(0,400)}</p>

                      <h1 className='text-lg text-zinc-300 font-semibold mt-5 ' >CAST PLAY IN</h1>
                      <HorizontalCards data={info.combinedcredits.crew}  />


                      <div className='w-full flex justify-between mt-7 ' >
                            <h1 className='text-lg text-zinc-300 font-semibold mt-5 ' >ACTING</h1>

                            <Dropdown title={"Category"} options={["tv", "Movie"]} func={(e)=> setcategory(e.target.value) } />
                      </div>

                      <div className=' list-disc text-zinc-400 white mt-3 border-2 w-full h-[50vh] shadow-lg border-zinc-700 p-5 overflow-x-hidden overflow-y-auto shadow-[rgba(255,255,255,.3)]   ' >
                            {info[category  ]?.cast?.map((c,i)=>(
                                <li className='hover:text-white p-5 p-5 rounded hover:bg-[#19191d] duration-300 cursor-pointer ' >
                                   <Link to={`/${category}/details/${c.id}`} >
                                     <span>{c.name || c.title || c.original_name || c.original_title} </span>
                                     <span className='block ml-6 ' >{c.character && `Character Name : ${c.character}` }</span>

                               
                                    </Link>
                                 </li>
                            ))}
                       
                      </div>
                     
                </div>
            </div>  


        </div>
    ): (
        <Loader/>
    )
}

export default Persondetails
