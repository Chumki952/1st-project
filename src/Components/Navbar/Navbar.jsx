import React from 'react'
import logo from '../../../public/images/logo.jpg'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-around bg-white shadow-md w-full p-1'>
      <div className=' '>
        <img src={logo} className='w-24 h-20  object-cover' alt="" />
      </div>
      <div className='my-auto '>
        <ul className='flex gap-10'>
            <NavLink to={'/'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-500 underline" : ""
  }>
              <li className='text-lg font-semibold text-gray-500'>Home</li>
            </NavLink>
            <NavLink to={'/about'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-500 underline" : ""}>
              <li className='text-lg font-semibold text-gray-500'>About</li>
            </NavLink>

            <NavLink to={'/class'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-500 underline" : ""}>
              <li className='text-lg font-semibold text-gray-500'>Class</li>
            </NavLink>
            <NavLink to={'/teacher'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-500 underline" : ""}>
              <li className='text-lg font-semibold text-gray-500'>Teacher</li>
            </NavLink>
            <NavLink to={'/contact'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-500 underline" : ""}>
              <li className='text-lg font-semibold text-gray-500'>Contact Us</li>
            </NavLink>
        </ul>
      </div>
      <div className='my-auto'>
        <button className='btn bg-green-500 text-white font-bold'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
