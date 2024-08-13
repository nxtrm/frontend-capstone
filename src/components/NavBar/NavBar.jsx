import React from 'react'
import logo from '../../Assets/Logo.svg'
import LinkButton from '../LinkButton/LinkButton'

function NavBar() {
  return (
    <nav>
        <div className='flex flex-row gap-4 justify-center m-4 items-center h-15'>
            <img src={logo} alt="logo" />
            <LinkButton href="/">Home</LinkButton>
            <LinkButton href="#about">About</LinkButton>
            <LinkButton >Menu</LinkButton>
            <LinkButton href="/booking">Reservations</LinkButton>
            <LinkButton >Order Online</LinkButton>
            <LinkButton >Login</LinkButton>
        </div>
    </nav>
  )
}

export default NavBar