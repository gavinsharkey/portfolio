import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`navbar-menu ${isOpen ? 'open' : null}`}>
      <div className="navbar-menu-close">
        <button onClick={toggleMenu} type="button" className="close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="nav flex-column">
        <NavLink onClick={toggleMenu} to="/about" className="nav-item nav-link" activeClassName="active">About</NavLink>
        <NavLink onClick={toggleMenu} to="/projects" className="nav-item nav-link" activeClassName="active">Projects</NavLink>
        <NavLink onClick={toggleMenu} to="/contact" className="nav-item nav-link" activeClassName="active">Contact</NavLink>
      </div>
    </div>
  )
}

export default NavbarMenu