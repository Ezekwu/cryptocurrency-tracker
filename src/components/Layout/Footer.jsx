import React from 'react'
import logo from '../../Assets/logo.png'
import { NavLink } from 'react-router-dom'
import { StyledFooter } from '../Styles/Footer.Styled'
import CryptoContext from '../../context/Crypto/CryptoContext'
import { useContext } from 'react'


const Footer = () => {
    const date = new Date().getFullYear()

    const {loading} = useContext(CryptoContext)

    return (
        !loading &&   <StyledFooter>
            <div className='col-1'>
            <NavLink to='/'>
                <div className='logo-container'>
                    <img src={logo} alt="" />
                    <h2>Coin<span>Track</span></h2>
                </div>
            </NavLink>
                <div className="footer-links">
                    <div>
                        <NavLink to='/'>
                            Home
                        </NavLink>

                        <NavLink to='/cryptocurencies'>
                            Cryptocurrencies
                        </NavLink>
                        <NavLink to='/exchanges'>
                    
                            Exchanges
                        </NavLink>
                        <NavLink to='/news'>
                            News
                        </NavLink>
                    </div>
                    <p>
                        &copy;{date} CoinTrack Rights Reserved 
                    </p>
                </div>
            </div>
            <div className="col-2">
                <p>Built with react coin-ranking api and binge-news api  </p>
                <div className='socials-links'>
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-solid fa-envelope"></i>
                    <i className="fa-brands fa-reddit-alien"></i>
                    <i className="fa-brands fa-facebook-f"></i>
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer