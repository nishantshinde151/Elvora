import React from 'react'
import Logo from './Top Navbar/logo'
import Search from './Top Navbar/Search'
import Action from './Top Navbar/Action'


const Navbar = () => {
  return (
    <div className='bg-[#FFF9F2] flex justify-between items-center p-4'>
      <Logo />
      <Search />
      <Action />
    </div>
  )
}

export default Navbar