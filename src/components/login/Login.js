import React, { useState } from 'react'
import '../../App.css'
import {AiOutlineCaretRight} from 'react-icons/ai'
import {AiOutlineCaretLeft} from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom'
 

const previousData=JSON.parse(localStorage.getItem('b'))

export default function Login() {
   
    // -----------------------declare data------------------
   
    const [toggle,setToggle]=useState(true)
    const [isShow,setIsShow]=useState(false)
    const [iswarning,setIswarning]=useState(false)
    const [loginData,setLoginData]=useState({iam:"", name:"" ,email:'',password:'',mobileNo:""})
    const [signData,setSignData]=useState({iam:"", name:"" ,email:'',password:'',mobileNo:""})
    const [dummyData,setDummyData]=useState(previousData);
    const successFullyCompleted=useNavigate();
    const location=useLocation();
    localStorage.setItem('b',JSON.stringify(dummyData))
    
    //---------------------login----------------------
    
    const handleLoginData=()=>{ 
        dummyData.forEach(element => {
            if(element.email===loginData.email && element.password===loginData.password){
                alert("login successfull")
                successFullyCompleted("/")
                location.getData(element.name);
                console.log(location.getData(element.name))

            }
            else if(loginData.email==='' || loginData.password===''){
                if(loginData.email===''){document.getElementById('emailId').innerHTML='    * required'}
                if(loginData.password===''){document.getElementById('passwordId').innerHTML='    * required'}
            }
            else{
                document.getElementById('loginUnsuccessfull').innerHTML='No user found with this email id'
            }
        });
        
    }
    const handleLogin=(e)=>{
        setLoginData({...loginData,[e.target.name]:e.target.value});
        if(loginData.email!==''){document.getElementById('emailId').innerHTML=''}
        if(loginData.password!==''){document.getElementById('passwordId').innerHTML=''}
    }

    //---------------------------sign up-------------------------
    
    const signDataHandle=(e)=>{
        setSignData({...signData,[e.target.name]:e.target.value});
        if(signData.iam!==''){document.getElementById('iam').innerHTML=''}
    }
    const handleSignup=(e)=>{
        e.preventDefault();
        // successFullyCompleted('/Home')
        if(signData.iam==='' || signData.email==='' || signData.name==='' || signData.mobileNo==='' || signData.password==='')
        {
            if(signData.name===''){document.getElementById('nameId').placeholder='*required'}
            if(signData.iam===''){document.getElementById('iamID').innerHTML='*required'}
            if(signData.email===''){document.getElementById('emailId').placeholder='*required'}
            if(signData.password===''){document.getElementById('passwordId').placeholder='*required'}
            if(signData.mobileNo===''){document.getElementById('mobileNoId').placeholder='*required'}
        }
        else{
            setDummyData([...dummyData,signData])
        }
    }
    

    return (
        <>
        <div className={iswarning?'relative blur-sm ' :'relative'}>

    
    <div className='bg-slate-400 w-full h-screen text-white relative py-10 flex  loginPage text-xs bg-fixed '>
            <button onClick={()=>{setIsShow(!isShow)}} className='text-black animate-ping'>{isShow?<AiOutlineCaretLeft/>:<AiOutlineCaretRight/>}</button>
        <div className={isShow?'h-96 my-3 w-52 p-4 rounded-lg bg-blue-800 object-none hidden':"h-96 my-3 w-52 p-4 rounded-lg bg-blue-800 object-none visible"} > 
            <p className='text-sm'>Things you Can Do with Magicbricks Account</p>
            <div className='whitespace-pre-wrap text-xs'>
                <ul className='space-x-4 space-y-3'>
                    <li>✔️Post one Single Property for FREE</li>
                    <li>✔️Set property alerts for your requirement</li>
                    <li>✔️Get accessed by over 1 Lakh buyers</li>
                    <li>✔️Showcase your property as Rental, PG or for Sale</li>
                    <li>✔️Get instant queries over Phone, Email and SMS</li>
                    <li>✔️Performance in search & Track responses & views online</li>
                    <li>✔️Add detailed property information & multiple photos per listing</li>
                </ul>   
            </div>


        </div>
        <div className='bg-blue-800 w-80 h-96 rounded-lg m-auto my-10' >
            <div className='relative p-5'>
                <p className='text-xl'>{toggle?"Login form":"Sign up"}</p><br/>
                {/* <button className='absolute top-0 right-0' onClick={()=>{(false)}}>❌</button> */}
                {toggle?
                <div className=' m-6 '>
                    <label htmlFor='email/username'>email/username<span id='emailId' className='text-red-600 font-bold'></span></label>
                    <input required name='email' id='email/username' onChange={handleLogin} type='email' className='outline-none bg-transparent decoration-2 decoration-solid  m-1 my-3 w-full '  style={{borderBottom:"1px solid white"}}/><br/>
                    <label htmlFor='password'>password<span id='passwordId' className='text-red-600 font-bold'></span></label>
                    <input required name='password' id='passwordID' onChange={handleLogin} type='password' className='outline-none bg-transparent decoration-2 decoration-solid  m-1 my-3 w-full '  style={{borderBottom:"1px solid white"}}/><br/>
                    <div id='loginUnsuccessfull' className='text-red-600 font-bold'></div>
                    <button onClick={handleLoginData} className='block w-full m-1 text-center my-10 p-1 text-sm bg-sky-500'  >login</button>

                    <p className='text-xs text-center'>Don't have an account <button className='text-lg hover:text-yellow-500 ' onClick={()=>{setToggle(false)}} > Signup</button></p>
                </div>:
                <div className=' text-white'>
                        <p className='absolute top-0 right-0 m-2' onClick={()=>{setIswarning(true)}}>⬅️</p>
                    <div className=' my-2 relative '>
                        <p className=' m-2'>i am</p>
                        <form className='text-white'>
                            <div className=''>
                            <span className='mx-3'>
                                <input onChange={signDataHandle}  className='outline-none' type='radio' value='owner/buyer'  name='iam'/>
                                <label htmlFor='owner' >owner/buyer</label >
                            </span>
                            <span className='mx-3'>
                                <input onChange={signDataHandle} className='outline-none' type='radio' value='agent' name='iam'/>
                                <label htmlFor='agent' >agent</label >
                            </span>
                            <span className='mx-3'>
                                <input onChange={signDataHandle}  className='outline-none' type='radio' value='Builder' name='iam'/>
                                <label htmlFor='builder'>Builder</label >
                            </span><div  id='iam' className='text-red-600 font-bold'></div>
                            </div>
                            <label htmlFor='name' style={{fontSize:'10px',display:'flex'}}>name</label>
                            <input onChange={signDataHandle} id='name'  name='name' className=' outline-none bg-transparent decoration-2 decoration-solid h-3  m-1 flex w-full text-center ' style={{borderBottom:"1px solid white"}} type='text' />
                            <label htmlFor='name' style={{fontSize:'10px',display:'flex'}}>email</label>
                            <input onChange={signDataHandle} id='email' name='email'   className=' outline-none bg-transparent decoration-2 decoration-solid    m-1  flex w-full text-center ' style={{borderBottom:"1px solid white"}} type='email'  />
                            <label htmlFor='name' style={{fontSize:'10px',display:'flex'}}>password</label>
                            <input onChange={signDataHandle} id='password' name='password'  className=' outline-none bg-transparent decoration-2 decoration-solid   flex m-1 w-full text-center ' style={{borderBottom:"1px solid white"}} type='password' />
                            <label htmlFor='name' style={{fontSize:'10px',display:'flex'}}>mobile</label>
                            <input onChange={signDataHandle} id='mobileNo' name='mobileNo'   className=' outline-none bg-transparent decoration-2 decoration-solid  flex  m-1 w-full text-center ' style={{borderBottom:"1px solid white"}} type='tel'/>
                            <p style={{fontSize:'8px'}}><input type='checkbox'/>  I agree to Dealing... T&C, Privacy Policy, & Cookie Policy</p>
                            <div className='block m-1 text-center my-10 p-1 text-sm bg-sky-500'><button onClick={handleSignup} >sign up</button></div>
                        </form >
                    </div>
                </div>
                }
                
            </div>
        </div>
    </div>
    </div>
                        {iswarning?<div className='w-44 h-40 bg-white shadow-slate-700 text-center p-2 absolute text-black top-48 rounded-lg right-96 z-20'>
                        <p className='m-5'>Are you sure you would cancle it</p>
                        <button className='m-2 p-1 px-4 bg-slate-200 hover: border border-solid' onClick={()=>{setToggle(true);setIswarning(false)}}>yes</button>
                        <button className='m-2 p-1 px-4 bg-slate-200 hover: border border-solid' onClick={()=>{setIswarning(false)}}>no</button>
                    </div>:""
                    
                }
      
                </>
    
  )
}
