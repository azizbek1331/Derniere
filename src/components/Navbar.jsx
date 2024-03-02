import React from 'react'
import { Link } from 'react-scroll'
import Logo from '../images/1.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav-bar'>
            <div>
            <nav>
                <Link to='showcase-section' className="logo" smooth={true} duration={2000}>
                    <img src={Logo} alt="logo" />
                </Link>
                <input type="checkbox" className="menu-btn" id="menu-btn" />
                <label htmlFor="menu-btn" className="menu-icon">
                    <span className="nav-icon"></span>
                </label>
                <ul className="menu">
                    <li><Link to='about' className='active' smooth={true} duration={2000}>Biz haqimizda</Link></li>
                    <li><Link to='reclaim' smooth={true} duration={2000}>Mahsulot</Link></li>
                    <li><Link to='card-main' smooth={true} duration={2000}>Tarkibi</Link></li>
                    <li><Link to='ondiv-main' smooth={true} duration={2000}>Batafsil</Link></li>
                    <li><Link to='Order' smooth={true} duration={2000}>Buyurtma qilish</Link></li>
                </ul>
            </nav>
        </div>
        </div>
    )
}

export default Navbar
