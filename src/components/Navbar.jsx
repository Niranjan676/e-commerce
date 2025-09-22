import React from 'react'

function Navbar() {
  return (
    <div className='bg-black h-14 flex items-center px-5 py-2 justify-between'>
      <div className='flex gap-2 items-center'>
        <img src='/public/image/logo/n.png' className='h-10' />
        <h1 className='text-white font-pacifico text-2xl'>Style Me</h1>
      </div>
      <div>
        <input type='text' placeholder='search...' className='px-2 py-1 text-md outline-none rounded-l-md'></input>
        <button className='bg-indigo-500 px-2 py-1 rounded-r-md'><i className="fa-solid fa-magnifying-glass text-white"></i></button>
      </div>
      <div className='flex gap-4'>
        <button className='text-white hover:underline underline-offset-4 decoration-indigo-500 transition-all duration-500ms'>Sign in</button>
        <button className='text-white bg-indigo-500 px-4 py-2 rounded-sm font-bold text-lg'>Cart: </button>
      </div>
    </div>
  )
}

export default Navbar
