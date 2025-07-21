import React, { useEffect, useState } from 'react'
import Sidenav from './TEmplate/Sidenav'
import Topnav from './TEmplate/Topnav'
import axios from "../utlis/axios"
import Header from './TEmplate/Header'
import HorizontalCards from './TEmplate/HorizontalCards'
import Dropdown from './TEmplate/Dropdown'

function Home() {
     document.title = "The Movie App"
     const [wallpaper, setwallpaper] = useState([]);
     const [trending, settrending] = useState([])
     const [category, setcategory] = useState("all")

     const GetHeaderWallpaper = async ()=>{
            try {
            const {data} = await axios.get(`/trending/all/day`)
           
            let random = data.results[(Math.random()*data.results.length + 1).toFixed()];
            setwallpaper(random);
             
        } catch (error) {
            console.log("ERROR", error)
            
        }
     }

     const gettrending = async ()=>{
            try {
            const {data} = await axios.get(`/trending/${category}/day`)
            console.log(data)
           
            settrending(data.results);
             
        } catch (error) {
            console.log("ERROR", error)
            
        }
     }


     useEffect(()=>{
           gettrending();
          GetHeaderWallpaper();
           
     },[category])
     


    return wallpaper && trending ? (
       <>
         <Sidenav/>
         <div className='w-[80%] h-full overflow-auto overflow-x-hidden  ' >
          <Topnav/>
          <Header data={wallpaper} />
            <div className=' flex justify-between p-5' >
              <h1 className='text-2xl font-semibold text-zinc-300' >Trending</h1>

              <Dropdown 
               title="Filter"
               options={["TV", "Movies", "All"]}
               func={(e)=>(setcategory(e.target.value.toLowerCase()), console.log(e.target.value))}  />

           </div>
            <HorizontalCards data={trending}   />
         </div>
       </>
        
    ):<h1>loading... </h1>
}

export default Home
