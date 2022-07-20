import React from 'react'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import CryptoContext from '../context/Crypto/CryptoContext'
const Cryptocurrencies = () => {
    const { fetchCryptosData, coins } = useContext(CryptoContext)
    useEffect(()=>{

        fetchCryptosData();

    },[])

    return (
        <div>
            {coins.map((coin)=>(
                <div>
                    <h2>{coin.name}</h2>
                    <img src={coin.iconUrl} alt="" width={'20px'}/>
                </div>
            ))}
        </div>
        
    )
}

export default Cryptocurrencies