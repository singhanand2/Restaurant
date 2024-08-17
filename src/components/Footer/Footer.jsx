import React from 'react'
import './Footer.css';
import { CiLocationOn } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";

import { FaFacebook ,FaTwitter, FaLinkedin, FaInstagramSquare,} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='main-footer-section'>
        <div className="footer">
            <div className="footer-part footer-contact">
                <h3>Contact Us</h3>
                <div className="footer-contact-ancor">
                <a href="#"> <CiLocationOn/> Location</a>
                <a href="#"> <IoIosCall/> Call +01 1234567890</a>
                <a href="#"> <CiMail/> demo@gmail.com</a>
                </div> 
            </div>
            <div className="footer-part cafe">
                <h3>AK Cafe</h3>
                <p className='cafe-para'>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>
                <div className="icons">
                     <FaFacebook className='icon'/>
                     <FaTwitter className='icon'/>
                     <FaLinkedin className='icon'/>
                     <FaInstagramSquare className='icon'/>
                </div>
            </div>
            <div className="footer-part opening-hour">
                <h3>Opening hour</h3>
                <p>Every Day</p>
                <p>10:00 AM to 10:00 PM</p>
            </div>
        </div>
        <p>© 2024 All Rights Reserved By Free Html Templates</p>
        <p>© Distributed By ThemeWagon</p>
    </div>
  )
}

export default Footer
