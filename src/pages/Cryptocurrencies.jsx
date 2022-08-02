import React from 'react'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import CryptoContext from '../context/Crypto/CryptoContext'

import { StyledTable } from '../components/Styles/Table.Styled'
import CryptoList from '../components/Crypto/CryptoList'
import { StyledCryptos } from '../components/Styles/Cryptocurrencies.Styled'
import Loader from '../components/Layout/Loader'

const Cryptocurrencies = () => {
    const { fetchCryptosData, coins, loading } = useContext(CryptoContext)
    const [coinList, setCoinList] = useState([])
    
    const [searchValue, setSearchValue] = useState('')
    useEffect(()=>{
        fetchCryptosData(100);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    //Search feature
    useEffect(() => {
        const filteredData = coins.filter((coin)=> coin.name.toLowerCase().includes(searchValue.toLowerCase()))
        setCoinList(filteredData)
        
        
    }, [searchValue, coins])
    
    return (
        (loading || coins.length < 1) ? <Loader /> : 
        
        <StyledCryptos>
            <h2>Search for a particular cryptocurrency</h2>
            <div className='input-container'>
                <input type="text" placeholder='search cryptocurrencies'
                value={searchValue}
                onChange={(e)=> setSearchValue(e.target.value)}/>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <StyledTable>
                
                <div className='main-crypto-container'>
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
                                {coinList.map((coin)=>(
                                    <CryptoList coin={coin}  key={coin.uuid}/>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </StyledTable>
    </StyledCryptos>

        
    )
}

export default Cryptocurrencies