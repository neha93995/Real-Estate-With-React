import { createReducer } from "@reduxjs/toolkit";

const initialState={
    name:'one',
    age:1,
    say:'hello'
  }

//   export default (state=initialState,action)=>{
//     if(action.type==='UPDATE'){
//         return {...state,
//             age:action.payload,
//         }
//     }
//     return state;
//   }


  // ---------------create reducer using  createReducer toolkit-----------------

  export default createReducer(initialState,(builder)=>{
    builder.addCase('UPDATE',(state,action)=>{
        state.age=action.payload;
        state.name=action.payload2
    })
    builder.addCase('UPDATESAY',(state,action)=>{
      state.say=action.payload
    })

  })