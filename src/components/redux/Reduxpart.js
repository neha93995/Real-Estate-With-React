import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {updateStatus,fetchData} from './Action'

export default function Reduxpart() {
  const dispatch=useDispatch()

   const {name,age,say}= useSelector((state)=>{
        return state;
    })
    const update=(age,name)=>{
      dispatch(fetchData())
    }

    const updateSay=(say)=>{
      dispatch(updateStatus(say))
    }

  return (
    <div className='my-20'>
      hello
      <p>{name}</p>
      <p>{age}</p>
      <p>{say}</p>
      <button onClick={()=>update(40,'two')}>update</button>
      <button onClick={()=>updateSay('good morning')}>update</button>
    </div>
  )
}
