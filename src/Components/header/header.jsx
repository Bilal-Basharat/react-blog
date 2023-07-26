import React from 'react'
import './header.css'
import imgSrc from '../../assets/pexels-mo-eid-2598040.jpg';

export default function Header() {
  return (
    <div className='header'>
<div className="headerTitle">
    <span className="headerTitleSm"> Nature Hacks  </span>
    <span className="headerTitleLg">     Welcome To my React Blog Website
 </span>
</div>

    <img src={imgSrc} alt="This is background image" className="headerImg" />
    </div>
  )
}
