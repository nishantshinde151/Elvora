import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

const sortOptions = [
  'FEATURED FIRST',
  'PRICE: LOW TO HIGH',
  'PRICE: HIGH TO LOW',
  'NEWEST ARRIVALS',
  'BEST SELLING'
]

const SortList = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('FEATURED FIRST')
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className='relative inline-block text-left' ref={dropdownRef}>
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className='inline-flex items-center gap-2 bg-white border border-gray-300/80 px-3 py-1.5 text-xs cursor-pointer hover:border-gray-400 transition-colors focus:outline-none shadow-2xs'
      >
        <span className='text-gray-400 font-medium tracking-wider'>SORT:</span>
        <span className='font-semibold text-gray-800 tracking-wide'>{selectedOption}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className='absolute right-0 mt-1 w-48 bg-white border border-gray-200 shadow-md z-50 py-1 text-xs'>
          {sortOptions.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSelectedOption(option)
                setIsOpen(false)
              }}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100/70 transition-colors cursor-pointer ${
                selectedOption === option ? 'font-semibold text-gray-900 bg-gray-50' : 'text-gray-600'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default SortList