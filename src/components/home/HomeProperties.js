import React from 'react'
import { Link, } from 'react-router-dom'
import {IoMdImages} from 'react-icons/io'
import './HomeProperties.css'

export default function HomeProperties(props) {
  const flat=props.data.flat
  console.log(props.data.flat);

  const handleContactDetails=()=>{
    const popup=document.getElementById('popUp');
    popup.classList.toggle('active')
    const popup2=document.getElementById('backgroundPopup');
    popup2.classList.toggle('active')
  }

    const dummyProperty=[
        {img:"", flat:flat ,title:' Apartment for sale in Vardhaman shikhar meridian, patel..', place:"vardhman shikhar meridian", builder:"Vardhman Constructors",price:"31.8 Lac"   },
        {img:"", flat:flat ,title:' BHK Apartment for Sale in Spring Valley Dew, Katara Hills ', place:"Spring Valley Dew", builder:"Asnani Group",price:"22.1 Lac"   },
        {img:"", flat:flat ,title:'Apartment for sale in sagar Greeb hills, kolar road ', place:"Sagar green hills", builder:"Agrawal Construction ",price:"45.9 Lac"   },
        {img:"", flat:flat ,title:' Apartment for sale in Vardhaman shikhar meridian,patel..', place:"vardhman shikhar meridian", builder:"Vardhman Constructors",price:"31.8 Lac"   },
        {img:"", flat:flat ,title:' BHK Apartment for Sale in Spring Valley Dew, Katara Hills ', place:"Spring Valley Dew", builder:"Asnani Group",price:"22.1 Lac"   },
        {img:"", flat:flat ,title:'Apartment for sale in sagar Greeb hills, kolar road ', place:"Sagar green hills", builder:"Agrawal Construction ",price:"45.9 Lac"   },
        {img:"", flat:flat ,title:'House for sale in CI Estate, kolar Road ', place:"CI Estate", builder:"C.I Builders Pvt. Ltd",price:"34.9 Lac"   },
        {img:"", flat:flat ,title:' Apartment for sale in Vardhaman shikhar meridian, patel..', place:"vardhman shikhar meridian", builder:"Vardhman Constructors",price:"31.8 Lac"   },
        {img:"", flat:flat ,title:' BHK Apartment for Sale in Spring Valley Dew, Katara Hills ', place:"Spring Valley Dew", builder:"Asnani Group",price:"22.1 Lac"   },
        {img:"", flat:flat ,title:'Apartment for sale in sagar Greeb hills, kolar road ', place:"Sagar green hills", builder:"Agrawal Construction ",price:"45.9 Lac"   },
        {img:"", flat:flat ,title:' Apartment for sale in Vardhaman shikhar meridian,patel..', place:"vardhman shikhar meridian", builder:"Vardhman Constructors",price:"31.8 Lac"   },
        {img:"", flat:flat ,title:' BHK Apartment for Sale in Spring Valley Dew, Katara Hills ', place:"Spring Valley Dew", builder:"Asnani Group",price:"22.1 Lac"   },
        {img:"", flat:flat ,title:'Apartment for sale in sagar Greeb hills, kolar road ', place:"Sagar green hills", builder:"Agrawal Construction ",price:"45.9 Lac"   },
        {img:"", flat:flat ,title:'House for sale in CI Estate, kolar Road ', place:"CI Estate", builder:"C.I Builders Pvt. Ltd",price:"34.9 Lac"   },
    ]


  return (
    <div>
      <div className='my-4'>
        <p>1426 results | Residential Properties for Sale in {props.data.data.city}</p>
        <div className=''>
            { dummyProperty.map((item,index)=>{
              return (
              <div key={index} className='flex h-36 bg-white text-xs rounded-lg my-5 border border-slate-200 shadow-sm hover:shadow-xl'>
                    <div className=' flex w-3/4 '>
                      <div className='w-1/3'>
                        <div className='relative'>
                          <img src='https://img.staticmb.com/mbimages/project/Photo_h310_w462/2022/07/18/Project-Photo-15-Vardhman-Shikhar-Meridian-Bhopal-5333469_1200_1600_310_462.jpg' alt='sorry' className='m-3 w-44 h-24 rounded-lg bg-cover'></img>
                          <Link to='/ImagePage' state={{data:item,}} className='absolute top-1 font-bold text-white bg-black left-4 px-1 flex '><IoMdImages/>+</Link>
                        </div>
                          <div className=' text-center' style={{fontSize:'10px'}}>Builder: {item.builder}</div>
                      </div>
                      <div className='m-3 w-2/3 p-3'>
                          <div className=' m-1' style={{fontSize:'12px'}}>{item.title}</div>
                          <div className=' m-1' style={{fontSize:'9px'}}>{item.place}</div>
                          <div className='p-2 '>
                            <span className='m-2'>super area</span>
                            <span className='m-2'>status</span>
                            <span className='m-2'>transection</span>
                          </div>
                      </div>
                    </div>
                    <div className='w-1/4 text-center p-3 text-xs bg-slate-100 rounded-lg '>
                      <div style={{fontSize:'15px'}}>{item.price}</div>
                      <div style={{fontSize:'10px'}}>{item.price}</div>
                      <button onClick={handleContactDetails} className=' bg-blue-700 text-white  rounded-lg py-1 px-3 my-2'>Contact builder</button>
                      <button onClick={handleContactDetails} className='border border-red-600 text-red-600 rounded-lg py-1 px-3 '>Enquiry now</button>
                      <p className='m-2 underline' style={{fontSize:'9px'}}>share feedback</p>
                    </div>
                    
                </div>
            )})
          }
          
        </div>
      </div>
    
    </div>
  )
}
