import React from 'react'
import { useContext, useEffect } from 'react'
import CryptoContext from '../../context/Crypto/CryptoContext'
import Chart from 'react-apexcharts'

const LineChart = ({ coinId, timeStamp }) => {
    const { fetchCoinPriceHistory, coinHistory } = useContext(CryptoContext);
    const newCoinHistory = [...coinHistory];
    
    
    
    const coinPrices = newCoinHistory.map((history) => {
        return Number(history.price)
        
    })
    

    const reversedCoinPrices = coinPrices.reverse()
    const fixedPrices = reversedCoinPrices.map((price)=> (
        price.toFixed(7)
    ))
    
    

    
    

    
    
    useEffect(()=>{
        fetchCoinPriceHistory(coinId, timeStamp)
        
    },[timeStamp])

    return (
        <div>
            
            <Chart
            type='line'
            series={
                [
                    {
                        name: 'Price in USD',
                        data:[...fixedPrices],
                        
                    }
                ]
            }
            options={{
                colors:['rgba(23, 136, 229, 0.87)'],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    
                },
                xaxis: {
                    categories: [],
                    labels: {
                        show:false
                    }
                },
                yaxis: {
                    categories: [],
                    labels: {
                        show:true,
                        style: {
                            colors: [],
                            fontSize: '16px',
                            fontWeight: 500,
                            
                        },
                        
                    },
                    
                    
                },
                
                responsive:[{
                    breakpoint: 600,
                    options: {
                        chart: {
                            height: '480px'
                        },
                        yaxis: {
                            categories: [],
                            labels: {
                                
                                style: {
                                    colors: [],
                                    fontSize: '12px',
                                    
                                    fontWeight: 400,
                                    
                                },
                                
                            },
                            
      
                            
                        },
                    }
                }]


                
            }}
            >

            </Chart>
        </div>
    )
}

export default LineChart