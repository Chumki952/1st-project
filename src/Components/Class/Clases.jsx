import React from 'react'
import classess from '../../../public/Clases.json'
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
const Clases = () => {
  return (
    <div>
      <div className='text-3xl font-bold mt-12  ml-20'>Most Top Class</div>
      <div className='mt-10 overflow-x-hidden relative w-full '>
      <div className='flex  ml-20 gap-10 md:w-full sm:w-[170%] xs:w-[340%] w-[480%]  animate-slide'>
      {
        classess?.map((e,idx)=><div className=' bg-gray-50 min-w-64  rounded-md' key={idx}>

<img src={e.image} className='w-64 h-52 object-cover mx-auto  ' alt="" />
<div className='mt-2 text-md text-green-500'>{e.catagory}</div>
<div className='text-sm mt-2 font-bold'>{e.title}</div>
<div className='flex items-center justify-between '>
<div className='flex items-center gap-2'>
<div className='bg-gray-100 p-1 rounded-full'>
<AiOutlineUser className='text-green-500 size-5' />
</div>
<div className='text-sm font-bold'>{e.participants}</div>
</div>

 
  <div className='flex items-center gap-2'>
    <div className='bg-gray-100 flex p-1 rounded-full'>
    <AiOutlineStar className='text-yellow-500 size-5' />
    </div>
    <div className='text-sm font-bold'>{e.rating}</div>
  </div>
 
</div>
</div>
)
      }
      </div>
    </div>
    </div>
  )
}

export default Clases
