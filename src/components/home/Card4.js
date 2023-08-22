import React from 'react'
import { MdLocationOn } from 'react-icons/md'
export default function Card4(props) {
  return (
    <div className='w-12/12 h-5/6 my-5 border shadow-lg p-2 text-left rounded-lg hover:shadow-xl' style={{fontSize:'0.55rem'}}>
      <img className='rounded-md' src={props.img}/>
      <div className='my-2'>
        <h2 className='text-xs font-semibold'>{props.service}</h2>
        <h2>{props.builder}</h2>
        <h2 className='flex'><MdLocationOn className='text-blue-700' />{props.location}</h2>
        <p><span style={{fontSize:'0.63rem'}} className='font-bold'>{props.price}</span> onward</p>
        <p>Marketed {props.builder}</p>
      </div>

    </div>
  )
}
