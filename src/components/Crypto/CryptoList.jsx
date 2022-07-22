import React from 'react'
import NumberFormat from 'react-number-format'
import Chart from 'react-apexcharts'
const CryptoList = ({ coin }) => {
    
    

    return (
        <tr key={coin.uuid}>
            <td>{coin.rank}</td>
            <td>
                <div className='crypto-icon-name'>
                    <img src={coin.iconUrl} alt="crypto icon" /> <h3>{coin.name}</h3>  <h3>({coin.symbol})</h3>
                </div>
            </td>
            <td>  <NumberFormat 
            displayType={'text'} 
            thousandSeparator={true}
            value={coin.price}
            prefix={'$'}/> </td>
            
            <td>{coin.change.includes('-') ? <div className=' price-change-container down'> <i class="fa-solid fa-chevron-down"></i> {coin.change} </div> :  <div className=' price-change-container up'> <i class="fa-solid fa-chevron-up"></i> {coin.change} </div>}  </td>
            
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
                        
                        
                    }
                }}>

                </Chart>
            </td>
        </tr>
    )
}

export default CryptoList