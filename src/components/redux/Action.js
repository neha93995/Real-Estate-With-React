//  const updateStatus = (status)=>{
//     return {
//         type:"UPDATESAY",
//         payload:status
//     }
// }

// export default updateStatus;



// ----------------------second way by using 'createaction'-------------


import { createAction } from '@reduxjs/toolkit'

export const updateStatus=createAction('UPDATESAY')

export const fetchData=()=>{
    return async (dispatch)=>{
        const res =await fetch('https://jsonplaceholder.typicode.com/users');
        const result=await res.json();
        dispatch({type:"UPDATE",payload2:result[0].name,payload:result[0].id})
    }
}