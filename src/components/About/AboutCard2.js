import React from 'react'

export default function AboutCard2(props) {
  return (
    <div className='m-5'>
      <div className='shadow-md border border-slate-300 shadow-slate-300 hover:shadow-xl transition ease-in hover:scale-105 duration-300 hover:shadow-slate-400 w-64 h-80 text-center'>
        <div className='w-60 h-36'>
            <img src={props.image}/>
        </div>
        <div className='font-bold'>{props.heading}</div>
        <div className='text-xs mx-8 my-2'>{props.description}</div>
        <button className='border my-5 text-sm border-blue-800 p-1 px-4   rounded-lg hover:bg-blue-700  hover:text-white'>{props.button}</button>
      </div>
    </div>
  )
}
