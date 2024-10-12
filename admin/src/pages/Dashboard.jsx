import React, { useEffect, useRef, useState } from 'react'
import { Line } from 'react-chartjs-2';
import "chart.js/auto";
import { toast } from 'react-toastify'
import axios from 'axios'
import { backendUrl } from '../App'
import { getGreeting } from '../../greeting';

import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { Link } from 'react-router-dom';

const Dashboard = ({token}) => {

    const greeting = getGreeting()
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




    const data = {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "June",
          "July",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Wavy Data",
            data: [3, 2, 5, 1, 4, 2, 1, 4, 3, 2, 4, 5],
            borderColor: "#3490dc",
            backgroundColor: "rgba(52, 144, 220, 0.2)",
            tension: 0.5, // This adds the wave/curved effect
          },
        ],
      };
    
      const options = {
        scales: {
          y: { beginAtZero: true },
        },
        animation: {
          duration: 2000, // Animation speed
          easing: "easeInOutSine", // Smooth wavy animation
        },
      };
    
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


    <section className='grid grid-cols-12 gap-5 w-full'>



    <div className='shadow-md p-4 lg:col-start-1 lg:col-end-7 col-span-12 '>
       <p className='text-gray-800 text-xl font-medium'>{greeting}</p>
       <p>Here's what happening with your store, today</p>


       <div className='flex mt-10 justify-between'>
       <div className='space-y-3'>
        <div>
        <b>15,304</b>
        <p>Today's visit</p>
        </div>

        <div>
        <b>15,304</b>
        <p>Today's total sales</p>
        </div>
       </div>

          <img src="https://bazaar.ui-lib.com/assets/images/illustrations/dashboard/welcome.svg" alt="" />
       </div>
    

    </div>

       <div className='lg:col-start-7 lg:col-end-13 col-span-12 grid lg:grid-cols-2 grid-cols-1 gap-5 '>
       
       <div className='shadow-md p-4'>
         <p className='text-gray-400'>Orders</p>

         <div className='flex mt-5 justify-between'>
            <div>
                <p className='mb-3 font-semibold'>$32,530</p>
                <p className='text-gray-400'>9350</p>
            </div>
            <div className=' flex items-center gap-2'>
            <TiArrowSortedUp className='text-blue-500'/>

             <p className='text-blue-500'>23.50%</p>
            </div>
         </div>
       </div>

       <div className='shadow-md p-4'>
         <p className='text-gray-400'>Sold Items</p>

         <div className='flex mt-5 justify-between'>
            <div>
                <p className='mb-3 font-semibold'>$2,356</p>
                <p className='text-gray-400'>1350</p>
            </div>
            <div className=' flex items-center gap-2'>
            <TiArrowSortedDown className='text-red-500'/>

             <p className='text-red-500'>2.50%</p>
            </div>
         </div>
       </div>

       <div className='shadow-md p-4'>
         <p className='text-gray-400'>Gross sale</p>

         <div className='flex mt-5 justify-between'>
            <div>
                <p className='mb-3 font-semibold'>$12,460.70</p>
                <p className='text-gray-400'>9350</p>
            </div>
            <div className=' flex items-center gap-2'>
            <TiArrowSortedUp className='text-green-500'/>

             <p className='text-green-500'>10.50%</p>
            </div>
         </div>
       </div>


       <div className='shadow-md p-4'>
         <p className='text-gray-400'>Total Shipping cost</p>

         <div className='flex mt-5 justify-between'>
            <div>
                <p className='mb-3 font-semibold'>$6,240</p>
                <p className='text-gray-400'>9350</p>
            </div>
            <div className=' flex items-center gap-2'>
            <TiArrowSortedDown className='text-red-500'/>

             <p className='text-red-500'>6.50%</p>
            </div>
         </div>
       </div>


       </div>

     <div className='lg:col-start-1 gap-5 lg:col-end-13 col-span-12 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 '>

     <div className='shadow-md p-4'>
         <p className='text-gray-400'>Weekly Sales</p>

         <div className='flex mt-5 justify-between'>
            <div>
                <p className='mb-3 font-semibold'>$6,240</p>
                <div className='flex items-center gap-2 '>
            <TiArrowSortedUp className='text-blue-500'/>
             <p className='text-blue-500'>10.50%</p>
             </div>
            </div>
            <div className=' flex items-center gap-2'>
           
            </div>
         </div>
       </div>

       <div className='shadow-md p-4'>
         <p className='text-gray-400'>Product Share</p>

         <div className='flex mt-5 justify-between'>
            <div>
                <p className='mb-3 font-semibold'>39.50%</p>
            <div className='flex items-center gap-2 '>
            <TiArrowSortedUp className='text-blue-500'/>
             <p className='text-blue-500'>12.50%</p>
             </div>
            </div>
            <div className=' flex items-center gap-2'>
           
            </div>
         </div>
       </div>

       <div className='shadow-md p-4'>
         <p className='text-gray-400'>Total Order</p>

         <div className='flex mt-5 justify-between'>
            <div>
                <p className='mb-3 font-semibold'>$12,240</p>
                <div className='flex items-center gap-2 '>
            <TiArrowSortedUp className='text-blue-500'/>
             <p className='text-blue-500'>2.50%</p>
             </div>
             </div>
            <div className=' flex items-center gap-2'>
           
            </div>
         </div>
       </div>

       <div className='shadow-md p-4'>
         <p className='text-gray-400'>Market Share</p>

         <div className='flex mt-5 justify-between'>
            <div>
                <p className='mb-3 font-semibold'>$16,240</p>
                <div className='flex items-center gap-2 '>
            <TiArrowSortedUp className='text-blue-500'/>
             <p className='text-blue-500'>6.50%</p>
             </div>            </div>
            <div className=' flex items-center gap-2'>
           
            </div>
         </div>
       </div>

        
     </div>

     <div className="shadow p-5 lg:col-start-1 lg:col-end-13 col-span-12">
          <div className="flex justify-between w-full mb-5">
            <p className="font-semibold">Analytics</p>
            <p className="text-gray-500">Yearly</p>
          </div>
          <Line data={data} options={options} />
        </div>
   


     <div ref={asideRef} className='lg:col-start-1 aside overflow-x-scroll lg:col-end-13 col-span-11 '>

        <div className='flex justify-between items-center mb-5'>
         <p>All Customers</p>   
        <Link to='/customers' className='border px-4 py-2 hover:bg-black hover:text-white transition-colors duration-500 delay-75 ease-in-out'>View all Customers</Link>

        </div>
     {/* ------list table title */}

  <div className='md:grid md:grid-cols-[2fr_1fr_1fr] md:w-full min-w-[700px] flex items-center py-1 px-2 border bg-gray-100 text-sm'>
        <b className='min-w-[200px]'>ID</b>
        <b className='min-w-[200px]'>Name</b>
        <b className='min-w-[200px]'>Email</b>
    </div>


  {/* --------customers list------ */}

  {
    customers.slice(0,5).map((customer, index) => (
      <div className='md:grid  md:grid-cols-[2fr_1fr_1fr] flex md:w-full min-w-[700px] py-1 px-2 text-sm border' key={index}>
        
        <p className='min-w-[200px]'>{customer._id}</p>
        <p className='min-w-[200px]'>{customer.name}</p>
        <p className='min-w-[200px]'>{customer.email}</p>
      </div>
    ))
  }




     </div>







    </section>
    


      
    </>
  )
}

export default Dashboard
