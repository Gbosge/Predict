import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <>
    <section id='header'>
      <div className='header'>
        <h1>
          <span>English Fantasy</span>
          <span>Cross-platform secure</span>
          <span>English</span>
        </h1>
        
        </div>
        <p class="u-text-small">You can join and perticipate in our special Fantacy leagues</p>
        <div className='btn'><button className='btn_2'>Join FPI</button> <button className='btn_3'>Join Uefa League</button></div>
    </section>
    </>
  )
}
