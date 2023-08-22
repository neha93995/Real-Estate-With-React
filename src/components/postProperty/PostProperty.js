import React from 'react'
import HomeJoin from '../home/HomeJoin'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {GiSpeaker} from 'react-icons/gi'
import {GrMonitor} from 'react-icons/gr'
import {BsImages} from 'react-icons/bs'
import {TbFileDescription} from 'react-icons/tb'
import {AiOutlineFileDone} from 'react-icons/ai'
import {HiArrowCircleRight} from 'react-icons/hi'
import {HiArrowCircleLeft} from 'react-icons/hi'

export default function PostProperty() {

  const dummy=[1,2,3,4,5,5,6];

  const handleLeft=()=>{
    const slides = document.getElementById("scrollProfile");
     console.log(slides.scrollLeft);
     if(slides.scrollLeft===1680){
      slides.scrollLeft=0;
    }
    else{
      slides.scrollLeft = slides.scrollLeft + 280
    }
     
    }
    const handleRight=()=>{
      const slides = document.getElementById("scrollProfile");
      if(slides.scrollLeft===0){
        slides.scrollLeft=1385.5999755859375;
      }
      else{
        slides.scrollLeft = slides.scrollLeft - 280
      }
        console.log(slides.scrollLeft);
  }

  return (
    <div className='my-24 mx-14'>
      <div className='flex gap-6'>
        <div className='w-4/6 mx-8 border shadow-md'>
             <div className='h-screen w-full flex'>
                <div className='p-10'>
                    <p className='text-2xl '>Post property Ad to sell or rent online for Free!</p>
                    <ul className='list space-y-4 text-sm my-4'>
                        <li className='relative'><BsFillCheckCircleFill className='absolute top-4 -left-6 text-blue-700' /> Get Access to 4 Lakh + Buyers</li>
                        <li className='relative'><BsFillCheckCircleFill className='absolute top-4 -left-6 text-blue-700' /> Sell Faster with Premium Service</li>
                        <li className='relative'><BsFillCheckCircleFill className='absolute top-4 -left-6 text-blue-700' /> Get Expert Advice on Market Trends and Insights</li>
                    </ul>
                </div>
                <img className='w-3/5 transform' src='https://www.changehealthcare.com/pharmacy/management/vaccination-record/_jcr_content/root/main-par/visual_content_copy_/primaryImage.coreimg.png/1644596550036/vr-1.png' />
        </div>
        <div className='my-6'>
            <div>
                <p className='text-2xl'>How it's work</p>
                <div className='my-5 text-xs space-y-10'>

                  <div className='flex gap-10 '>
                    <img className='w-28 h-full' src='https://ideas.sideways6.com/hubfs/Teams%20Mobile%20Friendly.svg'/>
                    <div className='my-5'>Step 1:<p className='font-bold text-sm'>Post your Property ad</p><p style={{fontSize:"10px"}}>Enter all details like locality name, amenities etc. along with uploading Photos</p></div>
                  </div>

                  <div className='flex gap-10 '>
                    <img className='w-28 h-full' src='https://epoppay.com/wp-content/uploads/2021/10/You-deserve-it_transparent.png'/>
                    <div className='my-5'>Step 2:<p className='font-bold text-sm'>Check Responses on Dashboard</p><p style={{fontSize:"10px"}}>Get access to Buyer/Tenant contact details & connect easily</p></div>
                  </div>

                  <div className='flex gap-10 '>
                    <img className='w-28 h-full' src='https://cdn.pixabay.com/photo/2022/05/14/12/03/handshake-7195519_960_720.png'/>
                    <div className='my-5'>Step 3:<p className='font-bold text-sm'>Sell/Rent faster with instant Connect</p><p style={{fontSize:"10px"}}>Negotiate with your prospective Buyer/Tenant & mutually close the deal.(site-visit)</p></div>
                  </div>

                </div>
            </div>

        </div>
        <div className='my-6 mx-4'>
          <p className='text-2xl font-semibold'>Tips on Selling a Property Online</p>
          <div className='space-y-12 w-2/3 my-10'>
            <div className='flex gap-8 my-6'>
              <div className='bg-blue-800 bg-opacity-40 m-1 p-3 rounded-full h-full'><GrMonitor className='text-3xl'/></div>
              <div style={{fontSize:'10px'}} className='space-y-1'>
                <p className='text-sm font-semibold'>Post your Property Ad</p>
                <p>Enter all details like locality name, amenities etc. along with uploading Photos</p>
              </div>
            </div>
            <div className='flex gap-8 my-6'>
              <div className='bg-blue-800 bg-opacity-40 m-1 p-3 rounded-full h-full'><BsImages className='text-3xl'/></div>
              <div style={{fontSize:'10px'}} className='space-y-1'>
                <p className='text-sm font-semibold'>Add Quality Photos</p>
                <p>Do not forget to add high-quality photos as it's key for any property to stand out. You can always request a photoshoot of your property through Magicbricks "Photoshoot Service".</p>
              </div>
            </div>
            <div className='flex gap-8 my-6'>
              <div className='bg-blue-800 bg-opacity-40 m-1 p-3 rounded-full h-full'><GiSpeaker className='text-3xl'/></div>
              <div style={{fontSize:'10px'}} className='space-y-1'>
                <p className='text-sm font-semibold'>Choose Correct Locality/Address</p>
                <p>Make sure to accurately map your locality while filling in the details of your property. Adding a correct locality is essential to receive genuine queries for your property.</p>
              </div>
            </div>
            <div className='flex gap-8 my-6'>
              <div className='bg-blue-800 bg-opacity-40 m-1 p-3 rounded-full h-full'><TbFileDescription className='text-3xl'/></div>
              <div style={{fontSize:'10px'}} className='space-y-1'>
                <p className='text-sm font-semibold'>Write a Great Description</p>
                <p>Provide a short description for your property highlighting the key USPs and all the relevant details to help buyers make a decision. On Magicbricks, you can always request a stellar description by "Content Experts".</p>
              </div>
            </div>
            <div className='flex gap-8 my-6'>
              <div className='bg-blue-800 bg-opacity-40 m-1 p-3 rounded-full h-full'><AiOutlineFileDone className='text-3xl'/></div>
              <div style={{fontSize:'10px'}} className='space-y-1'>
                <p className='text-sm font-semibold'>Add additional details</p>
                <p>You need to add all the relevant details about your property like the type of furnishing, flooring, water supply, etc. for it to rank higher in search results to catch the buyer's eye.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='my-10 mx-9'>
          <div>
            <p className='text-xl font-semibold'>Benefits of Selling Your Property Online</p>
            <div className='text-xs'>
              <p className='my-5'>With a plethora of real estate websites to choose from, posting property online is now easy, convenient and hassle-free. Here are some benefits of buying and selling your property online:</p>
              <ul className='list-disc space-y-3 font-semibold text-sm'>
                <li>Time-Efficient <p className='font-normal' style={{fontSize:'10px'}}>Selling your property online with portals such as Magicbricks can help you save time, manage your bookings at your convenience and receive quality leads quickly.</p></li>
                <li>Get Better Exposure To Potential Buyers<p className='font-normal' style={{fontSize:'10px'}}>A large number of prospective buyers search online, a far easier way than visiting individuals properties. This helps your property get wider exposure to lakhs of buyers present online.</p></li>
                <li>Cost-Effective<p className='font-normal' style={{fontSize:'10px'}}>By opting to sell online, you can expect a significant reduction in agent fees and overall cost associated with selling a home traditionally.</p></li>
                <li>More Services<p className='font-normal' style={{fontSize:'10px'}}>Not only Magicbricks offers a multitude of property services such as rent agreements, home cleaning, renovation, tenant verification, and more for your convenience.</p></li>
              </ul>
            </div>
          </div>
        </div>

        <div className='bg-slate-200 m-10 text-center'>
          <div>
            <p className='font-semibold my-2'>Testimonials from our customers</p>
            <div className='relative'>

                <div className='flex overflow-x-hidden scroll-smooth w-80 px-5 m-auto'  id='scrollProfile'>
                  { dummy.map((item ,index)=>{
                    return (
                      <div key={index} className='bg-white text-xs w-96 my-16 mx-3 text-center rounded-xl shadow-xl relative transition ease-in hover:scale-110 duration-150'>
                          <img className=' rounded-full border-blue-800 border-2 w-1/4 absolute -top-10 left-24' src='https://post.magicbricks.com/static/images/Puja-Mannan1.png' alt='sorry'/>
                          <div className=' px-3 py-10 w-64'>{item} gkldfgf asugdhasdga dgasd gasdhg hdsug aidshgaisudhgahdsga asugdhasdga d  sdguihasdughdshg  dfgiadsufh <h2 className='text-sm font-semibold  my-3 text-blue-700'>Ritu Raman <p className='font-normal text-black'>Noida</p></h2></div>
                          
                      </div>
                      )
                    })
                  }
                      
                </div>
                  <button className='text-2xl absolute top-1/2 left-14 ' onClick={handleRight}><HiArrowCircleLeft/></button>
                  <button className='text-2xl absolute top-1/2 right-14 ' onClick={handleLeft}><HiArrowCircleRight/></button>
            </div>
          </div>
        </div>


        </div>
        <div className=' relative'>
          <div className='w-64 sticky top-24 right-14'>
            <HomeJoin/>
          </div>
        </div>
        
      </div>

    </div>
  )
}

//https://e7.pngegg.com/pngimages/722/179/png-clipart-house-logo-real-estate-home-house-angle-building.png