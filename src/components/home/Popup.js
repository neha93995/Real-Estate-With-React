import React, { useEffect,useState } from 'react'

export default function Popup(props) {
    const popup=props.popup;
    const [value,setValue]=useState('')
    
    useEffect(()=>{
        props.takeData(value)
    },[value])

   
  return (
  <>
      { popup?
            <div className='absolute top-8 p-2  shadow-xl bg-white border border-slate-300 w-64 h-40 rounded-lg' style={{fontSize:"10px"}}>hello
                <div className='flex'>
                    <button className='m-1 h-6 p-1 border border-blue-700 rounded-lg' onClick={(e)=>{setValue(e.target.value)}} value="flat">Flat</button>
                    <button className='m-1 h-6 p-1 border border-blue-700 rounded-lg' onClick={(e)=>{setValue(e.target.value)}} value="vill/house">house/villa</button>
                    <button className='m-1 h-6 p-1 border border-blue-700 rounded-lg' onClick={(e)=>{setValue(e.target.value)}} value="plot">plot</button>
                </div>
                <div className='flex '>
                    <option className='m-1 h-6 p-1 border border-blue-700 rounded-lg' value={'1bhk'} onClick={(e)=>{setValue(e.target.value)}}>1BHK</option>
                    <option className='m-1 h-6 p-1 border border-blue-700 rounded-lg' value={'2bhk'} onClick={(e)=>{setValue(e.target.value)}}>2BHK</option>
                    <option className='m-1 h-6 p-1 border border-blue-700 rounded-lg' value={'3bhk'} onClick={(e)=>{setValue(e.target.value)}}>3BHK</option>
                    <option className='m-1 h-6 p-1 border border-blue-700 rounded-lg' value={'4bhk'} onClick={(e)=>{setValue(e.target.value)}}>4BHK</option>
                    <option className='m-1 h-6 p-1 border border-blue-700 rounded-lg' value={'5bhk'} onClick={(e)=>{setValue(e.target.value)}}>5+BHK</option>
                </div>
            </div>
                      :""
      }
</>
  )
}
