import React from 'react'
import aboutImage from '../assets/images/about-img.png';

import './About.css';

const About = () => {
  return (
    <div className='About-main'>
       <div className="about-left">
        <img src={aboutImage} alt="about-Burger-img" />
       </div>
       <div className="about-right">
        <h3>We are AK Cafe</h3>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All</p>
        <button>Read More</button>
       </div>
    </div>
  )
}

export default About
