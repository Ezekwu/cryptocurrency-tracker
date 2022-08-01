import React from 'react'
import { StyledTable } from '../Styles/Table.Styled'
import NumberFormat from 'react-number-format'
import { useState, useEffect, useContext } from 'react'
import CryptoContext from '../../context/Crypto/CryptoContext'

const Markets = ({ loading, coinId }) => {
    const {coinMarkets, fetchCoinMarkets} = useContext(CryptoContext)
    const [simplified, setSimplified] = useState(true);
    const [markets, setMarkets] = useState([...coinMarkets])
    
    useEffect(()=> {
        setMarkets(coinMarkets)
        simplified ? setMarkets(coinMarkets.slice(0, 10)) : setMarkets(coinMarkets)
        
    }, [simplified, coinMarkets])

    useEffect(()=> {
        fetchCoinMarkets(coinId)
        
    },[])

    


    

    const toggleSimplified = () => {
        setSimplified(prevState => !prevState)
        console.log(simplified);
    }
    
    
    return (
        
        loading ? <h2>loading</h2> :

        <StyledTable>
            <table>
                <thead>
                    <tr>
                        <th> Rank</th>
                        <th>Exchange</th>
                        <th>Pair</th>
                        <th>price</th>
                        <th>BTC Price</th>
                        <th>24hr Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {markets.map((market) => (
                        <tr key={market.uuid}>
                            <td>{market.rank}</td>

                            <td className='crypto-icon-name'>
                                <img src={market.exchange?.iconUrl} alt="exchange icon" />
                                <h3>{market.exchange?.name}</h3>
                            </td>

                            <td className='exchange-pair'>
                                {market.base?.symbol}/{market.quote?.symbol}
                            </td>

                            <td>
                            <NumberFormat 
                            displayType={'text'} 
                            thousandSeparator={true}
                            value={market.price}
                            prefix={'$'}/>
                            </td>

                            <td>
                            <NumberFormat 
                            displayType={'text'} 
                            thousandSeparator={true}
                            value={market.btcPrice}
                            prefix={'$'}/>
                            </td>

                            <td>
                            <NumberFormat 
                            displayType={'text'} 
                            thousandSeparator={true}
                            value={market['24hVolume']}
                            prefix={'$'}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className='markets-btn' onClick={toggleSimplified}>{simplified ? 'Show More' : 'Show less'}</button>
        </StyledTable>
    )
}

export default Markets