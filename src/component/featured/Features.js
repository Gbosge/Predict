import React from 'react'

const Features = ({id, icon, heading, text, result}) => {
  return (
    <div className='feature'>
    <div className='feature-icons'>
    <div className='inner-icon'>{icon}</div>
    </div>    
    <div className='feature-text'>
    <h3>{heading}</h3>
    
    </div>
    </div>
  )
}

export default Features