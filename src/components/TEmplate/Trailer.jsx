import React from 'react'
import { useLocation } from 'react-router-dom'

function Trailer() {
    const {pathname} = useLocation();
    const category = pathname.includes("movie")? "movie" : "tv";
    const ytvideo = 
    return (
        <div>
           
        </div>
    )
}

export default Trailer
