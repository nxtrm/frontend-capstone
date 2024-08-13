import React from 'react'
import logo from '../../Assets/Logo.svg'
import LinkButton from '../LinkButton/LinkButton'
import { useState } from 'react'
import hamburger from '../../Assets/hamburger.svg'

function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav>
      <div className='flex flex-row gap-4 justify-center m-4 items-center h-15'>
        <img src={logo} alt="logo" className="mx-auto" />
        <div className="hidden md:flex flex-row gap-4 justify-center items-center">
          <LinkButton href="/">Home</LinkButton>
          <LinkButton href="#about">About</LinkButton>
          <LinkButton>Menu</LinkButton>
          <LinkButton href="/booking">Reservations</LinkButton>
          <LinkButton>Order Online</LinkButton>
          <LinkButton>Login</LinkButton>
        </div>
        <button className="md:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <img src={hamburger} alt="menu" />
        </button>
      </div>
      {isSidebarOpen && (
        <div className="md:hidden flex flex-col gap-4 p-4 bg-gray-100">
          <LinkButton href="/">Home</LinkButton>
          <LinkButton href="#about">About</LinkButton>
          <LinkButton>Menu</LinkButton>
          <LinkButton href="/booking">Reservations</LinkButton>
          <LinkButton>Order Online</LinkButton>
          <LinkButton>Login</LinkButton>
        </div>
      )}
    </nav>
  );
}

export default NavBar;