import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { StyledCryptoDetails } from '../components/Styles/CryptoDetails.Styled'


import CryptoContext from '../context/Crypto/CryptoContext'
const Cryptocurrency = () => {
    const {coinId} = useParams()

    const {fetchCoinDetails, cryptoDetails, loading} = useContext(CryptoContext)

    const {
        symbol,
        name,
        description,
        iconUrl,
        links,
        supply,
        numberOfMarkets,
        numberOfExchanges,
        marketCap,
        price,
        priceAt,
        change,
        rank,
        sparkline,
        allTimeHigh,
        listedAt,
        
    } = cryptoDetails
    
    useEffect(()=>{
        fetchCoinDetails(coinId)
    }, [])
    
    if(loading){
        return (
            <h2>loading...</h2>
        )
    }else{
        return (
            <StyledCryptoDetails>
                <div className="row-1">
                    <div className="col-1">
                        <div className='icon-name-container'>
                            <img src={iconUrl} alt="crypto icon" style={{
                                width: '35px'
                            }}/>
                            <h2>{name}</h2>
                            <div>{symbol}</div>
                        </div>
                        <div className="rank">
                            Rank #{rank}
                        </div>
                        <div className="links">
                            {
                                links &&  links.map((link)=> (
                                    link.type =="website" ? <a href={link.url} target='_blank' rel="noreferrer">
                                    <p>{link.name}</p>
                                    <i className="fa-solid fa-link"></i>
                            </a>: ''
                                ))
                            }

                            {
                                links &&  links.map((link)=> (
                                    link.type =="facebook" ? <a href={link.url} target='_blank' rel="noreferrer">
                                    <p>{link.name}</p>
                                    <i className="fa-brands fa-facebook-f"></i>
                            </a>: ''
                                ))
                            }

                            {
                                links &&  links.map((link)=> (
                                    link.type =="github" ? <a href={link.url} target='_blank' rel="noreferrer">
                                    <p>{link.name}</p>
                                    <i className="fa-brands fa-github"></i>
                            </a>: ''
                                ))
                            }
                            {
                                links &&  links.map((link)=> (
                                    link.type =="reddit" ? <a href={link.url} target='_blank' rel="noreferrer">
                                    <p>{link.name}</p>
                                    <i className="fa-brands fa-reddit-alien"></i>
                            </a>: ''
                                ))
                            }

                            {
                                links &&  links.map((link)=> (
                                    link.type =="twitter" ? <a href={link.url} target='_blank' rel="noreferrer">
                                    <p>{link.name}</p>
                                    <i className="fa-brands fa-twitter"></i>
                            </a>: ''
                                ))
                                
                            }
                            {
                                links &&  links.map((link)=> (
                                    link.type =="discord" ? <a href={link.url} target='_blank' rel="noreferrer">
                                    <p>{link.name}</p>
                                    <i className="fa-brands fa-discord"></i>
                            </a>: ''
                                ))
                                
                            }

                            {
                                links &&  links.map((link)=> (
                                    link.type =="youtube" ? <a href={link.url} target='_blank' rel="noreferrer">
                                    <p>{link.name}</p>
                                    <i className="fa-brands fa-youtube"></i>
                            </a>: ''
                                ))
                                
                            }
                        </div>
                    </div>
        
                    <div className="col-2">
                        <h3>{symbol} Price</h3>
                        <div className="price-price_change-container">
                            <h2 className='price'>{price}</h2>

                            {change.includes('-') ? <div className='price-change down'>
                                <h3>{change}</h3>
                            </div> : <div className='price-change up'>
                                <h3>{change}</h3>
                            </div>}
                            
                        </div>
                    </div>
                </div>
            </StyledCryptoDetails>
        )
    }
    
    
}

export default Cryptocurrency