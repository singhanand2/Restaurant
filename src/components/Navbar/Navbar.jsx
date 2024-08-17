import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FaUser, FaSearch, FaShoppingCart, FaRegWindowClose } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.css';

const Navbar = () => {

    const [ismobile, setIsMobile] = useState(false);

    return (
        <div className='Navbar-section'>
            <div className="restaurant-logo">
                <h3>AK Cafe</h3>
            </div>
            <div className={ismobile ? "moblie-Menu-left-Nav-section" : 'left-Nav-section'}>
                <div className={ismobile ? "mobile-Navlink" : 'Navlinks'}>
                    <NavLink className='link'
                        style={({ isActive }) => ({
                            color: isActive
                                ? "greenyellow"
                                : "white",
                        })}
                        to='/'>Home</NavLink>
                    <NavLink
                        className='link'
                        style={({ isActive }) => ({
                            color: isActive
                                ? "greenyellow"
                                : "white",
                        })}
                        to='/about'
                    >About</NavLink>
                    <NavLink
                        className='link'
                        style={({ isActive }) => ({
                            color: isActive
                                ? "greenyellow"
                                : "white",
                        })}
                        to='/menu'>Menu</NavLink>
                    <NavLink
                        className='link'
                        style={({ isActive }) => ({
                            color: isActive
                                ? "greenyellow"
                                : "white",
                        })}
                        to='/booktable'>Book Table</NavLink>
                </div>
                <div className={ismobile ? 'mobileReacticons' : "reacticons"}>
                    <FaUser className='ricons' />
                    <FaShoppingCart className='ricons' />
                    <FaSearch className='ricons' />
                </div>
                <button className='order-button'>Order Online</button>
            </div>
            <div className="mobilemenu" onClick={() => setIsMobile(!ismobile)}>
                {ismobile ? <FaRegWindowClose /> : <GiHamburgerMenu />}
            </div>


        </div>
    )
}

export default Navbar
