import React from 'react';
import '../Style/NavBar.css';
import {Link} from "react-router-dom";
export default function NavBar() {
  return (
    <>
    <nav className='navbar'>
      <ul className='links'>
          <li>
           <Link to="/">Home</Link> 
            </li>
          <li>
           <Link to="/about">About</Link> 
            </li>
          <li>
           <Link to='/contact'>Contact Us</Link> 
            </li>
      </ul>
    </nav>

    <div className='hero-page'>
            <h1 className='one'>We offer modern</h1> 
            <h1 className='two'>Solutions for Growing</h1> 
            <h1 className='three'>Your Business </h1>
            <p className='para'>We are team of talented designers making 
            websites with React</p>
            <button className='hero-btn'> <a href="/#">Get Started</a></button>
      </div>

    </>
  )
}
