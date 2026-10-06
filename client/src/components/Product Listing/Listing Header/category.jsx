import React from 'react'
import { X } from 'lucide-react'

const Category = ({ categoryName = 'Clothes & Living', onClear }) => {
  return (
    <div className='inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 border border-gray-200/80 rounded-full text-xs md:text-sm text-gray-600 shadow-2xs'>
      <span className='text-gray-500 font-normal'>Category:</span>
      <span className='font-semibold text-gray-900'>{categoryName}</span>
      <button 
        onClick={onClear}
        className='ml-1 text-gray-400 hover:text-gray-700 cursor-pointer rounded-full p-0.5 hover:bg-gray-200/80 transition-colors focus:outline-none'
        aria-label="Clear category"
      >
        <X className='w-3.5 h-3.5' />
      </button>
    </div>
  )
}

export default Category