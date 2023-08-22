import React, { useState } from 'react'

export default function Card(props) {
  const [toggle,setToggle]=useState(false);
  return (
    <div className='m-2  ' onMouseEnter={()=>{setToggle(true)}} onMouseLeave={()=>{setToggle(false)}}>
      <div className='w-52 h-60 p-3  rounded-lg shadow-lg border border-stone-200  hover:shadow-lg  hover:shadow-blue-800'>
        <img src={props.image} alt='sorry' className={toggle?'w-52 h-32 rounded-md transition ease-in delay-150 -translate-y-1 scale-110 duration-300 ':'w-52 h-32 rounded-md ease-out delay-150 duration-300 '}/>
        <div className='relative first-line:font-bold '>{props.service}
          <p className='text-xs'>{props.heading}<br/>{props.location}</p>
          <div className={toggle?'w-16 text-center rounded-lg text-sm h-6 bg-blue-700 absolute top-14 right-0  myAnimatedDiv text-white ':'w-10 h-6 bg-blue-700 absolute top-24 right-0 opacity-0' }>hello</div>
        </div>
      </div>
    </div>
  )
}
