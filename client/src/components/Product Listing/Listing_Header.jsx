import React from 'react'
import TotalProduct from './Listing Header/total_product'
import Category from './Listing Header/category'
import SortList from './Listing Header/sortlist'

const Listing_Header = () => {
    return (
        <div className='flex w-full justify-between items-center px-4 py-3 border-b border-gray-200/50 backdrop-blur-xs gap-4'>
            <div className='flex items-center gap-5'>
                <TotalProduct />
                <Category />
            </div>
            <SortList />
        </div>
    )
}

export default Listing_Header