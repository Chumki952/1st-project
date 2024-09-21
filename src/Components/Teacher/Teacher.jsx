import React from 'react'
import teacher from '../../assets/image/teacher.jpg'
import teacher1 from '../../assets/image/teacher1.jpg'
import teacher2 from '../../assets/image/teacher2.jpg'
import teacher3 from '../../assets/image/teacher3.jpg'
import teacher4 from '../../assets/image/teacher4.jpg'
import teacher5 from '../../assets/image/teacher5.jpg'
const Teacher = () => {
  return (
    <div>
    <div className='flex '>
      <div className='flex justify-between mt-3' >
      <div className=' w-1/2 mt-36 mx-14 '>
        <div className='text-4xl'>Become <span className='text-green-500 text-4xl '> An Instructor</span> <br/>of Our Platform</div>
    
      <p className='text-center text-gray-500  '>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Voluptatum odio ex dolorum earum cumque illo consequuntur 
          reiciendis atque in repellat,
         aut nesciunt ea, quos et ad vitae voluptatibus dolorem  </p>
         <div className='py-5'>
         <button className=' btn py-3 px-9 bg-green-500 font-semibold text-white rounded-lg'>Start Teaching</button>
         </div>
         </div>
         <img className='w-[500px] h-[500px] m-20 ' src={teacher} alt="" />
      </div>
    </div>

    <div className='mt-4'>
        <p className='text-center text-gray-300 text-sm'>welcome our teachers</p>
        <h1 className='text-4xl text-center font-serif'>Our Teachers</h1>
        <div className='flex flex-wrap gap-10 py-10'>
            <div className='w-fit flex gap-8 mx-auto'>
            <div>
                <img src={teacher1}  className='w-[200px] h-[250px] border-2 border-gray-100 rounded-3xl' alt="" />
                <h1  className='text-center font-serif mt-2 font-medium'>Mahmud Hasan</h1>
            </div>
            <div>
                <img src={teacher2}  className='w-[200px] h-[250px] border-2 border-gray-100 rounded-3xl' alt="" />
                <h1  className='text-center font-serif mt-2 font-medium'>Joyel hasan</h1>
            </div>
            <div>
                <img src={teacher4}  className='w-[200px] h-[250px] border-2 border-gray-100 rounded-3xl' alt="" />
                <h1  className='text-center font-serif mt-2 font-medium'>Atif Ahmed</h1>
            </div>
            <div>
                <img src={teacher3} className='w-[200px] h-[250px] border-2 border-gray-100 rounded-3xl' alt="" />
                <h1 className='text-center font-serif mt-2 font-medium'>Sohel Rana</h1>
            </div>
            <div>
                <img src={teacher5}  className='w-[200px] h-[250px] border-2 border-gray-100 rounded-3xl' alt="" />
                <h1  className='text-center font-serif mt-2 font-medium'>Mahbub Alom</h1>
            </div>
            </div>
        </div>
    </div>
</div>


    
  )
}

export default Teacher
