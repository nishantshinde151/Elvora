import React from 'react'
import Logo from './TopNavbar/logo'
import Search from './TopNavbar/Search'
import Action from './TopNavbar/Action'


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