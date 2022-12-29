import React from 'react'
import '../Style/Contact.css';
import {Link} from "react-router-dom";
export default function Contact() {
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
    <div className='contact-bg'>
      <div className='conatct-text'>  
      <h1 className='contact-one'>Interested In </h1>
      <h1 className='contact-two'>Building A Business</h1>
      <h1 className='contact-three'>With Us?</h1>
      </div>
    <div className='form'>
    <input type={"text"} required placeholder='First Name' className='name'></input>
      <input type={"email"} required placeholder='Email' className='email'></input>
    </div>
    <textarea className='mesg' cols={55} rows={50} placeholder='I have a Project For You :)'></textarea>
    <button className='btn'><a href='/#'>Submit</a></button>
    </div>
   </>
  )
}
