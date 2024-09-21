import React from 'react'
import icons from '../../../public/icon.json'
const Footer = () => {
  console.log(icons);
  return (
    <div className='mb-8 bg-gray-200 max-w-full h-[300px] mt-20'>

     <div className='w-2/3 mx-auto'>
     <div className=' flex flex-wrap gap-6'>
      {/*first section*/}
<div className=' max-w-[300px] py-8 space-y-2'>
  <h1 className='text-2xl font-bold  px-8'>The Coding Journey</h1>
<p className='text-gray-700 px-8 italic'>Lorem, ipsum dolor sit amet consectetur adipisicing
   elit. Eos assumenda, saepe laborum animi fugit voluptate! Placeat esse,
   mollitia dignissimos inventore ad officiis explicabo quaerat quis. </p>
   </div>
   {/*second section*/}
   
    <div className='space-y-2  py-8'>
<h1 className='text-2xl font-bold '>Courses</h1>
<div className='text-green-500'>
  <ul className='space-y-2 text-lg'>
    <li className='cursor-pointer hover:text-gray-800'>Webb Devolepment</li>
    <li className='cursor-pointer hover:text-gray-800'>Apps Devolepment</li>
    <li className='cursor-pointer hover:text-gray-800'>Software Devolepment</li>
    <li className='cursor-pointer hover:text-gray-800'>E-Learning</li>
  </ul>
</div>
</div>
{/*third section*/ }
<div className='space-y-2  py-8 px-8 '>
<h1 className='text-2xl font-bold '>Linkes</h1>
<div className='text-gray-500'>
  <ul className='space-y-2 text-lg'>
    <li className='cursor-pointer hover:text-gray-800'>Home </li>
    <li className='cursor-pointer hover:text-gray-800'>About</li>
    <li className='cursor-pointer hover:text-gray-800'>Teacher</li>
    <li className='cursor-pointer hover:text-gray-800'>Contact Us</li>
  </ul>
</div>
</div>
{/* four section*/}
<div className='py-8  gap-10 space-y-2'>
<div className='text-2xl font-bold '>Follw Us</div>
<div className='text-md cursor-pointer'>
chumky7777@gmail.com
</div>
<div className='text-md'>0122236787</div>
<div className=' pt-4 flex gap-4 '> 
  {
    icons?.map((e,idx)=><div className=' hover:scale-110 duration-300 cursor-pointer rounded-3xl' key={idx}>
<img className=' w-8 h-8 rounded-full border-2 hover:border-green-500' src={e.photo} alt="" />
    </div>)
  }
</div>
</div>
     </div>
     </div>

    </div>
  )
}

export default Footer

