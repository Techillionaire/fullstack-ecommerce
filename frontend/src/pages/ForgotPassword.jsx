import React, {  useContext, useState } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'

const ForgotPassword = () => {

    const [email, setEmail] = useState('')

      const {navigate} = useContext(ShopContext)


      const onSubmitHandler = async (e) => {
        e.preventDefault()
  
        
        navigate('/reset-password')
      }
   
  return (
    <div className='w-full'>

        <div className='text-center prata-regular text-2xl mt-20'>
        <Title text1={'Forgot'} text2={'Password'}/>

        </div>


        <form onSubmit={onSubmitHandler} className='w-[90%] sm:max-w-96 m-auto mt-14  text-gray-800'>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='w-full px-3 py-2 border border-gray-800' type="email" placeholder='Enter Your email' required/>

            <button  className='w-fit mx-auto block mt-5 px-3 py-2 border border-gray-800 hover:bg-black transition-colors duration-500 delay-100 ease-in hover:text-white' type='submit'>Reset Password</button>
        </form>

      
    </div>
  )
}

export default ForgotPassword
