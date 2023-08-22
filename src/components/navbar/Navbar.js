import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {ImHome} from 'react-icons/im'


export default function Navbar() {
  const [login,setLogin]=useState('login')
  const getData=(r)=>{
    setLogin(r);
    console.log("---------------------navbar------",r)
  }
  return (
    <div className='fixed top-0 w-full z-50 bg-white '>
        <div className='bg-purple-800 h-12 flex gap-32 text-white shadow-lg text-center relative'  >
            <div className='text-center first-letter:text-2xl first-letter:font-bold px-2 mx-4 absolute top-1 left-20'><div className='text-center flex'><ImHome/><h1 className='first-letter:text-blue-900 first-letter:font-bold text-2xl '>Dealing...</h1></div></div>
            <nav className='absolute top-1 right-20' >
                <ul className='flex gap-8 m-1 cursor-pointer'>
                    <li><Link to='/' className='hover:underline hover:underline-offset-8 decoration-2 md:decoration-blue-900'>Home</Link></li>
                    <li><Link to='/About' className='hover:underline underline-offset-8 decoration-2 decoration-blue-900'>About</Link></li>
                    <li><Link to='/Calendar' className='hover:underline underline-offset-8 decoration-2 decoration-blue-900'>Calendar</Link></li>
                    <div className='right-12 border px-4 rounded-full bg-blue-800 text-white'>
                        <Link to='/PostProperty' >Post Property<span className='bg-yellow-400 rounded-lg text-xs px-1 mx-3 w-9 h3 animate-pulse'>free</span></Link>
                    </div>
                    <div className=' cursor-pointer text-center  bg-blue-900 mx-1 px-4 h-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-150 rounded-md ' ><Link to='/Login' state={getData}>{login}</Link></div>
                    <li><Link to='/FetchingData' className='hover:underline underline-offset-8 decoration-2 decoration-blue-900'>New</Link></li>
                </ul>
            </nav>
            <div>
      
    </div>
        </div>
      
    </div>
  )
}
