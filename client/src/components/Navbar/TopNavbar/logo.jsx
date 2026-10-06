import React from 'react'

const logo = () => {
  return (
    <a href="/" className="group flex items-baseline gap-1 focus:outline-none cursor-pointer">
      <span 
        style={{ fontFamily: "'Cinzel', serif" }} 
        className="text-2xl font-black tracking-[0.25em] text-stone-900 group-hover:text-[#A04527] transition-colors duration-300 uppercase"
      >
        ELVORA
      </span>
    </a>
  )
}

export default logo