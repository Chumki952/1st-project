import React from 'react'
import classes from '../../../public/class.json'
import user from '../../../public/images/users.jpg'
import Clases from './Clases'
const Class = () => {
 console.log(classes);
  return (
   
    <div className=' gap-8'>
      
      <h1 className='text-4xl text-center mt-10 font-serif text-green-500 font-bold'>Our Popular Class</h1>
      <div className='my-3'>
      <p className='text-sm text-center text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi 
        quos recusandae sunt illum aliquid deserunt itaque.</p>
        </div>
        <div className='flex flex-wrap justify-center gap-10  mt-10'>
{
  classes?.map((e,idx)=><div className=' p-2 border-2 border-gray-300 rounded-2xl' key={idx}>
<img className='w-[250px] h-[180px]' src={e.photo} alt="" />

<h2 className='text-xl mt-2 pl-5 text-green-500 font-semibold'>{e.name}</h2>
<h3 className='text-slate-500 pl-5 my-2 text-[18px]'>{e.prof}</h3>
<div className='flex mb-3'>
<span><img src={user} className='w-[22] h-[22px] pl-5 flex justify-between'  alt="" /></span>
<h2 className='w-1/4 '>{e.students}</h2>
</div>
  </div>)
}
</div>
<Clases/>
    </div>
   
  )
}

export default Class
