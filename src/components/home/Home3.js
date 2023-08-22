import React from 'react'
import Card from './Card'
import Card2 from './Card2'
import Card3 from './Card3'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import {RiHomeSmileFill} from 'react-icons/ri'
import {MdFindInPage} from 'react-icons/md'
import {SiTrendmicro} from 'react-icons/si'
import {HiCalculator} from 'react-icons/hi'
import {FaHandsHelping} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {IoIosTimer} from 'react-icons/io'

export default function Home3() {

    const dummy = [
        { img: 'https://cdn.staticmb.com/magicservicestatic/images/mb-home-web/collection/buy/webp/owner-property.webp', service: "Home Loan", heading: "view and compare your best offers and apply online", address: '/' },
        { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZW4rTK04DCraAI0gWCjBg20sYW3YUgcs9A&usqp=CAU', service: "Pay rent", heading: "Pay your rent using credit card & earn rewards", address: '/' },
        { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9TGaTmMJ3NpcBiRbIXUVTN1ZV4AALtGPYVA&usqp=CAU', service: "Legal Service", heading: "get expert legal help for all property related matters", address: '/' },
        { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoyxMI8WcRxXKH-CYWK4gr2cc0RftGlbH1nA&usqp=CAU', service: "Vastu", heading: "consult the best vastu experts for your home or office", address: '/' },
    ]

    const dummy2 = [
        { img: 'https://cdn.staticmb.com/property/microsite/new-banners/project-spotlights/sage-golden-spring-ayodhya-bypass-bhopal/img.jpg', service: "Spring dew", heading: "by Agrawal construction ", location: "Ayodhya bypass Bhopal (M.P)", address: '/' },
        { img: 'https://www.rohanbuilders.com/assets/upload/main-projects/residential/prathama/rohan-prathama-background.jpg', service: "Sage Velley", heading: "By Ashani Group", location: "Katara hills Bhopal", address: '/' },
        { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSarEsC3myrGORhqZYoqfGZSBG5iYGtnGyx7R3Sk07FL27hF832D7qgG2NhUrzE1aN2Zwc&usqp=CAU', service: "Somya Heritage", heading: "By foutune Somya Housing ", location: "Hoshangabad Road Bhopal", address: '/' },
        { img: 'https://newprojects.99acres.com/projects/rohan_housing/_rohan_prathama/images/84j7kn1s_large.jpg', service: "Nirrupam Royal Palms", heading: "By Nirrupam Associates ", location: "Vidisha Rd Bhopal", address: '/' },
    ]

    const dummy3 = [
        { offer: "certificate", icon: < RiHomeSmileFill className='w-10 h-10  '/>, heading: "property Valuation", title: "Know the right value for your before you buy or sell.", btn: "Read more" },
        { offer: "Get free", icon: < MdFindInPage className='w-10 h-10  '/>, heading: "Legal Title Check", title: "Get property checked for clean title and no legal claim bank attachment.", btn: "read more" },
        { offer: "", icon: < SiTrendmicro className='w-10 h-10  '/>, heading: "Rates and Treands", title: "Know all about Property Rates & Trends in your city.", btn: "view now" },
        { offer: "", icon: < HiCalculator className='w-10 h-10  '/>, heading: "EMI caluculator", title: "know how much you'll have to pay every month on your loan", btn: "view now" },
        { offer: "", icon: < FaHandsHelping className='w-10 h-10  '/>, heading: "investment Hotspot", title: "Discover top localities in your city for investment", btn: "view now" },
    ]

    const dummy4=[
        {icon:<IoIosTimer/>,title:'10 properties with in 5Lac -10Lac', btn:'Continue last search'},
        {icon:<IoIosTimer/>,title:'Get personalised property recommendation from us', btn:'see all'},
        {icon:<IoIosTimer/>,title:'Top Handpicked Projects for you', btn:'see all'},
        {icon:<IoIosTimer/>,title:'Top Exclusive Owner Properties', btn:'see all'},
    ]

    // const [cardNo,setCardNo]=useState(3)

    const nextButton = (e) => {
        const slides = document.getElementById("slides");
        slides.scrollLeft = slides.scrollLeft + 500;
        console.log(slides.scrollLeft)
        if(slides.scrollLeft===211.1999969482422){
            const disbled= document.getElementById('nextButton');
            disbled.style.visibility='hidden'
            const disbled2= document.getElementById('backButton');
            disbled2.style.visibility='visible';



            //------------not working---------
            e.currentTarget.disabled=true;
            // console.log(e.currentTarget)
        }
        
    }
    const backButton = () => {
        const slides = document.getElementById("slides");
        slides.scrollLeft = slides.scrollLeft - 500
        console.log(slides.scrollLeft)
        if(slides.scrollLeft===0){
            const disbled= document.getElementById('backButton');
            disbled.style.visibility='hidden'
            const disbled2= document.getElementById('nextButton');
            disbled2.style.visibility='visible'
        }
    }

    return (
        <div className='mx-16'>
            <div className=' grid grid-cols-4 ' >
                {
                    dummy4.map((item, index) => {
                        return (
                            <Card3 key={index} index={index} item={item} />
                        )
                    })
                }
            </div>
            <div className='my-8'>
                <div className='text-2xl first-letter:text-blue-800 font-bold first-letter:text-3xl'>Property Services</div>
                <div className=' grid grid-cols-4 my-4'>
                    {
                        dummy.map((item, index) => {
                            return (
                                <Card key={index} image={item.img} service={item.service} heading={item.heading} address={item.address} />
                                )
                                
                            })
                        }
                </div>
            </div>
            <div className='my-7'>
                <div className='text-2xl first-letter:text-blue-800 font-bold first-letter:text-3xl'>Top Projects</div>
                <div className=' grid grid-cols-4 '>
                    {
                        dummy2.map((item, index) => {
                            return (
                                <Card key={index} image={item.img} service={item.service} heading={item.heading} location={item.location} address={item.address} />
                            )

                        })
                    }
                </div>
            </div>
            <div className='my-7'>
                <div className='bg-purple-400 p-3 px-9 my-3 rounded-lg flex relative'>
                    <div className=' first-letter:text-blue-800 font-bold first-letter:text-3xl'>Post Your Property for Free<br />
                        <span>list it on Dealing.. and gets genuine leads</span>
                    </div>
                    <div className='absolute top-8 right-12 border py-1 px-4 rounded-full bg-blue-800 text-white'>
                        <Link to='/PostProperty'>Post Property<span className='bg-yellow-400 rounded-lg text-xs px-1 mx-3 w-9 h3 animate-pulse'>free</span></Link>
                    </div>
                </div>
            </div>
            <div className=' relative my-7'>
                <div className='text-2xl  first-letter:text-blue-800 font-bold first-letter:text-3xl'>Advice and tool</div>
                <div className=' mx-7 flex overflow-x-hidden scroll-smooth' id='slides'>

                    {
                        dummy3.map((item, index) => {
                            return (
                                <>
                                    <Card2 key={index} icons={item.icon} heading={item.heading} title={item.title} btn={item.btn} offer={item.offer} index={index} />
                                </>
                            )
                        })
                    }

                </div>
                <button  onClick={nextButton} className='absolute top-1/2 right-0 ' id='nextButton' > <BsFillArrowRightCircleFill className='text-2xl hover:text-purple-800 ' /></button>
                <button  onClick={backButton} className='absolute top-1/2 left-0   ' id='backButton' > <BsFillArrowLeftCircleFill className='text-2xl hover:text-purple-800 ' /></button>
            </div>




        </div>
    )
}
