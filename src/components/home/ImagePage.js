import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {BsChevronCompactLeft} from 'react-icons/bs'
import HomeJoin from './HomeJoin';

export default function ImagePage() {
    const location=useLocation();
    const state=location.state;

    const history=useNavigate()
    
    const images=[
        'https://img.staticmb.com/mbimages/project/Photo_h0_w320/2022/07/18/Site-Photos-21-Vardhman-Shikhar-Meridian-Bhopal-5333469_600_800_0_320.jpg',
        'https://img.staticmb.com/mbimages/project/Photo_h0_w320/2022/07/18/Project-Photo-8-Vardhman-Shikhar-Meridian-Bhopal-5333469_345_1366_0_320.jpg' ,
        'https://img.staticmb.com/mbimages/project/Photo_h0_w320/2022/07/18/Project-Photo-9-Vardhman-Shikhar-Meridian-Bhopal-5333469_1200_1600_0_320.jpg',
        'https://img.staticmb.com/mbimages/project/Photo_h0_w320/2022/07/18/Site-Photos-20-Vardhman-Shikhar-Meridian-Bhopal-5333469_600_800_0_320.jpg',
        'https://img.staticmb.com/mbimages/project/Photo_h0_w320/2022/07/18/Site-Photos-30-Vardhman-Shikhar-Meridian-Bhopal-5333469_600_800_0_320.jpg',
        'https://img.staticmb.com/mbimages/project/Photo_h0_w320/2022/07/18/Project-Photo-10-Vardhman-Shikhar-Meridian-Bhopal-5333469_1200_1600_0_320.jpg',
        'https://img.staticmb.com/mbimages/project/Photo_h0_w320/2022/07/18/Site-Photos-29-Vardhman-Shikhar-Meridian-Bhopal-5333469_600_800_0_320.jpg' ,
        'https://img.staticmb.com/mbimages/project/Photo_h0_w320/2022/07/18/Project-Photo-17-Vardhman-Shikhar-Meridian-Bhopal-5333469_1200_1600_0_320.jpg',
        'https://img.staticmb.com/mbimages/project/Photo_h0_w320/2019/12/23/Project-Photo-34-Sagar-Green-Hills-Bhopal-5073085_667_1000_0_320.jpg',
        'https://img.staticmb.com/mbimages/project/Photo_h0_w320/2022/05/27/Project-Photo-44-Sagar-Green-Hills-Bhopal-5073085_345_1366_0_320.jpg',
        'https://img.staticmb.com/mbimages/project/Photo_h0_w320/2021/04/09/Project-Photo-52-British-Park-Bhopal-5023612_1200_1600_0_320.jpg',
        'https://img.staticmb.com/mbimages/project/Photo_h0_w320/2021/04/06/Project-Photo-25-British-Park-Bhopal-5023612_1200_1600_0_320.jpg',
        'https://img.staticmb.com/mbimages/project/Photo_h0_w320/2021/04/06/Project-Photo-32-British-Park-Bhopal-5023612_1200_1600_0_320.jpg',
        'https://img.staticmb.com/mbimages/project/Photo_h0_w320/2022/07/18/Site-Photos-21-Vardhman-Shikhar-Meridian-Bhopal-5333469_600_800_0_320.jpg',
        'https://img.staticmb.com/mbimages/project/Photo_h0_w320/2022/07/18/Project-Photo-8-Vardhman-Shikhar-Meridian-Bhopal-5333469_345_1366_0_320.jpg' ,
        'https://img.staticmb.com/mbimages/project/Photo_h0_w320/2022/07/18/Project-Photo-9-Vardhman-Shikhar-Meridian-Bhopal-5333469_1200_1600_0_320.jpg',
        'https://img.staticmb.com/mbimages/project/Photo_h0_w320/2022/07/18/Site-Photos-20-Vardhman-Shikhar-Meridian-Bhopal-5333469_600_800_0_320.jpg',
        'https://img.staticmb.com/mbimages/project/Photo_h0_w320/2022/07/18/Site-Photos-30-Vardhman-Shikhar-Meridian-Bhopal-5333469_600_800_0_320.jpg',
        'https://img.staticmb.com/mbimages/project/Photo_h0_w320/2022/07/18/Project-Photo-10-Vardhman-Shikhar-Meridian-Bhopal-5333469_1200_1600_0_320.jpg',
        'https://img.staticmb.com/mbimages/project/Photo_h0_w320/2022/07/18/Site-Photos-29-Vardhman-Shikhar-Meridian-Bhopal-5333469_600_800_0_320.jpg' ,
        'https://img.staticmb.com/mbimages/project/Photo_h0_w320/2022/07/18/Project-Photo-17-Vardhman-Shikhar-Meridian-Bhopal-5333469_1200_1600_0_320.jpg',
        'https://img.staticmb.com/mbimages/project/Photo_h0_w320/2019/12/23/Project-Photo-34-Sagar-Green-Hills-Bhopal-5073085_667_1000_0_320.jpg',
        'https://img.staticmb.com/mbimages/project/Photo_h0_w320/2022/05/27/Project-Photo-44-Sagar-Green-Hills-Bhopal-5073085_345_1366_0_320.jpg',
        'https://img.staticmb.com/mbimages/project/Photo_h0_w320/2021/04/09/Project-Photo-52-British-Park-Bhopal-5023612_1200_1600_0_320.jpg',
        'https://img.staticmb.com/mbimages/project/Photo_h0_w320/2021/04/06/Project-Photo-25-British-Park-Bhopal-5023612_1200_1600_0_320.jpg',
        'https://img.staticmb.com/mbimages/project/Photo_h0_w320/2021/04/06/Project-Photo-32-British-Park-Bhopal-5023612_1200_1600_0_320.jpg'

    ]
    console.log()
  return (
    <div className='mx-16 my-14  '>
        <div className='text-xl font-semibold p-4 flex relative'><BsChevronCompactLeft onClick={()=>{history(-1)}} className='absolute top-5 font-bold -left-2 '/> {state.data.flat} for sale in {state.data.place}  </div>
          <div className='flex'>
            <div className='flex flex-wrap  w-9/12 '>
              {
                images.map((item,index)=>{
                  return(
                    <img key={index} src={item} className='w-48 rounded-lg m-2 hover:transform hover:scale-90 transition duration-150' alt='sorry'/>
                    )
                  })
                }
            </div>
            <div className='mx-3 h-full fixed right-5 w-3/12'>
              <HomeJoin/>

               
            </div>
        </div>
      <div onClick={()=>{console.log(state.data)}}> hello</div>
    </div>
  )
}
