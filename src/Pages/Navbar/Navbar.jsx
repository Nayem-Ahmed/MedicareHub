import React from 'react';
import logo from '../../assets/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css'
import { Link, NavLink } from 'react-router-dom';
import Button from '../../Components/Button/Button';

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className='nav-bar'>
                    <li className='logo'><Link to={`/`}><img src={logo} /></Link></li>
                    <input type='checkbox' id='check' />
                    <span className="menu">
                        <li><NavLink to={`/`}>Home</NavLink></li>
                        <li><NavLink to={`/pages`}>Pages</NavLink></li>
                        <li><NavLink to={`/about`}>About</NavLink></li>
                        <li><NavLink to={`/services`}>Services</NavLink></li>
                        <li><NavLink to={`/doctor`}>Doctor</NavLink></li>
                        <li><NavLink to={`/contact`}>Contact</NavLink></li>
                        <label htmlFor="check" className="close-menu"><FaTimes/></label>
                    </span>
                    <label htmlFor="check" className="open-menu"><FaBars/></label>
                    <Link><Button>Contact Us</Button></Link>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;