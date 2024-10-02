import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
        <img className='w-[50px]' src='./logo1.jpg' alt="" />
        <button onClick={()=>setToken('')} className='bg-black text-white px-5 py-2 sm:px-7 sm:py-2  text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar