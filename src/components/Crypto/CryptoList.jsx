import React from 'react'
import NumberFormat from 'react-number-format'
import Chart from 'react-apexcharts'
import { Link } from 'react-router-dom'

const CryptoList = ({ coin }) => {
    
    

    return (
            
            <tr key={coin.uuid}>
                <td>{coin.rank}</td>
                <td>
                <Link to={`/coin/${coin.uuid}`}>
                    <div className='crypto-icon-name'>
                        <img src={coin.iconUrl} alt="crypto icon" /> <h3>{coin.name}   ({coin.symbol})</h3>  
                    </div>
                </Link>
                </td>
                <td>  <NumberFormat 
                displayType={'text'} 
                thousandSeparator={true}
                value={coin.price}
                prefix={'$'}/> </td>
                
                <td>{coin.change.includes('-') ? <div className=' price-change-container down'> <i className="fa-solid fa-arrow-trend-down"></i> {coin.change} </div> :  <div className=' price-change-container up'> <i className="fa-solid fa-arrow-trend-up"></i> {coin.change} </div>}  </td>
                
                <td> <NumberFormat 
                displayType={'text'} 
                thousandSeparator={true}
                value={coin.marketCap}
                prefix={'$'}/> </td>

                <td> <NumberFormat 
                displayType={'text'} 
                thousandSeparator={true}
                value={coin['24hVolume']}
                prefix={'$'}/> </td>
                <td>
                    <Chart
                    type='area'
                    width={120}
                    height={30}
                    
                    series={
                        [
                            {
                                data:[...coin.sparkline]
                            }
                        ]
                    }
                    options={{
                        colors: [coin.change.includes('-') ? '#ff3e3e' : '#38cc58'],
                        
                        chart:{
                            
                            toolbar: {
                                show: false
                            },
                            sparkline: {
                                enabled: true,
                            },
                            dataLabels: {
                                enabled:false
                            },
                            tooltip: {
                                enabled: false,
                            }
                            
                            
                        },
                        stroke: {
                            show: true,
                            width: 1,
                            
                        }
                    }}>

                    </Chart>
                </td>
            </tr>
        
    )
}

export default CryptoList