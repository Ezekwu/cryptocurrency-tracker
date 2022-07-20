import React from 'react'
import { StyledNavbar } from '../Styles/Navbar.Styled'
import logo from '../../Assets/logo.png'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        
        <StyledNavbar>
            <div className='logo-container'>
                <img src={logo} alt="" />
                <h2>Coin<span>Track</span></h2>
            </div>
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
        </StyledNavbar>
    )
}

export default Navbar