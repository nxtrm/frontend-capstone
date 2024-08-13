import React from 'react'
import logo from '../Assets/Logo.svg'
import LinkButton from './LinkButton/LinkButton'

function AppFooter() {
  return (
    <footer className='w-full bg-slate-300 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 p-10'>
      <img src={logo} alt="logo" className='w-[200px]' />
      <div className='flex flex-col gap-2'>
          <h1 className='text-primaryGreen font-heading font-bold text-lead'>About Little Lemon</h1>

          <LinkButton href="/">Home</LinkButton>
          <LinkButton href="#about">About</LinkButton>
          <LinkButton >Menu</LinkButton>
          <LinkButton href="/booking">Reservations</LinkButton>
          <LinkButton >Order Online</LinkButton>
          <LinkButton >Login</LinkButton>

      </div>
      <div className='flex flex-col gap-2'>
          <h1 className='text-primaryGreen font-heading font-bold text-lead'>Contact</h1>
          <p>Adress</p>
          <p>Phone</p>
          <p>Email</p>
      </div>
      <div className='flex flex-col gap-2'>
          <h1 className='text-primaryGreen font-heading font-bold text-lead'>Social media</h1>
          <a href="/">FaceBook</a>
          <a href="/">Instagram</a>
          <a href="/">Twitter</a>
      </div>
    </footer>
  )
}

export default AppFooter