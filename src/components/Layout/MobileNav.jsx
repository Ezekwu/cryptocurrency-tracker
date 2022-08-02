import React from 'react'
import logo from '../../Assets/logo.png'
import { NavLink } from 'react-router-dom'
import { StyledMobileNav } from '../Styles/MobileNav.styled'
import { useState } from 'react'

const MobileNav = ({ toggleTheme, lightMode }) => {
    const [showMenu, setShowMenu] = useState(false)
    
    const toggleMenu = () => {
        setShowMenu(prevState => !prevState)
    }

    const closeMenu = () => {
        setShowMenu(false)
    }
    return (
        <StyledMobileNav className='mobile-nav'>
            <div className={ `overLay ${showMenu ? 'display' : 'hide'}` }>
                
            </div>
            <NavLink to='/' >
                <div className='logo-container'>
                    <img src={logo} alt="" />
                    <h2>Coin<span>Track</span></h2>
                </div>
            </NavLink>

            <div className={`nav-links ${showMenu ? 'show-menu' : 'hide-menu'}`}>
            <i className={`fa-solid fa-xmark ${showMenu ? 'display' : 'hide'}`} onClick={closeMenu}></i>
                <NavLink to='/' onClick={closeMenu}>
                    <i className="fa-solid fa-house-chimney"></i>
                    Home
                </NavLink>

                <NavLink to='/cryptocurencies' onClick={closeMenu}>
                    <i className="fa-solid fa-coins"></i>
                    Cryptocurrencies
                </NavLink>
                <NavLink to='/exchanges' onClick={closeMenu}>
                    <i className="fa-solid fa-right-left"></i>
                    Exchanges
                </NavLink>
                <NavLink to='/news' onClick={closeMenu}>
                    <i className="fa-solid fa-newspaper"></i>
                    News
                </NavLink>

                <div className='theme-wrapper'>
                <div className='theme-icons-container' onClick={toggleTheme}>
                    {lightMode ? <i className="fa-regular fa-moon"></i> :<i className="fa-regular fa-sun"></i>}
                </div>
            </div>
            </div>

            <i className="fa-solid fa-bars-staggered" onClick={toggleMenu}></i>


            
        </StyledMobileNav>
    )
}

export default MobileNav