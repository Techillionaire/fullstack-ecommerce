import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full object-cover md:max-w-[450px]' src='https://img.freepik.com/free-photo/still-life-say-no-fast-fashion_23-2149669608.jpg?uid=R164646544&ga=GA1.2.1642242442.1716375531&semt=ais_hybrid' alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>At RoyalBoutique, we believe fashion is an expression of individuality, style, and confidence. Specializing in men’s and women’s shoes, bags, and accessories, we provide timeless designs and the latest trends to complement your wardrobe. Our collections are crafted with care, ensuring quality and comfort, while offering a unique blend of elegance and modern style. Whether you're stepping out for a special occasion or looking for everyday essentials, RoyalBoutique brings a touch of luxury to every step you take.</p>
              <p>At RoyalBoutique, our passion goes beyond providing products. We believe in creating an exceptional shopping experience that brings sophistication and comfort to your wardrobe. Our commitment to quality and customer satisfaction is reflected in every piece we offer, ensuring that you not only look your best but feel confident in every step you take.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>At RoyalBoutique, our mission is to inspire confidence and elevate style by providing premium footwear, bags, and accessories for men and women. We are committed to delivering products that combine elegance, quality, and innovation, ensuring that every customer feels empowered and fashionable in their daily lives. Our focus is on exceptional craftsmanship, attention to detail, and customer satisfaction, making RoyalBoutique the go-to destination for timeless fashion and modern trends.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className=' text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
