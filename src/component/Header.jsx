import React from 'react'
import Logo from '../assets/logo.png'
function Header() {
  return (
    <div className='flex flex-auto text-white items-center justify-center mt-5 gap-3 border-b py-3'>
      <div className=''>
        <img src={Logo} alt="" />
      </div>
      <div className='border-l px-2'>
        
        <h1>SMC Whale Watch</h1>
      </div>
      
    </div>
  )
}

export default Header
