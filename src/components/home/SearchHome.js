import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Card4 from './Card4';
import HomeProperties from './HomeProperties';
import HomeTopAgent from './HomeTopAgent'
import '../../App.css'

export default function SearchHome() {

  const [show, setShow] = useState('Properties')
  const location = useLocation();
  const state = location.state;

  const dummyProperty = [
    { price: "42.23 Lac", img: 'https://cdn.staticmb.com/property/microsite/new-banners/project-spotlights/sage-golden-spring-ayodhya-bypass-bhopal/img.jpg', service: "Spring dew", heading: "by Agrawal construction ", location: "Ayodhya bypass Bhopal (M.P)", address: '/' },
    { price: "12.5 Lac", img: 'https://www.rohanbuilders.com/assets/upload/main-projects/residential/prathama/rohan-prathama-background.jpg', service: "Sage Velley", heading: "By Ashani Group", location: "Katara hills Bhopal", address: '/' },
    { price: "22.8 Lac", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSarEsC3myrGORhqZYoqfGZSBG5iYGtnGyx7R3Sk07FL27hF832D7qgG2NhUrzE1aN2Zwc&usqp=CAU', service: "Somya Heritage", heading: "By foutune Somya Housing ", location: "Hoshangabad Road Bhopal", address: '/' },
    { price: "33.2 Lac", img: 'https://newprojects.99acres.com/projects/rohan_housing/_rohan_prathama/images/84j7kn1s_large.jpg', service: "Nirrupam Royal Palms", heading: "By Nirrupam Associates ", location: "Vidisha Rd Bhopal", address: '/' },
  ]

  const handleGetContactDetails=()=>{
    handleCanclePopup()
  }
  
  const handleCanclePopup=()=>{ 
    const popup=document.getElementById('popUp');
    popup.classList.toggle('active')
    const popup2=document.getElementById('backgroundPopup');
    popup2.classList.toggle('active')
  }
  return (
    <div >

      <div className=' bg-blue-50 py-20' id='backgroundPopup' >
        <div className='flex mx-16 '>
          <div className='w-3/4'>
            <div className='my-2 bg-white h-24 px-6 py-2 rounded-lg border border-slate-200'>
              <div>
                <h2 className='text-sm font-semibold'>Save your Search</h2><p className='text-xs'>Get email alerts for the latest properties related to your saved search</p>
              </div>

              <div className='my-4 text-xs font-semibold flex gap-5 '>
                <div className=' px-3 rounded-full border'>{state.data.city}</div>
                <div className=' px-3 rounded-full border'>{state.data.budget}</div>
                <div className=' px-3 rounded-full border'>{state.data.flat}</div>
                <button className='text-red-600'>Edit requirment</button>
                <button>Save Search</button>
              </div>
            </div>
            <div className='my-3 p-4 text-sm font-semibold flex gap-5 bg-white rounded-lg border border-slate-200'>
              <button className='hover:underline decoration-red-600 underline-offset-4 decoration-2' onClick={() => { setShow('Properties') }}>properties</button>
              <button className='hover:underline decoration-red-600 underline-offset-4 decoration-2' onClick={() => { setShow('NewProject') }}>New Project</button>
              <button className='hover:underline decoration-red-600 underline-offset-4 decoration-2' onClick={() => { setShow('TopAgent') }}>Top agents</button>
            </div>
            <div>
              {show === 'Properties' && <HomeProperties data={state} />}
              {show === 'NewProject' && <div>hello</div>}
              {show === 'TopAgent' && <HomeTopAgent />}
            </div>
          </div>
          <div className='w-1/5 border shadow-sm h-full bg-white mx-5 my-2 p-3 rounded-lg text-center text-xs'>
            <div className='bg-slate-300 h-28 rounded-lg  p-3 font-bold text border text-lg'>Sell/Rent your Property with us for Free</div>
            <div className='my-4 '>Find Buyers & Tenants Easily</div>
            <button className='font-bold w-full bg-blue-600 p-1 text-white rounded-lg'>Post Property</button>
            <div className='my-3 mx-2'><p>Here's Why Dealing</p>
              <ul className='text-left m-1 list-disc' style={{ fontSize: "10px" }}>
                <li>Get Access to 4 Lakh + Buyers</li>
                <li>Sell Faster with Premium Service</li>
                <li>Find only Genuine Leads</li>
                <li>Get Expert advice on Market Trends & insights</li>
              </ul>
            </div>
            <div className='h-32 p-2 my-2 bg-blue-700 rounded-lg  bg-gradient-to-r from-cyan-500 to-blue-500 border shadow-md'>
              <p className='font-semibold'>Get Assured 90k Cashback on Home loan and Avail Free MB Prime</p>
              <button className='my-5 text-red-700 font-bold'>I'm interested {'->'}</button>
            </div>
            <div className='h-32 text-left p-2 my-2 bg-blue-700 rounded-lg  bg-gradient-to-r from-white to-yellow-200 border shadow-md'>
              <p className='font-bold my-3'>Property sahi, Services sabhi</p>
              <p style={{ fontSize: '9px' }}>Do Much more with +15 properties</p>
              <button className='my-2 text-red-700 font-bold' style={{ fontSize: '9px' }}>View our survices {'->'}</button>
            </div>
            <div className=''>
              {
                dummyProperty.map((item, index) => {
                  return (
                    <Card4 key={index} img={item.img} service={item.service} builder={item.heading} location={item.location} price={item.price} />
                  )
                })
              }

            </div>
          </div>
        </div>
      </div>
      {/* <div className='text-9xl text-center text'>hello</div> */}

{/* ---------------popUp  for contact details--------------------- */}

      <div className=' fixed top-20 left-1/3 bg-white' id='popUp'>
        <div className='w-72 border shadow-lg py-9 px-5  text-xs text-center relative'>
          <button onClick={handleCanclePopup} className='absolute top-2 right-2'>❌</button>
          <p className='font-semibold text-lg'>Fill out this one time form</p>
          <p>Get Builder's details over email</p>
          <div>
            <div className='space-y-5 my-5 mx-4'>
              <input type='text' placeholder='your name' className='outline-none bg-transparent  border-b-2 w-full border-b-blue-900' />
              <input type='email' placeholder='your name' className='outline-none bg-transparent border-b-2 w-full  border-b-blue-900' />
              <div className='flex gap-2'>
                <select className='outline-none bg-transparent  border-b-2 border-b-blue-900 focus:border-b-red-600'>
                  <option value={'IND +91'}>IND +91</option>
                  <option value={'USA +1'}>USA +1</option>
                  <option value={'AUS +61'}>AUS +91</option>
                  <option value={'PAK +92'}>PAK +91</option>
                </select>
                <input type='tel' size='10' required placeholder='mobile no.' className='outline-none  bg-transparent border-b-2 border-b-blue-900 w-full' />
              </div>
              <input type='checkbox' /><span style={{ fontSize: '8px' }}> I Agree to MagicBricks' Terms of Use</span>
            </div>
            <button className='border py-1 px-4 bg-blue-800 text-white rounded-xl text-center' onClick={handleGetContactDetails}>Get Contact Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}
