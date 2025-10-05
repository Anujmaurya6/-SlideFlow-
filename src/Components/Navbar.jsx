import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full px-10 py-4 flex justify-between items-center bg-gray-100'>
      <h3 className='w-20 h-10 text-white px-3 py-1 rounded-lg bg-red-500 hover:bg-red-600 flex items-center justify-center'>
        Orange
      </h3>
      <div className='flex p-2 text-white px-4 rounded-md text-sm gap-3 bg-orange-600'>
        <h3>Favourites</h3>
        <h4>2</h4>
      </div>
    </div>
  )
}

export default Navbar
