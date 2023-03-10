import React from 'react'
import './Nav.css'
import {GiWingfoot} from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='container'>
        <div className='logo'>
            <GiWingfoot color='red' size={30}/>
            <p className='logo-text'>SoccerTips</p>
        </div>

        
        <menu>
            <ul className='nav-bar'>
              <Link to='/'><li>Home</li></Link>
              <Link to='/Featured'><li>Featured Picks</li></Link>
              <Link to='/Subscribe'><li>Subscribe</li></Link>
              <Link to='/Contact'><button className='btn_1'>Contact Us</button></Link>
            </ul>
        </menu>

    </nav>
    
  )
}

export default Nav