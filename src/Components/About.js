import React from 'react';
import '../Style/About.css';
import {Link} from "react-router-dom";
import Laptop from '../Images/laptop.jpg';
export default function About() {
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
    <div className='about-bg'>
      <h1 className='about-head'>About US</h1>
    <img className='about-img' src={Laptop} height={500} width={600} alt="laptop" />
    <p className='about-para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, commodi at repellat veritatis fuga vitae perspiciatis, reiciendis repellendus et suscipit possimus voluptate eveniet omnis vero adipisci tenetur sit accusantium iusto.
    Quasi dolore earum assumenda, suscipit quam ipsum nesciunt illum tenetur facilis voluptate repellat fuga sit quas perspiciatis ex. Quae odit maiores voluptate corporis nesciunt molestias repellat nostrum voluptatum eligendi laboriosam?
    Quis, distinctio? Et tempore nemo provident totam deserunt cumque vel laudantium sit a, minus id dolor modi tenetur itaque pariatur eius nostrum ipsa? Mollitia blanditiis harum, possimus voluptate est magnam?
    Excepturi, tempore omnis dicta animi minus consequuntur esse labore maiores necessitatibus autem ab quisquam ratione cupiditate atque pariatur, tempora facere fugit quasi. Voluptas magnam corporis, ullam animi quae odit quisquam!
    Ullam nostrum voluptatum facilis nisi maxime nulla commodi doloribus consequuntur enim quod ab rem ratione exercitationem ipsa debitis totam sunt, iusto cum deleniti quibusdam odio voluptate accusantium. Ratione, deleniti nemo!
    Molestias aliquid adipisci officia neque ipsa aut numquam commodi consequatur asperiores. Quia eos accusantium iste ratione, minus laboriosam excepturi illo quo natus ipsa! Qui nostrum.
   </p>
    </div>
    </>
  )
}
