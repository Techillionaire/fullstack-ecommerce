import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src='./logo1.jpg' className='mb-5 w-[50px]' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>At RoyalBoutique, we specialize in curating a luxurious collection of men's and women's shoes, bags, and accessories. Our mission is to offer timeless elegance and contemporary style, ensuring every step you take is filled with confidence. Whether you're looking for the perfect pair of heels, statement sneakers, or a designer bag, we have something to elevate your wardrobe. Experience quality, style, and comfort with RoyalBoutique.


            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>contact@RoyalBoutique.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ RoyalBoutique.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
