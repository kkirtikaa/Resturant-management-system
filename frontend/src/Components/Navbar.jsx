import React from 'react'

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full flex justify-between p-[2rem] text-white z-10'>
      <div>
        <h2 className='font-bold text-2xl'>DEMI'S DINER</h2>
      </div>
      <div>
        <ul className='flex justify-between gap-8'>
          <li className='font-bold text-lg cursor-pointer'>HOME</li>
          <li className='font-bold cursor-pointer'>MENU</li>
          <li className='font-bold cursor-pointer'>RESERVATION</li>
          <li className='font-bold cursor-pointer'>CONTACT</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
