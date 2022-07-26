import React from 'react'
import { useContext, useEffect, useState } from 'react'
import CryptoContext from '../../context/Crypto/CryptoContext'
import NumberFormat from 'react-number-format'
import Chart from 'react-apexcharts'
const LineChart = ({ coinId }) => {
    const { fetchCoinPriceHistory, coinHistory } = useContext(CryptoContext);
    const newCoinHistory = [...coinHistory];
    
    
    const time = ['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y']

    
    const coinPrices = newCoinHistory.map((history) => {
        return history.price
    })
    

    const coinTimeStamp = newCoinHistory.map((history) => {
        return history.timestamp
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
        fetchCoinPriceHistory(coinId, '24h')
    },[])

    return (
        <div>
            hello
            <Chart
            type='area'
            series={
                [
                    {
                        data:[...coinPrices.reverse()]
                    }
                ]
            }
            options={{
                colors:['rgba(23, 136, 229, 0.493)'],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    
                }
            }}
            >

            </Chart>
        </div>
    )
}

export default LineChart