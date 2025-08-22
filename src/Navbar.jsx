import React from 'react'
import logo from '../Logos/brand_logo.png'
import './index.css';
function Navbar() {
  return (
    <div className='wholenav'>
        <div className='logo'>
        <img src={logo} alt="Logo"/> 
        </div>
        <div className='navlink'>
            <ul className="nav-links">
                <li href='#'>Menu</li>
                <li href='#'>Location</li>
                <li href='#'>About</li>
                <li href='#'>Contact</li>
            </ul>
        </div>    
        <button className='nav-button'>Login</button>
       
    </div>
  )
}

export default Navbar