import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import Topnav from './Topnav';
import Dropdown from './Dropdown';
import axios from "../../utlis/axios"
import Cards from './Cards';
import Loader from './Loader';
import InfiniteScroll from "react-infinite-scroll-component"


function Person() {

    document.title = "DSR | PEOPLE"
    const navigate = useNavigate();
    const [person, setperson] = useState([])
    const [category, setcategory] = useState("popular")
    
    const [pages, setpages ] = useState(1);
    const [hasmore, sethasmore] = useState(true)

    const getperson= async ()=>{
            try {
            const {data} = await axios.get(`/person/popular?pages=${pages}`)
            console.log(data)

            if(data.results.length > 0){
                
                setpages(pages + 1)
                setperson((prev)=>[...prev, ...data.results])
                
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
        if(person.length === 0 ){
            getperson();
        }
        else{
            setpages(1)
            setperson([])
            getperson()
        }
    }


    

    useEffect(()=>{
        refreshhandler(); 

    },[category])


     return person.length > 0 ? (
        <div className='w-screen h-screen   ' >
            <div className='w-full flex items-center justify-between px-[3%]' >
                
                <h1 className='text-2xl font-semibold text-zinc-400 ' >
                    <i onClick={()=>navigate(-1)}  class="mr-2 hover:text-[#6001D2] ri-arrow-left-fill"></i> 
                    Person
                </h1> 
               
               

                <div className='flex items-center  w-[90%] gap-[10%] ' >
                <Topnav  />
                
                {/* <Dropdown
                   title="Category"
                   options={["popular", "top_rated", "upcoming", "now_playing"]}
                   func={(e)=>setcategory(e.target.value)}
                   
                /> */}
                <div className='w-[2%] ' ></div>
                
                </div> 
            </div>

            <InfiniteScroll 
                  dataLength={person.length}
                  next={getperson}
                  hasMore={hasmore}  
                  loader={<h4>Loading...</h4>} 
            >
                <Cards data={person} title="Person"  />

            </InfiniteScroll>


        </div>
        
    ) :(
        <Loader/>
    )
}

export default Person
