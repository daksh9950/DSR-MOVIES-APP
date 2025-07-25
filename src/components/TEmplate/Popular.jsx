import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios  from '../../utlis/axios';
import Topnav from './Topnav';
import Dropdown from './Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './Cards';
import Loader from './Loader';

function Popular() {
    document.title = "DSR | POPULAR"
    const navigate = useNavigate();
    const [popular, setpopular] = useState([])
    const [category, setcategory] = useState("movie")
    
    const [pages, setpages ] = useState(1);
    const [hasmore, sethasmore] = useState(true)

    const getpopular= async ()=>{
            try {
            const {data} = await axios.get(`${category}/popular?page=${pages}`)

            if(data.results.length > 0){
                
                setpages(pages + 1)
                setpopular((prev)=>[...prev, ...data.results])
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
        if(popular.length === 0 ){
            getpopular();
        }
        else{
            setpages(1)
            setpopular([])
            getpopular()
        }
    }


    

    useEffect(()=>{
        refreshhandler(); 

    },[category])

    return popular.length > 0 ? (
        <div className='w-screen h-screen   ' >
            <div className='w-full flex items-center justify-between px-[3%]' >
                
                <h1 className='text-2xl font-semibold text-zinc-400 ' >
                    <i onClick={()=>navigate(-1)}  class="mr-2 hover:text-[#6001D2] ri-arrow-left-fill"></i> 
                    Popular
                </h1> 
               
               

                <div className='flex items-center  w-[90%] gap-[10%] ' >
                <Topnav  />
                
                <Dropdown
                   title="Category"
                   options={["movies", "tv", ]}
                   func={(e)=>setcategory(e.target.value)}
                   
                />
                <div className='w-[2%] ' ></div>
                
                </div> 
            </div>

            <InfiniteScroll
                  dataLength={popular.length}
                  next={getpopular}
                  hasMore={hasmore}  
                  loader={<h4>Loading...</h4>} 
            >
                <Cards data={popular} title={category}  />

            </InfiniteScroll>


        </div>
        
    ) :(
        <Loader/>
    )
}

export default Popular
