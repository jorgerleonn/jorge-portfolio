import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import {HamburgerClose, HamburgerShow} from './Icons.js'
import Menupages from './Menupages.js';


function NavBar() {

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  };

  return (
    <nav className='navbar'>
      <div className="nav-container-logo">
        <NavLink to="/jorge-portfolio">
          <img className="nav-logo" src={require('./cohete.png')} alt='logo'></img>
        </NavLink>
      </div>

      <div>
        <ul>
          <li className='nav-item'><NavLink activeClassname="active" className="nav-links" onClick={toggleMenu} to="/jorge-portfolio">Home</NavLink></li>
          <li className='nav-item'><NavLink activeClassname="active" className="nav-links" onClick={toggleMenu} to="/skills">Skills</NavLink></li>
          <li className='nav-item'><NavLink activeClassname="active" className="nav-links" onClick={toggleMenu} to="/contact">Contact</NavLink></li>
          <li className='nav-item'><NavLink activeClassname="active" className="nav-links" onClick={toggleMenu} to="/projects">Projects</NavLink></li>
          <li className='nav-item'><NavLink activeClassname="active" className="nav-links" onClick={toggleMenu} to="/about">About</NavLink></li>
        </ul>

        <div className="nav-icon" onClick={toggleMenu}>
        
          {showMenu ? (
            <span className='icon'>
              <HamburgerShow />
            </span>
          ) : (
            <span className='icon'>
              <HamburgerClose/>
              <Menupages className={showMenu ? 'menu active' : 'menu'} />
            </span>
          )}
      </div> 
      </div>
    </nav>
  );
}

export default NavBar;