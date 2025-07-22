import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import Topnav from './Topnav';
import Dropdown from './Dropdown';
import axios from "../../utlis/axios"
import Cards from './Cards';
import Loader from './Loader';
import InfiniteScroll from "react-infinite-scroll-component"

function Trending() {
    const navigate = useNavigate();
    const [trending, settrending] = useState([])
    const [category, setcategory] = useState("all")
    const [duration, setduration] = useState("day")
    const [pages, setpages ] = useState(1);
    const [hasmore, sethasmore] = useState(true)



    const gettrending = async ()=>{
            try {
            const {data} = await axios.get(`/trending/${category}/${duration}?pages=${pages}`)

            if(data.results.length > 0){
                
                setpages(pages + 1)
                settrending((prev)=>[...prev, ...data.results])
            }
            else{
                sethasmore(false);
            }
            
            // settrending(data.results);
            
             
        } catch (error) {
            console.log("ERROR", error)
            
        }
    } 
    
    const refreshhandler =  async()=>{
        if(trending.length === 0 ){
            gettrending();
        }
        else{
            setpages(1)
            settrending([])
            gettrending()
        }
    }


    

    useEffect(()=>{
        refreshhandler(); 

    },[category,duration])




    return trending.length > 0 ? (
        <div className='w-screen h-screen   ' >
            <div className='w-full flex items-center justify-between px-[3%]' >
                
                <h1 className='text-2xl font-semibold text-zinc-400 ' >
                    <i onClick={()=>navigate(-1)}  class="mr-2 hover:text-[#6001D2] ri-arrow-left-fill"></i> 
                    Trending
                </h1> 
               
               

                <div className='flex items-center  w-[90%] ' >
                <Topnav  />
                
                <Dropdown
                   title="Category"
                   options={["movies", "tv", "all"]}
                   func={(e)=>setcategory(e.target.value)}
                   
                />
                <div className='w-[2%]' ></div>
                <Dropdown
                   title="Duration"
                   options={["week", "day"]}
                   func={(e)=>setduration(e.target.value)}
                   
                />
                </div> 
            </div>

            <InfiniteScroll
                  dataLength={trending.length}
                  next={gettrending}
                  hasMore={hasmore}  
                  loader={<h4>Loading...</h4>} 
            >
                <Cards data={trending} title={category}  />

            </InfiniteScroll>


        </div>
        
    ) :(
        <Loader/>
    )
}

export default Trending
