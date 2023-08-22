import React from 'react'

export default function AboutCard(props) {
  return (
    <div className='w-60 h-48 relative shadow-sm m-2 hover:shadow-xl bg-slate-100 hover:shadow-slate-400 '>
        <div>
            <img src={props.image} className='w-64 h-32' />
        </div>
        <div className='absolute bottom-1  bg-blue-700 text-xs w-52 rounded-lg text-center text-white m-3 p-2 hover:bg-purple-800'><button>{props.btn}</button></div>

      
    </div>
  ) 
}
