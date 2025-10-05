import React from 'react'

const Card = ({ image, name }) => {
  return (
    <div className='w-60 bg-zinc-400 flex flex-col gap-4 p-4 rounded-md'>
      <div className='flex flex-col items-center gap-4'>
        <img
          src={image}
          alt={name}
          className='w-full h-40 object-cover rounded-md overflow-hidden'
        />
        <div className='text-center'>
          <h3 className='text-xl font-semibold'>{name}</h3>
          <h6 className='text-sm text-gray-700'>{name}</h6>
        </div>
      </div>
      <button className='px-4 py-3 bg-orange-600 text-white text-xs rounded-lg hover:bg-orange-700 transition-colors'>
        Add to Favourites
      </button>
    </div>
  )
}

export default Card
