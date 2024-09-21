import React from 'react'

const Contact = () => {
  return (
   <div className='section mt-28 mb-6' id="contact">
<div className='text-center max-w-[600px] mx-auto'>
    <div className='text-4xl font-bold mb-5 '>
        Subscribe Newsletter
    </div>
    <p className='text-md leading-7 text-gray-800'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    Ut enim ad minim veniam,  Duis aute  quis nostrud
     exercitation ullamco laboris
    nisi ut aliquip
    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullar.  
    </p>
    <form className='mt-5'>
        <input type="text" placeholder='Enter your email address'
        className=' sm:p-3 p-2 text-md border-2 border-gray-100 shadow-lg sm:w-72 w-60 text-slate-800' />
        <button className=' text-white bg-green-500 border-2 border-green-500 sm:p-3 p-3 shadow-md'>Subcribe</button>
    </form>
</div>
   </div>
  )
}

export default Contact
