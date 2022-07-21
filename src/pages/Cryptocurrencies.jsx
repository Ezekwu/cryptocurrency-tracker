import React from 'react'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import CryptoContext from '../context/Crypto/CryptoContext'
import NumberFormat from 'react-number-format'

import { StyledGlobalStats } from '../components/Styles/GlobalStats.Styled'
const Cryptocurrencies = () => {
    const { fetchCryptosData, coins, globalStats } = useContext(CryptoContext)
    useEffect(()=>{

        fetchCryptosData();

    },[])
    
    const {
        totalCoins,
        totalExchanges,
        totalMarketCap,
        total24hVolume,
    } = globalStats
    return (
        <>
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
            {coins.map((coin)=>(
                <div>
                    <h2>{coin.name}</h2>
                    <img src={coin.iconUrl} alt="" width={'20px'}/>
                </div>
            ))}
        </>
        
    )
}

export default Cryptocurrencies