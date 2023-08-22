import React from 'react'
import '../../App.css'

export default function HomeJoin() {


    const handleSumbit=(e)=>{
        e.preventDefault();
    }

  return (
        <div className='p-3 bg-blue-700 text-white rounded-md'>
        <div>
            <div className='text-xl  '>Let's get started, fill on your details</div>
            <div className='text-sm my-5 '>
                <form onSubmit={handleSumbit}>
                    <div className='space-y-3 '>
                        <input type='text' required placeholder='name' className='outline-none bg-transparent border-b-2 focus:border-b-red-600' />
                        <input type='email' required placeholder='email' className='outline-none bg-transparent border-b-2 focus:border-b-red-600' />
                        <div className='flex gap-2'>
                            <select className='outline-none bg-transparent border-b-2 focus:border-b-red-600'>
                                <option value={'IND +91'}>IND +91</option>
                                <option value={'USA +1'}>USA +1</option>
                                <option value={'AUS +61'}>AUS +91</option>
                                <option value={'PAK +92'}>PAK +91</option>
                            </select> 
                            <input type='tel' size='10' required placeholder='mobile no.' className='outline-none  bg-transparent border-b-2 w-full focus:border-b-red-600' />
                        </div>
                    </div>
                    <button type='submit' className='text-xs border w-full p-1 rounded-xl my-10 bg-blue-500'>Start Now</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}
