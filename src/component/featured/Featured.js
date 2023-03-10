import React from 'react'
import './Featured.css'
import {AiFillAndroid} from 'react-icons/ai'
import Features from './Features'
import FeatureList from './data'

const Featured = () => {
  return (
    <section id='features'>
    <div className='features-container'>
      <div className='title'></div>
      <AiFillAndroid color='orangered' size={30}/>
      <h2>FEATURED PICKS</h2> 
    <p className='u-text-small'>G-fantasy Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptates sunt, assumenda, error placeat in facere, nobis quae repellat beatae necessitatibus ad cumque. Error quia, magni quos iusto cum recusandae!</p>   
    <div className='features-content'>
      <div className='features-right'>
        <Features/>
      </div>
    </div>
    </div>
    </section>
  )
}

export default Featured