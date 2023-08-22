import React from 'react'
import AboutCard from './AboutCard'
import {ImHome} from 'react-icons/im'
import AboutCard2 from './AboutCard2'

export default function About() {

  const dummy1=[
    {image:'https://cdn.pixabay.com/photo/2018/04/24/14/07/purchase-3347053__340.jpg',button:"I'm an agent or broker"},
    {image:'https://cdn.pixabay.com/photo/2019/01/30/08/14/house-3963987__340.jpg',button:"I'm a property manager"},
    {image:'https://cdn.pixabay.com/photo/2017/01/18/23/59/insurance-1991226__340.jpg',button:"I'm a land lord"},
    {image:'https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/2/2020/05/Lender-2x-2c744a.png',button:"I'm a lender or loan officer"},
    {image:'https://cdn.pixabay.com/photo/2020/03/16/19/26/architecture-4938096__340.jpg',button:"I'm a builder"},
    {image:'https://media.istockphoto.com/photos/couple-buying-new-home-discussing-with-real-estate-agent-picture-id1315341811?k=20&m=1315341811&s=612x612&w=0&h=tIxxvUWRcZ6M8aN97PCLtm3_bqfD21quFgBvZEs-bSc=',button:"I'm a brand amd local advertiser"},
  ]
  
  const dummy2=[
    { image:"https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/5/2022/07/Buy_a_home.webp",heading:"Buy a home",description:"Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.",button:"Browse Home"},
    { image:"https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/5/2022/07/Sell_a_home.webp",heading:"Sell a home",description:"No matter what path you take to sell your home, we can help you navigate a successful sale.",button:"See your option"},
    { image:"https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/5/2022/08/Rent_a_home.webp",heading:"Rent a home",description:"Discover a place that checks all of your boxes. Filter your rental search, and find exactly what you’re looking for.",button:"Find rentals"},
  ]


  return (
    <div className='w-full  my-12 bg-white'>
      <div className='flex' >
        <div className=' text-center w-3/4'>
          <div className='mx-4 my-24 text-center '>
              <p className='text-3xl font-bold m-6'>Let Dealing.. Build Your Business</p>
              <p className='text-xs'>Reach millions of buyers, sellers and renters on the largest real estate network on the web.</p>
              <div className=' text-center font-bold  relative m-3 text-blue-800 '><p className='absolute top-1 left-1/2 flex'><ImHome className='text-2xl'/> Select your home</p></div>
          </div>
        </div>
        <div className=' w-1/3'>
            <img src='https://cdn.pixabay.com/photo/2015/11/03/08/54/house-purchase-1019764__340.jpg'/>
        </div>
      </div>
        <div className='text-center'>
            <p className='my-6 text-sm font-bold'>Select your industry to get started</p>
            <div className='grid grid-cols-3 mx-32 my-5 w-3/4 '>
              {
                dummy1.map((item,index)=>{
                  return (
                    <AboutCard key={index} image={item.image} btn={item.button}/>
                    
                    )
                  })
                }
            </div>
          </div>
          <div className='m-10 '>
            <div className='font-bold text-lg m-3 text-center '>Reach your target audience on our network of leading real estate.</div>
            <div className='flex'>
                {
                  dummy2.map((item,index)=>{
                    return <AboutCard2 key={index} image={item.image} heading={item.heading} description={item.description} button={item.button} />
                    
                  })
                }
              </div>
          </div>
    </div>
  )
}
