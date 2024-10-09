import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { CiUser } from 'react-icons/ci'
import { MdOutlineDashboardCustomize } from 'react-icons/md'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>

        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 ' to="/dashboard">
                
                <MdOutlineDashboardCustomize className='size-5' />

                <p className='hidden md:block'>Dashboard</p>
            </NavLink>

            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 ' to="/add">
                <img className='w-5 h-5' src={assets.add_icon} alt="" />
                <p className='hidden md:block'>Add Product</p>
            </NavLink>

            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 ' to="/list">
                <img className='w-5 h-5' src={assets.order_icon} alt="" />
                <p className='hidden md:block'>All Products</p>
            </NavLink>

            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2' to="/orders">
                <img className='w-5 h-5' src={assets.order_icon} alt="" />
                <p className='hidden md:block'>Orders</p>
            </NavLink>

            
            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2' to="/customers">
                
                <CiUser className='size-5'/>
                <p className='hidden md:block'>Customers</p>
            </NavLink>

        </div>

    </div>
  )
}

export default Sidebar