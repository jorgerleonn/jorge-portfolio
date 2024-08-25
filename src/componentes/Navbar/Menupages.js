import React,  {useState} from 'react'
import { NavLink } from 'react-router-dom';
import './menupages.css'

export default function Menupages() {

    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (

    <ul className='menu'>
        <li><NavLink activeClassname="active" className="nav-links-menu" onClick={toggleMenu} to="/portfolio">Home</NavLink></li>
        <li><NavLink activeClassname="active" className="nav-links-menu" onClick={toggleMenu} to="/skills">Skills</NavLink></li>
        <li><NavLink activeClassname="active" className="nav-links-menu" onClick={toggleMenu} to="/contact">Contact</NavLink></li>
        <li><NavLink activeClassname="active" className="nav-links-menu" onClick={toggleMenu} to="/projects">Projects</NavLink></li>
        <li><NavLink activeClassname="active" className="nav-links-menu" onClick={toggleMenu} to="/about">About</NavLink></li>
    </ul>

    )
}
