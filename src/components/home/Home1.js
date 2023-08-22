import React, {useState } from 'react'
import '../../App.css'
import { AiOutlineDoubleLeft } from 'react-icons/ai'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img5.webp'
import img3 from '../../images/img6.webp'
import img4 from '../../images/img4.webp'
export default function Home1() {
  const images=[
    img1,img2,img3,img4
  ]

  const [index, setIndex]=useState(0)
  const [toggle,setToggle]=useState(false)

  const nextButton=()=>{
    const last=index===images.length-1;
    const newSlide=last?0:index+1;
    setIndex(newSlide)
    setToggle(true)
    
  }
  const preveiwButton=()=>{
    const first=index===0;
    const newSlide=first?images.length-1:index-1;
    setIndex(newSlide)
    setToggle(true)
    
  }
 
 return (
    <div className='bg-fixed z-0 rounded-xl shadow-xl '>
      <div className=' border-solid relative top-5 w-full h-96 '>
        <img src={images[index]} alt='sorry' className={toggle?'bg-cover bg-no-repeat w-full h-96 myImageAni bg-fixed rounded-2xl ':'bg-cover bg-no-repeat w-full h-96 bg-fixed rounded-2xl '}/>
        <div className='absolute top-28 grid grid-cols-3 gap-3'>

          <p className='invert text-2xl  flex justify-center py-14'onClick={preveiwButton} ><AiOutlineDoubleLeft /></p>
          <p className=' text-white text-center text-2xl' >
            "Imagine what our real  neighborhoods would be like if each of us offered,<br />
            as a matter of course, just one kind word to another person."<br />
            Mr. Rogers</p>

          <p className='invert text-2xl  flex justify-center py-14' onClick={nextButton}><AiOutlineDoubleRight /></p>

        </div>
        <div className='absolute bottom-4 left-1/2 flex  flex-row gap-1'>          
          <div className={ (index===0)?' bg-blue-900  rounded-full h-3 w-3 border-solid border-2 border-zinc-400':' rounded-full h-3 w-3 bg-white border-solid border-2 border-zinc-400' } onClick={()=>{setIndex(0)}}></div>
          <div className={ (index===1)?' bg-blue-900  rounded-full h-3 w-3 border-solid border-2 border-zinc-400':' rounded-full h-3 w-3 bg-white border-solid border-2 border-zinc-400' } onClick={()=>{setIndex(1)}}></div>
          <div className={ (index===2)?' bg-blue-900  rounded-full h-3 w-3 border-solid border-2 border-zinc-400':' rounded-full h-3 w-3 bg-white border-solid border-2 border-zinc-400' } onClick={()=>{setIndex(2)}}></div>
          <div className={ (index===3)?' bg-blue-900  rounded-full h-3 w-3 border-solid border-2 border-zinc-400':' rounded-full h-3 w-3 bg-white border-solid border-2 border-zinc-400' } onClick={()=>{setIndex(3)}}></div>
        </div>
      </div>

    </div>
  )
}
