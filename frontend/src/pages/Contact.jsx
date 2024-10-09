import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src='https://img.freepik.com/premium-photo/you-should-come-check-out-sale-they-have-shot-woman-talking-her-cellphone-while-sitting-bench-with-shopping-bags_590464-65804.jpg?uid=R164646544&ga=GA1.2.1642242442.1716375531&semt=ais_hybrid' alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className=' text-gray-500'>54709 Willms Station <br /> Suite 350, Washington, USA</p>
          <p className=' text-gray-500'>Tel: (415) 555-0132 <br /> Email: admin@royalboutique.com</p>
          {/* <p className='font-semibold text-xl text-gray-600'>Careers at RoyalBoutique</p>
          <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button> */}
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default Contact
