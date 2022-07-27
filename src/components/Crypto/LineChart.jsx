import React from 'react'
import { useContext, useEffect, useState } from 'react'
import CryptoContext from '../../context/Crypto/CryptoContext'
import NumberFormat from 'react-number-format'
import Chart from 'react-apexcharts'

const LineChart = ({ coinId, timeStamp }) => {
    const { fetchCoinPriceHistory, coinHistory } = useContext(CryptoContext);
    const newCoinHistory = [...coinHistory];
    
    
    
    
    const coinPrices = newCoinHistory.map((history) => {
        return history.price
    })
    

    
    
    // const coinPrices = []
    // const coinTimeStamp = []
    // for (let index = 0; index < coinHistory?.length; index++) {
    //     coinPrices.push(coinHistory[index]?.price)
    //     coinTimeStamp.push(coinHistory[index]?.timestamp)
    // }

    
    // coinHistory.forEach((history)=>{
    //     coinPrices.push(history?.price)
    //     coinTimeStamp.push(history?.timestamp)
    // })

    
    
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
                        data:[...coinPrices.reverse()],
                        
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
                            
                            fontWeight: 400,
                            
                        },
                    },
                    
                },
                
                


                
            }}
            >

            </Chart>
        </div>
    )
}

export default LineChart