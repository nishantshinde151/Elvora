import React from 'react'

const TotalProduct = ({ count = 24 }) => {
  return (
    <div className='text-xs md:text-sm text-gray-500 font-medium border-r border-gray-400 pr-2'>
      Showing <span className='text-gray-900 font-semibold'>{count}</span> Curated Essentials
    </div>
  )
}

export default TotalProduct