import React from 'react'
import { FaGooglePlay } from 'react-icons/fa'
import { AiFillApple } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { GrYoutube } from 'react-icons/gr'

export default function Footer() {
    return (
        <footer className='bg-slate-200 '>
            <div>
                <div className='grid grid-cols-2 mx-10 text-xs'>
                    <div className='m-5'>
                        <h2 className='text-xl'>About Dealing</h2>
                        <span className='indent-12 text-xs'>Dealing... is a full stack service provider for all real estate needs, with 15+ services including home loans, pay rent, packers and movers, legal assistance, property valuation, and expert advice. As the largest platform for buyers and sellers of property to connect in a transparent manner, Magicbricks has an active base of over 15 lakh property listings.</span>
                        <div className=' flex'>

                            <div className='my-5 mx-1 text-center flex  m-2 border-2 border-black px-1 text-sm rounded-lg'><FaGooglePlay className='m-1' />
                                <a href='https://play.google.com/' target='_blank'>Google play</a>
                            </div>
                            <div className='my-5 mx-1 text-center flex  m-2 border-2 border-black px-1 text-sm rounded-lg'><AiFillApple className='m-1' />
                                <a href='https://apps.apple.com/' target='_blank'>Appstore</a>
                            </div>
                            <div className='flex my-5 mx-1'>
                                <a className='m-1 text-xl text-blue-700 ' href='https://facebook.com' target='_blank'><BsFacebook /></a>
                                <a className='m-1 text-xl text-pink-600' href='https://instagram.com' target='_blank'><AiFillInstagram /></a>
                                <a className='m-1 text-xl text-sky-500' href='https://twitter.com' target='_blank'><AiFillTwitterCircle /></a>
                                <a className='m-1 text-xl  text-sky-800' href='https://linkedin.com' target='_blank'><BsLinkedin /></a>
                                <a className='m-1 text-xl text-red-600' href='https://youtube.com' target='_blank'><GrYoutube /></a>
                            </div>
                        </div>
                    </div>


                    <div className='m-5'>  
                        <span className='text-xs my-5 '><p className='text-sm my-2 underline font-semibold '>properties in india</p>Property in New Delhi | Property in Mumbai | Property in Chennai | Property in Pune | Property in Noida | Property in Gurgaon | Property in Bangalore | Property in Ahmedabad</span>
                        <span className='text-xs my-5 '><p className='text-sm my-2 underline font-semibold'>New projects in India</p>New Projects in New Delhi | New Projects in Mumbai | New Projects in Chennai | New Projects in Pune | New Projects in Noida | New Projects in Gurgaon | New Projects in Bangalore | New Projects in Ahmedabad</span>
                    </div>

                </div>
                <div>

                </div>
            </div>
            <div className='mx-16'><img src='https://s.zillowstatic.com/pfs/static/footer-art.svg'/></div>
            <div className='flex w-full bg-slate-400 gap-8 text-xs px-16'>
                <a href='/'>Site Map</a>
                <a href='/'>Terms and condition</a>
                <a href='/'>privacy policy </a>
                <a href='/'>Blog</a>
                <a href='/'>Careers</a>
                <a href='/'>Feedback</a>
                <a href='/'>help center</a>
                <a href='/'>sels Enquiry</a>
                <a href='/'>Buy or survice</a>

            </div>
            <div className='m-7' style={{fontSize:"10px"}}>Disclaimer: Magicbricks Realty Services Limited is only an intermediary offering its platform to advertise properties of Seller for a Customer/Buyer/User coming on its Website and is not and cannot be a party to or privy to or control in any manner any transactions between the Seller and the Customer/Buyer/User. All the offers and discounts on this Website have been extended by Read more</div>
            <div className='m-5' style={{fontSize:"7px"}}>All trademarks, logos and names are properties of their respective owners. All Rights Reserved. © Copyright 2022 Magicbricks Realty Services Limited.</div>

        </footer>
    )
}
