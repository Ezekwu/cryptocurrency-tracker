import React from 'react'
import { StyledNavbar } from '../Styles/Navbar.Styled'
import logo from '../../Assets/logo.png'
import { NavLink } from 'react-router-dom'


const Navbar = ({ toggleTheme }) => {
    return (
        
        <StyledNavbar>
            <NavLink to='/'>
                <div className='logo-container'>
                    <img src={logo} alt="" />
                    <h2>Coin<span>Track</span></h2>
                </div>
            </NavLink>
            <div className="nav-links">
                <NavLink to='/'>
                    <i className="fa-solid fa-house-chimney"></i>
                    Home
                </NavLink>

                <NavLink to='/cryptocurencies'>
                    <i className="fa-solid fa-coins"></i>
                    Cryptocurrencies
                </NavLink>
                <NavLink to='/exchanges'>
                    <i className="fa-solid fa-right-left"></i>
                    Exchanges
                </NavLink>
                <NavLink to='/news'>
                    <i className="fa-solid fa-newspaper"></i>
                    News
                </NavLink>
            </div>
            <div className='theme-wrapper'>
                <p>Theme</p>
                <div className='theme-icons-container'>
                    <i className="fa-regular fa-sun"></i>
                    <input type="checkbox" id="switch" onClick={toggleTheme}/>
                    <label htmlFor="switch">Toggle</label>
                    <i className="fa-regular fa-moon"></i>
                </div>
            </div>
        </StyledNavbar>
    )
}

export default Navbar