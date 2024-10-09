// import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
// import { backendUrl } from '../App'

import { toast } from 'react-toastify'
import axios from 'axios'
import { backendUrl } from '../App'

const Customers = ({token}) => {


    
    const [customers, setCustomers] = useState([])

    const fetchCustomers = async () => {

     try {
        const response = await axios.get(backendUrl + '/api/user/users', {headers : {token}} )
        if(response.data.success){
            setCustomers(response.data.data)
        } else{
            toast.error(response.data.message)
        }
          
    } catch (error) {
           console.log(error);
           toast.error(error.message)
           
       }         
    }

    useEffect(() => {
      fetchCustomers()
    }, [])


    const asideRef = useRef()

    const handleWheel = (e) => {
        e.preventDefault();
        asideRef.current.scrollLeft += e.deltaY;
      };
    
      useEffect(() => {
        const addWheelListener = () => {
          if (window.innerWidth < 768) {
            // Add wheel event listener only for small screens (below 768px)
            asideRef.current.addEventListener("wheel", handleWheel);
          }
        };
    
        // Call the function to add event listener based on screen size
        addWheelListener();
    
        // Clean up the event listener when component unmounts or on re-render
        return () => {
          if (asideRef.current) {
            asideRef.current.removeEventListener("wheel", handleWheel);
          }
        };
      }, []);
    
  
  


  return (
    <>
       <p className='mb-2'>All Customers</p>

<div ref={asideRef} className='flex aside overflow-x-scroll flex-col gap-2'>
    {/* ------list table title */}

    <div className='md:grid md:grid-cols-[2fr_1fr_1fr] md:w-full min-w-[700px] flex items-center py-1 px-2 border bg-gray-100 text-sm'>
        <b className='min-w-[200px]'>ID</b>
        <b className='min-w-[200px]'>Name</b>
        <b className='min-w-[200px]'>Email</b>
    </div>


  {/* --------customers list------ */}

  {
    customers.map((customer, index) => (
      <div className='md:grid  md:grid-cols-[2fr_1fr_1fr] flex md:w-full min-w-[700px] py-1 px-2 text-sm border' key={index}>
        
        <p className='min-w-[200px]'>{customer._id}</p>
        <p className='min-w-[200px]'>{customer.name}</p>
        <p className='min-w-[200px]'>{customer.email}</p>

      </div>
    ))
  }

</div>
  

    </>
  )
}

export default Customers
