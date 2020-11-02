import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import NavbarMenu from './NavbarMenu'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState)
  }

  return (
    <>
      <div className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <Link className="navbar-brand" to="/">Gavin Sharkey</Link>
        <button onClick={toggleMenu} className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav d-none d-lg-flex">
            <NavLink to="/about" className="nav-item nav-link" activeClassName="active">About</NavLink>
            <NavLink to="/projects" className="nav-item nav-link" activeClassName="active">Projects</NavLink>
            <NavLink to="/contact" className="nav-item nav-link" activeClassName="active">Contact</NavLink>
          </div>
        </div>
      </div>
      <NavbarMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </>
  )
}

export default Navbar