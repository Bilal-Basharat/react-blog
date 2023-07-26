import React from 'react'
import "./componentsCSS.css"
import { Link } from 'react-router-dom'; 

export default function Navbar() {
  return (
    <>
    <div className='top'>  
    <div className='topLeft'> Nature Hacks </div>
    <div className='topCentre'> 
      <ul className="topList">
      
        <li className='topListItem'> 
        <Link to="/" > Home  </Link></li>
     
        <li className='topListItem'> 
        <Link to="/write" > Create Blog  </Link></li>
     
        <li className='topListItem'> 
        <Link to="/posts" > View Blogs  </Link></li>
     
        <li className='topListItem'> 
        <Link to="/" > Contact Us  </Link>
        </li>
     
        <li className='topListItem'> 
        <Link to="/" > About Us  </Link></li>
     
      </ul>
     </div>
    <div className='topRight'> 
    <button className='btn btn-primary'> Login </button>
    <button className='btn btn-lg'> SignUp </button>
     </div>
    </div>

    </>
  )
}
