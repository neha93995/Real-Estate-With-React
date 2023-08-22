import React, { useState } from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

export default function Card2(props) {
    const [toggle,setToggle]=useState(false)
  return (
    <div className='m-2 ' onMouseEnter={()=>{setToggle(true)}} onMouseLeave={()=>{setToggle(false)}}>
      <div className='relative w-48 h-44 p-3 shadow-lg shadow-slate-300 border border-slate-300 rounded-lg hover:shadow-lg hover:shadow-blue-800'><div className={toggle?'w-10 h-10 rounded-md transition ease-in delay-150 -translate-y-1 scale-110 duration-300 ':'w-10 h-10 rounded-md ease-out delay-150 duration-300 '}>{props.icons}</div>
        <div className='absolute top-0 right-0 px-2 m-2 rounded-lg bg-yellow-400 text-xs' >{props.offer}</div>
        <div className='relative first-line:font-bold  my-4'>{props.heading}
          <p className='text-xs'>{props.title}</p>
          <div className='absolute top-20 left-0'> 
            <p className=' text-yellow-400'>{props.btn}</p>
            <div className={toggle?'  absolute top-1 left-24 text-yellow-400 myArrowAni':' text-yellow-400 absolute top-1 left-20' }><BsFillArrowRightCircleFill className='' /></div>
          </div>
        </div>
      </div>
    </div>
  )
}
