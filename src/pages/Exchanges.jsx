import React from 'react'
import ExchangesContext from '../context/Exchanges/ExchangesContext'
import { useContext, useEffect } from 'react'
import { StyledTable } from '../components/Styles/Table.Styled'
import { StyledExchanges } from '../components/Styles/Exchanges.Styled'
import NumberFormat from 'react-number-format'
import Loader from '../components/Layout/Loader'

const Exchanges = () => {
    const {fetchExchanges, exchanges, loading} = useContext(ExchangesContext)
    useEffect(()=>{
        fetchExchanges()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        loading ? <Loader /> :
        <StyledExchanges>
            <h2>Top Cryptocurrency  Exchanges</h2>
            <p>Exchanges are ranked and scored  based on traffic, liquidity, trading volumes, and confidence in the legitimacy of trading volumes reported.</p>
            <StyledTable>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Exchange Score</th>
                            <th>24h Trade Volume(BTC)</th>
                            <th>Country</th>
                            <th>Year Established</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exchanges.map((exchange)=>(
                            <tr key={exchange.id}>
                                <td>{exchange.trust_score_rank}</td>
                                <td>
                                    <a href={exchange.url} target='_blank' rel="noreferrer">
                                        <div className='crypto-icon-name'>
                                        <img src={exchange.image} alt="exchange icon" /> <h3>{exchange.name}   </h3>  
                                        </div>
                                    </a>
                                </td>
                                <td>{exchange.trust_score}</td>
                                <td>
                                    <NumberFormat 
                                    thousandSeparator={true}
                                    displayType={'text'} 
                                    value={exchange.trade_volume_24h_btc}/>
                                </td>
                                <td>
                                    {exchange.country ? exchange.country : '---'}
                                </td>
                                <td>
                                    {exchange.year_established ? exchange.year_established : '---'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                    
            </StyledTable>
        </StyledExchanges>
    )
}

export default Exchanges