import React from 'react'
import notfoundimg from "../../assets/404.gif"
function Notfound() {
    return (
        <div className='w-screen h-screeen flex justify-center items-center bg-[#0E1218]' >
            
            <img className='object-cover w-[30%] h-[40%] ' src={notfoundimg} alt="" />
        </div>
        
    )
}

export default Notfound
