import React from 'react'
import { StyledGlobalStats } from '../components/Styles/GlobalStats.Styled'
import { useContext, useEffect } from 'react'
import NumberFormat from 'react-number-format'
import { Link } from 'react-router-dom'


import { StyledTable } from '../components/Styles/Table.Styled'
import { StyledHome } from '../components/Styles/Home.Styled'
import CryptoContext from '../context/Crypto/CryptoContext'
import CryptoList from '../components/Crypto/CryptoList'

const Home = () => {
    const { fetchCryptosData, coins, globalStats, loading } = useContext(CryptoContext)
    useEffect(()=>{

        fetchCryptosData(10);

    },[])
    
    const {
        totalCoins,
        totalExchanges,
        totalMarketCap,
        total24hVolume,
    } = globalStats

    return (
        <StyledHome>
            <StyledGlobalStats>
                <div>
                    <h4>Cryptos: <span> <NumberFormat 
                    displayType={'text'} 
                    thousandSeparator={true}
                    value={totalCoins}/> </span> 
                    
                    </h4>
                </div>
                
                <div>
                    <h4>Exchanges: <span>{totalExchanges}</span></h4>
                </div>
                

                <div>
                    <h4>Market Cap: <span> <NumberFormat 
                    displayType={'text'} 
                    thousandSeparator={true}
                    value={totalMarketCap}
                    prefix={'$'}/> </span> 
                    
                    </h4>
                </div>

                <div>
                    <h4>24h Vol: <span> <NumberFormat 
                    displayType={'text'} 
                    thousandSeparator={true}
                    value={total24hVolume}
                    prefix={'$'}/> </span> 
                    
                    </h4>
                </div>
            </StyledGlobalStats>
            <div className='header-container'>
                {loading ? <h2>loading...</h2> : <>
                                                    <h2>Top 10  Crypto Currency Prices According To Market Cap</h2>
                                                    <div className="link-container">
                                                        <Link to='/cryptocurencies'>See More</Link>
                                                        <i className="fa-solid fa-arrow-right"></i>
                                                    </div> 
                                                </>}
            </div>
            {
                loading? <h2>loading...</h2> : <StyledTable >
                <div>
                    <table>
                        
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>%24h</th>
                                <th>Market Cap</th>
                                <th>24hr Volume</th>
                                <th>last 1 day</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {coins.map((coin)=>(
                                <CryptoList coin={coin}  key={coin.uuid}/>
                            ))}
                        </tbody>
                    </table>
                </div>
            </StyledTable>
            }
            
        </StyledHome>
    )
}

export default Home