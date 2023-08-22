import React, { useState } from 'react'

export default function Progress() {
    const [width,setWidth]=useState(0)
  return (
    <div>
        <div className='w-1/2 bg-slate-800 flex '>hello

        <div className={`bg-blue-900 w-${width}`}></div>

            {/* <div className='w-20  h-3 bg-red-500 '></div>
            <div className='w-20  h-3   bg-red-900'></div>
            <div className='w-20  h-3  bg-orange-900'></div>
            <div className='w-20  h-3  bg-lime-500'></div>
            <div className='w-20  h-3  bg-emerald-800'></div>
            <div className='w-20  h-3  bg-violet-800'></div>
            <div className='w-20  h-3  bg-pink-800 '></div> */}


        </div>
        <button onClick={()=>{setWidth(0+10)}}>click</button>
    </div>
  )
}
