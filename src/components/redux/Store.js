import {configureStore} from '@reduxjs/toolkit'
import UserReducer from './UserReducer';


const Store = configureStore({
    reducer:UserReducer,
  })
  export default Store;