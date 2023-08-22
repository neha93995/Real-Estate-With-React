import React, { useState,useEffect } from 'react'
import GoogleLogin,{GoogleLogout} from 'react-google-login'
// import {gapi} from 'gapi-script'
export default function LoginForm() {
    const [toggle,setToggle]=useState(true)
    const  clientId='462449381197-8mrdv5v2nk9lo1kb33pq24s14521u8bq.apps.googleusercontent.com'

    const onLoginSuccess=()=>{
        console.log('onLogin Success')
        setToggle(false)
    }
    const onFailureSuccess=()=>{
        console.log('on Failure Success')
    }
    const onLogoutSuccess=()=>{
        console.log('on log out success')
        setToggle(true)
    }
    // useEffect(()=>{
    //     function start(){
    //         gapi.client.init({
    //             clientId:clientId,
    //             scopee:''
    //         })
    //     };
    //     gapi.load('client auth ',start)
    // })
  return (
    <div>
        {/* {
            toggle? */}
                <GoogleLogin
                    clientId={clientId}
                    buttonText='login'
                    onSuccess={onLoginSuccess}
                    onFailure={onFailureSuccess}
                >
                </GoogleLogin>
                {/* : */}
                <GoogleLogout
                    clientId={clientId}
                    buttonText='Logout'
                    onLogoutSuccess={onLogoutSuccess}>

                </GoogleLogout>
        {/* } */}
    </div>
  )
}




