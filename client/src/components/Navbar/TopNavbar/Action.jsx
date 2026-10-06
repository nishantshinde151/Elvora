import React from 'react'
import { Heart, ShoppingBag, User } from 'lucide-react'

const Action = () => {
  return (
    <div className="flex items-center gap-3">
      {/* Wishlist Icon */}
      <button 
        aria-label="Wishlist"
        className="p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer text-gray-700 hover:text-black"
      >
        <Heart size={20} />
      </button>

      {/* Cart Icon with Badge */}
      <button 
        aria-label="Cart"
        className="relative p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer text-gray-700 hover:text-black"
      >
        <ShoppingBag size={20} />
        <span className="absolute -top-1 -right-1 bg-[#A04527] text-white text-[11px] font-semibold h-4.5 w-4.5 rounded-full flex items-center justify-center">
          3
        </span>
      </button>

      {/* User Profile Icon */}
      <button 
        aria-label="Account"
        className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors cursor-pointer"
      >
        <User size={20} />
      </button>
    </div>
  )
}

export default Action