import React,{useState} from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';

export default function Card3(props) {
    const [toggle,setToggle]=useState(false);
    const [data,setData]=useState({city:"",flat:"",budget:""});

  return (
    <div className='m-3  '  onMouseEnter={()=>{setToggle(true)}} onMouseLeave={()=>{setToggle(false)}}>
      <div className='w-52 m-5 h-28 text-sm  rounded-md  p-3  border border-slate-300 bg-gradient-to-t from-slate-300 font-semibold  hover:shadow-2xl shadow-slate-500'>
                      {props.item.title}
                      <div onClick={()=>{}} className='relative text-blue-900 my-3'>
                        <Link  to='/SearchHome' state={{data:data}} className='text-sm  absolute top-0'>{props.item.btn}</Link>
                        <div className={toggle?' absolute top-5 left-24  myArrowAni text-xl ':' absolute top-5 left-20 transition duration-500 text-xl' }><BsFillArrowRightCircleFill/></div>
                        <div className='absolute top  -right-4 text-4xl '>{props.item.icon}</div>
                      </div>
                  </div>
    </div>
  )
}
