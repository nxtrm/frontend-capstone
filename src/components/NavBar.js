import React from 'react'
import logo from '../Assets/Logo.svg'

function NavBar() {
  return (
    <nav>
        <ul>
            <li>
                <img src={logo} alt="logo" />
            </li>
        </ul>
    </nav>
  )
}

export default NavBar