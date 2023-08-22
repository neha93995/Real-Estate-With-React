import React,{useEffect, useRef, useState} from 'react'
import '../../App.css'
import { ImSearch } from 'react-icons/im'
import { ImHome } from 'react-icons/im'
import { MdLocationOn } from 'react-icons/md'
import { FaRupeeSign } from 'react-icons/fa'
import {BsFillEmojiSmileUpsideDownFill} from 'react-icons/bs'
import {BsChevronDown} from 'react-icons/bs'
import Popup from './Popup'
import {Link} from 'react-router-dom'

export default function Home2() {
  const [popup,setPopup]=useState(false);
  const [data,setData]=useState({city:"",flat:"",budget:""});
  const takeData=(value)=>{
      setData({...data,flat:value})
  }
  const menuRef=useRef()
  useEffect(()=>{
    const render=(e)=>{

        if(!menuRef.current.contains(e.target)){
          setPopup(false)
        }
    }
  document.addEventListener("mousedown",render)
    return ()=>{
        document.removeEventListener("mousedown",render)
    }
    
  
},[])

  return (
    <div className='flex gap-1' >
        <div className='w-full h-40 my-20 mx-10'>
            <div className='flex justify-center text-2xl '>
              <p className='myText flex'>Find a Home you will&nbsp;<p className='text-right font-bold first-letter:text-blue-900 first-letter:text-5xl myTextStyle'>Love</p></p>
            </div>
            <div className='my-6 font-bold'>
              <ul className='flex justify-center gap-8 text-xs'>
                <li className='hover:underline underline-offset-8 under decoration-indigo-800 decoration-2'><a href='/'>Buy</a></li>
                <li className='hover:underline underline-offset-8 under decoration-indigo-800 decoration-2'><a href='/'>Rent</a></li>
                <li className='hover:underline underline-offset-8 under decoration-indigo-800 decoration-2'><a href='/'>PG</a></li>
                <li className='hover:underline underline-offset-8 under decoration-indigo-800 decoration-2'><a href='/'>Plot</a></li>
                <li className='hover:underline underline-offset-8 under decoration-indigo-800 decoration-2'><a href='/'>post free property ad</a></li>
              </ul>
            </div>

            <div className='flex justify-center '>
              <div className='flex gap-12 border py-1 px-8 rounded-full border-black text-xs'>
                
                
                <span className='flex gap-1 '>
                  <MdLocationOn className='text-blue-800 relative top-2 text-xl' />
                  <input placeholder='city...' list='datalist' spellCheck='false' className='rounded-full w-20 bg-transparent outline-none' onChange={(e)=>{setData({...data,city:e.target.value})}} />
                  <datalist id='datalist'>
                    <option value='bhopal'>bhopal</option>
                    <option value='delhi'>delhi</option>
                    <option value='mumbai'>mumbai</option>
                    <option value='bihar'>bihar</option>
                    <option value='rajasthan'>rajasthan</option>
                    <option value='punjab'>punjab</option>
                  </datalist>
                </span>
              
              
                <div  ref={menuRef} className='flex gap-1 relative' ><ImHome className='text-blue-800 relative top-2 text-xl' /><p className='p-2'>Flat</p>
                  <BsChevronDown onClick={()=>{setPopup(!popup)}} className={popup?'relative top-3 transition-transform duration-150 rotate-180':'relative top-3'}/>
                   {
                    popup? 
                    <Popup popup={popup} takeData={takeData}/>
                    :""
                   }
                  
                </div>
                
                
                <span className=' flex gap-1'><FaRupeeSign className='text-blue-800 text-xl relative top-2'/> <p className='p-2'>budget</p>
                  <select className='bg-transparent flex outline-none' onChange={(e)=>{setData({...data,budget:e.target.value})}} >
                    
                    <optgroup className='bg-blue-800 flex' label='price' >
                      <option value={1} >1 Lac</option>
                      <option value={2} >2 Lac</option>
                      <option value={3} >3 Lac</option>
                      <option value={4} >4 Lac</option>
                      <option value={5} >5 Lac</option>
                      <option value={6} >6 Lac</option>
                      <option value={7} >7 Lac</option>
                      <option value={8} >8 Lac</option>
                    </optgroup>
                  </select>
                </span>
                
                
                <span className='flex gap-1'>
                  <ImSearch className='text-blue-800 font-bold relative text-xl top-2'/> 
                  <Link to='/SearchHome' state={{data:data}} className='rounded-full text-center w-20 bg-blue-800 p-2 text-white'>search</Link>
                
                
                </span>
              </div>
            </div>
          </div>
          <div className=' w-48 h-36 my-20'>
            <div className=' text-4xl rounded-2xl  p-1 first-letter:text-blue-800 first-letter:font-bold relative top-0 right-20'>
                Dealing...<br/><BsFillEmojiSmileUpsideDownFill className='text-blue-800  relative top-3 left-32 '/>
                {/* <div className='myImg absolute bg-purple-400 w-36 h-12 top-1 left-1'></div> */}
                
            </div>
          </div>
          {/* <Data /> */}

    </div>
  )
}
