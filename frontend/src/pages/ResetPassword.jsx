import React, { useState } from 'react'
import Title from '../components/Title'

const ResetPassword = () => {


    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <div>
       <div className='w-full'>

<div className='text-center prata-regular text-2xl mt-20'>
<Title text1={'Reset'} text2={'Password'}/>

</div>


<form className='w-[90%] sm:max-w-96 m-auto mt-14  text-gray-800'>
    <input value={password} onChange={(e) => setPassword(e.target.value)} className='w-full px-3 py-2 border border-gray-800' type="password" placeholder='Enter Your password' required/>

    <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='w-full mt-3 px-3 py-2 border border-gray-800' type="password" placeholder='Confirm password' required/>

   
    <button className='w-fit mx-auto block mt-5 px-6 py-2 border border-gray-800 hover:bg-black transition-colors duration-500 delay-100 ease-in hover:text-white' type='submit'>Confirm</button>
</form>


</div>
    </div>
  )
}

export default ResetPassword
