import React from 'react'
import about from '../../../public/images/about.jpg'

import Accordion from '../About/Accordion'


const About = () => {
  return (
    <div className='mt-8 '>
      <div>
        <h1 className='text-4xl  text-center font-sans font-semibold'>About Us</h1>
        </div>

<div className='flex justify-center'>
      <div className='w-1/2 mt-8'>
        <img src={about} className='p-2 border-[3px] mx-16 border-slate-300 object-cover' alt="" />
      </div>

      <div className='ml-10 w-1/2 items-center px-10 mx-auto mt-16'>
        <div className='font-bold text-[36px] text-center pl-32  mb-2'>
          <span className='text-green-500 '>We provide  the <br/> </span>  best  online course
 </div>
    <p className='text-[18px] mx-auto pr-20 ml-28 w-full'>
    Lorem Ipsum is simply dummy text of the printing and
     typesetting industry. Lorem Ipsum has been the industrys
      standard dummy text ever since the 1500s, when an unknown printer took
     a galley of type and scrambled it to make a type specimen book  been the industrys.
    </p>
    <div className='mx-auto flex justify-center'>
    <button className='py-3 ml-28 px-8 text-green-500 text-bold hover:bg-green-500 hover:text-white border-2 border-solid border-green-500 rounded-2xl mt-2 font-bold'>Course Now</button>
    </div>
      </div>
      </div>
   <Accordion/>
    </div>
  )
}

export default About
