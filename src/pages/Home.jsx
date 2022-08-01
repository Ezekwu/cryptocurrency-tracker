import React from 'react'
import { StyledGlobalStats } from '../components/Styles/GlobalStats.Styled'
import { useContext, useEffect } from 'react'
import NumberFormat from 'react-number-format'
import { Link } from 'react-router-dom'

import { StyledTable } from '../components/Styles/Table.Styled'
import { StyledHome } from '../components/Styles/Home.Styled'
import CryptoContext from '../context/Crypto/CryptoContext'
import CryptoList from '../components/Crypto/CryptoList'
import NewsContext from '../context/News/NewsContext'
import NewsList from '../components/News/NewsList'
import Loader from '../components/Layout/Loader'


const Home = () => {
    const { fetchCryptosData, coins, globalStats, loading } = useContext(CryptoContext)
    const { fetchNews, News } = useContext(NewsContext)

    useEffect(()=>{
        fetchNews('cryptocurrency', 6)
        fetchCryptosData(10);

    },[])
    
    const {
        totalCoins,
        totalExchanges,
        totalMarketCap,
        total24hVolume,
    } = globalStats

    return (
        loading ? <Loader /> : <StyledHome>
        <StyledGlobalStats>
            <div>
                <h4>Cryptos:</h4>
                <span> <NumberFormat 
                displayType={'text'} 
                thousandSeparator={true}
                value={totalCoins}/> </span> 
                
                
            </div>
            
            <div>
                <h4>Exchanges:</h4>
                <span>{totalExchanges}</span>
            </div>
            

            <div>
                <h4>Market Cap:</h4>
                <span> <NumberFormat 
                displayType={'text'} 
                thousandSeparator={true}
                value={totalMarketCap}
                prefix={'$'}/> </span> 
                
            </div>

            <div>
                <h4>24h Vol:</h4>
                <span> <NumberFormat 
                displayType={'text'} 
                thousandSeparator={true}
                value={total24hVolume}
                prefix={'$'}/> </span> 
            </div>
        </StyledGlobalStats>
        <div className='header-container'>
            <>
                                                <h2>Top 10  Crypto Currency Prices According To Market Cap</h2>
                                                
                                                <div className="link-container">
                                                    <Link to='/cryptocurencies'>See More</Link>
                                                    <i className="fa-solid fa-arrow-right"></i>

                                                </div> 
                                            </>
        </div>
        
        <StyledTable >
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
        
        <div className='news-section'>
        <div className='header-container'>
            
            <h2>Top Cryptocurrency News</h2>
            
            <div className="link-container">
                <Link to='/news'>See More</Link>
                <i className="fa-solid fa-arrow-right"></i>

            </div> 
            
        </div>
            <div className='news-grid'>
                {News.map((news) =>(
                    <NewsList key={news.name} news={news} />
                ))}
            </div>
        </div>
    </StyledHome>
    )
}

export default Home