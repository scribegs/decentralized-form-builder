import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <a href='' className='navbar-brand'>
        ARC
      </a>

      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/create'>
              Create
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
