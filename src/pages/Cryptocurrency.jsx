import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { StyledCryptoDetails } from '../components/Styles/CryptoDetails.Styled'
import NumberFormat from 'react-number-format'
import DOMPurify from 'dompurify';

import CryptoContext from '../context/Crypto/CryptoContext'
import LineChart from '../components/Crypto/LineChart'
import Markets from '../components/Crypto/Markets'
import Loader from '../components/Layout/Loader'

const Cryptocurrency = () => {
    const {coinId} = useParams()
    
    const[timeStamp, setTimeStamp] = useState('24h')
    
    let items = Array.from(document.getElementsByClassName('item'))
    
    //set time stamp for chart
    const setTime = (e) => {
        for(let index = 0; index < items.length; index++) {
            const item = items[index]
            item.classList.remove('active')
        }
        e.target.setAttribute('aria-selected', true)
        e.target.classList.add('active')
        setTimeStamp( e.target.innerText)
        
    }
    
    const {
        fetchCoinDetails, 
        cryptoDetails,
        loading
    } = useContext(CryptoContext)

    
    
    const {
        symbol,
        name,
        description,
        iconUrl,
        links,
        supply,
        marketCap,
        price,
        change,
        rank,
        allTimeHigh,
        
        
    } = cryptoDetails
    
    const pureDescription = DOMPurify.sanitize(description)
    useEffect(()=>{
        fetchCoinDetails(coinId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])
    
    
        return (
            loading ? <Loader /> : 
            <StyledCryptoDetails>
                <div className="row-1">
                    <div className="col-1">
                        <div className="rank">
                            Rank #{rank}
                        </div>
                        <div className='icon-name-container'>
                            <img src={iconUrl} alt="crypto icon" 
                            />
                            <h2>{name}</h2>
                            <div>{symbol}</div>
                        </div>
                        
                        <div className="links">
                            {
                                links &&  links.map((link)=> (
                                    link.type === "website" ? <a key={link.name} href={link.url} target='_blank' rel="noreferrer">
                                    <p>{link.name}</p>
                                    <i className="fa-solid fa-link"></i>
                            </a>: ''
                                ))
                            }

                            {
                                links &&  links.map((link)=> (
                                    link.type === "facebook" ? <a key={link.name} href={link.url} target='_blank' rel="noreferrer">
                                    <p>{link.name}</p>
                                    <i className="fa-brands fa-facebook-f"></i>
                            </a>: ''
                                ))
                            }

                            {
                                links &&  links.map((link)=> (
                                    link.type === "github" ? <a key={link.name} href={link.url} target='_blank' rel="noreferrer">
                                    <p>{link.name}</p>
                                    <i className="fa-brands fa-github"></i>
                            </a>: ''
                                ))
                            }
                            {
                                links &&  links.map((link)=> (
                                    link.type === "reddit" ? <a key={link.name} href={link.url} target='_blank' rel="noreferrer">
                                    <p>{link.name}</p>
                                    <i className="fa-brands fa-reddit-alien"></i>
                            </a>: ''
                                ))
                            }

                            {
                                links &&  links.map((link)=> (
                                    link.type === "twitter" ? <a key={link.name} href={link.url} target='_blank' rel="noreferrer">
                                    <p>{link.name}</p>
                                    <i className="fa-brands fa-twitter"></i>
                            </a>: ''
                                ))
                                
                            }
                            {
                                links &&  links.map((link)=> (
                                    link.type === "discord" ? <a key={link.name} href={link.url} target='_blank' rel="noreferrer">
                                    <p>{link.name}</p>
                                    <i className="fa-brands fa-discord"></i>
                            </a>: ''
                                ))
                                
                            }

                            {
                                links &&  links.map((link)=> (
                                    link.type === "youtube" ? <a key={link.name} href={link.url} target='_blank' rel="noreferrer">
                                    <p>{link.name}</p>
                                    <i className="fa-brands fa-youtube"></i>
                            </a>: ''
                                ))
                                
                            }
                        </div>
                    </div>
        
                    <div className="col-2">
                        <h3 className='symbol' >{symbol &&  symbol} Price</h3>
                        <div className="price-price_change-container">
                            <h2 className='price'>${price}</h2>

                            {change && change.includes('-') ?
                                <h3 className=' down'><i className="fa-solid fa-sort-down"></i> {change}%</h3>
                            : 
                                <h3 className=' up'><i className="fa-solid fa-sort-up"></i> {change}%</h3>
                            }
                            
                        </div>
                        
                    </div>
                </div>
                <div className="row-2">
                    <div className='chart-heading'>
                        <h3>{name} Price  Chart</h3>
                        <ul>
                            <li className='item' onClick={setTime}>3h</li>
                            <li className='active item' onClick={setTime}>24h</li>
                            <li  className='item' onClick={setTime}>30d</li>
                            <li  className='item' onClick={setTime}>3m</li>
                            <li  className='item' onClick={setTime}>1y</li>
                            <li  className='item' onClick={setTime}>3y</li>
                            <li  className='item' onClick={setTime}>5y</li>
                        </ul>
                    </div>
                    <LineChart coinId={coinId} timeStamp={timeStamp}/>
                    <div className="details-description">
                        <div className="description">
                            <h3>What is {name}?</h3>
                            <div dangerouslySetInnerHTML={{ __html: pureDescription }} />
                        </div>
                        <div className="crypto-details">
                            <h3>{name} Price Statistics</h3>
                            <p>{name} Price Today</p>

                            <div className="stat">
                                <p className="tag">
                                    {name} Price
                                </p>
                                <p className='value'>
                                        <NumberFormat 
                                        displayType={'text'} 
                                        thousandSeparator={true}
                                        value={price}
                                        prefix={'$'}/>   
                                </p>
                            </div>

                            <div className="stat">
                                <p className="tag">
                                    Price Change 
                                </p>
                                <div className='value price-change'>
                                    
                                    {change && change.includes('-') ?
                                <h3 className=' price-down'><i className="fa-solid fa-sort-down"></i> {change}%</h3>
                                : <h3 className=' price-up'><i className="fa-solid fa-sort-up"></i> {change}%</h3>
                            }
                                </div>
                                
                            </div>

                            <div className="stat">
                                <p className="tag">
                                    Market Cap
                                </p>
                                <p className='value'>
                                <NumberFormat 
                                        displayType={'text'} 
                                        thousandSeparator={true}
                                        value={marketCap}
                                        prefix={'$'}/>
                                    
                                </p>
                            </div>

                            <div className="stat">
                                <p className="tag">
                                    Market Cap Rank
                                </p>
                                <p className='value'>
                                    #{rank}
                                </p>
                            </div>

                            <div className="stat">
                                <p className="tag">
                                    Circulating Supply
                                </p>
                                <p className='value'>
                                <NumberFormat 
                                        displayType={'text'} 
                                        thousandSeparator={true}
                                        value={supply?.circulating}
                                        />
                                    
                                </p>
                            </div>

                            <div className="stat">
                                <p className="tag">
                                    Total Supply
                                </p>
                                <p className='value'>
                                <NumberFormat 
                                        displayType={'text'} 
                                        thousandSeparator={true}
                                        value={supply?.total}
                                        />
                                </p>
                            </div>

                            <div className="stat">
                                <p className="tag">
                                    24hr Volume
                                </p>
                                <p className='value'>
                                <NumberFormat 
                                        displayType={'text'} 
                                        thousandSeparator={true}
                                        value={cryptoDetails['24hVolume']}
                                        prefix={'$'}/>
                                </p>
                            </div>

                            <div className="stat">
                                <p className="tag">
                                    ATH
                                </p>
                                
                                    
                                    <p className='value'> <NumberFormat 
                                        displayType={'text'} 
                                        thousandSeparator={true}
                                        value={allTimeHigh?.price}
                                        prefix={'$'}/>  </p>
                                    
                                
                            </div>

                            
                        </div>
                    </div>
                </div>
                <div className="row-3">
                    <h2>{name} Markets</h2>
                    <Markets  loading={loading} coinId={coinId}/>
                </div>
                <div className='news-grid row-4'>
                    
                </div>
            </StyledCryptoDetails>
        )
    }
    
    


export default Cryptocurrency