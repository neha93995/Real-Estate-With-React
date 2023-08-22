import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

export default function Home4() {
  const nextButton = () => {
      const slides = document.getElementById("textSlide");
      slides.scrollLeft = slides.scrollLeft + 100;
  }
  const backButton = () => {
      const slides = document.getElementById("textSlide");
      slides.scrollLeft = slides.scrollLeft - 100
  }
  return (
    <div className='my-10 mx-16 '>
        <div className='relative'>
            <p className='text-2xl first-letter:text-blue-800 font-bold first-letter:text-3xl'>Recommendate for you</p>
            <div className='mx-9 flex h-16 p-5 my-7 gap-10 whitespace-nowrap overflow-x-hidden scroll-smooth rounded-lg bg-purple-400 font-bold' id='textSlide'>
                <div className='hover:underline  underline-offset-8 decoration-2'>Property text</div>
                <div className='hover:underline  underline-offset-8 decoration-2'>Circle Rates</div>
                <div className='hover:underline  underline-offset-8 decoration-2'>Metro Projects</div>
                <div className='hover:underline  underline-offset-8 decoration-2'>pMay</div>
                <div className='hover:underline  underline-offset-8 decoration-2'>Stamp duty</div>
                <div className='hover:underline  underline-offset-8 decoration-2'>Housing service</div>
                <div className='hover:underline  underline-offset-8 decoration-2'>Land Records</div>
                <div className='hover:underline  underline-offset-8 decoration-2'>Home Decor</div>
                <div className='hover:underline  underline-offset-8 decoration-2'>nagar nigam</div>
                <div className='hover:underline  underline-offset-8 decoration-2'>Govt portal</div>
            </div>
            <button onClick={nextButton} className='absolute top-2/3 right-1' > <BsFillArrowRightCircleFill className='text-2xl hover:text-purple-800 ' /></button>
            <button onClick={backButton} className='absolute top-2/3 left-1' > <BsFillArrowLeftCircleFill className='text-2xl hover:text-purple-800 ' /></button>

        </div>
            <p className='text-2xl first-letter:text-blue-800 font-bold first-letter:text-3xl'>Bhopal Property Snapshot</p>
            <div className=' rounded-lg h-44 border p-5 border-slate-300 m-7 text-xs'>
                <div className=''>
                Magicbricks is an online platform where real estate trade is taking place in a much faster and newer manner. We not just help you with finding the ideal real estate, but also ensure that your buying journey is as smooth as it can be. We understand that while buying or renting a property, there are a lot of factors to be taken into consideration, like the locality, preferred area, budget, amenities, and a lot more. Magicbricks is the destination w....Read more
                </div>
                <div className='flex gap-10 my-12'>
                    <div ><p className='font-bold'>99+</p>low budget flet in bhopal</div>
                    <div ><p className='font-bold'>1713+</p>properties for sale in bhopal</div>
                    <div ><p className='font-bold'>9402+</p>Residential property agents in bhopal</div>
                    <div ><p className='font-bold'>342+</p>Residential projects in bhopal</div>
                </div>
            </div>

        <div>

        </div>
      
    </div>
  )
}
