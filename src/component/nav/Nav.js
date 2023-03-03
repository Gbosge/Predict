import React from 'react'
import './Nav.css'
import {GiWingfoot} from 'react-icons/gi'

const Nav = () => {
  return (
    <nav className='container'>
        <div className='logo'>
            <GiWingfoot color='red' size={30}/>
            <p className='logo-text'>SoccerTips</p>
        </div>
    <menu>
            <ul className='nav_bar'>
                <li>
                <a href="">Home</a>
                </li>
                <li>
                <a href="">Featured Picks</a>
                </li>
                <li>
                <a href="">Schedules</a>
                </li>
                <li>
                <a href="">Contact Us</a>
                </li>
                
            </ul>
    </menu>

    </nav>
  )
}

export default Nav