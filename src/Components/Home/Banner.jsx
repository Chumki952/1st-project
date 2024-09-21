import React from 'react'
import banner from '../../../public/images/banner.jpg'
import micro from '../../assets/image/microsoft.jpg'
import stand from '../../assets/image/standford.png'
import airbnb from '../../assets/image/airbnb.png'
import google from '../../assets/image/google.png'
import penn from '../../assets/image/penn.jpg'

const Banner = () => {
  return (
    <div className='relative'>
<div>
  <img src={banner} className='w-full h-[600px] object-cover' alt="" />
</div>

<div className='w-1/2 top-52 absolute ml-9 gap-2'>
  <h1 className='text-4xl font-bold mb-4 text-green-500 '>Start Learning <span className='text-white italic'>With Our Experts,</span><br></br>Anywhere,Anytime</h1>
  <p className='mb-4 text-md text-gray-300'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
  labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur, adipisicing elit.
   Consectetur, necessitatibus?.
  </p>
  <div className='search'>
      
        <button className='btn bg-green-500 border-none p-4 w-1/4 text-white font-bold rounded-xl'>Get Started Course</button>
        </div>
</div>
<div >
  <p className='text-center text-xl py-10'>
    We collaborate with <span className='text-green-500'>100+ leading universites and companies</span>
  </p>
  <div className='flex justify-center items-center  flex-wrap py-8'>
    <div className='flex w-20 justify-center gap-14 '>
    <img src={micro} alt="" />
    <img src={stand} />
    <img src={penn} />
    <img src={airbnb} />
    <img src={google} />
    <img src={micro} />  
    </div>
    
  </div>
</div>

    </div>
  )
}

export default Banner
