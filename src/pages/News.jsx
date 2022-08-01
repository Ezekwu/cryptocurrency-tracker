import React from 'react'
import { useContext, useEffect, useState } from 'react'
import NewsContext from '../context/News/NewsContext'
import CryptoContext from '../context/Crypto/CryptoContext'
import NewsList from '../components/News/NewsList'
import { StyledNews } from '../components/Styles/NewsStyled'
import Loader from '../components/Layout/Loader'

const News = () => {
    const { fetchNews, News, loading } = useContext(NewsContext)
    const {coins, fetchCryptosData} = useContext(CryptoContext)

    const [category, setCategory] = useState('cryptocurrency')

    useEffect(() => {
        fetchCryptosData(100)
        fetchNews(category, 10)
    }, [category])

    return (
        loading ? <Loader /> :

        <StyledNews>
            <h2>Search News Related <br /> To A Particular CryptoCurrency</h2>

            <select  
            id="news category"
            value={category}
            onChange={(e)=> setCategory(e.target.value)}>
                <option value="cryptocurrency">cryptocurrency</option>
                {coins.map((coin)=>(
                    
                    <option key={coin.uuid} value={coin.name}>{coin.name}</option>
                ))}
            </select>
            
            <div className='news-grid'>
                {News.map((news) =>(
                    <NewsList news={news} key={news.name}/>
                ))}
            </div>
        </StyledNews>
        )
}

export default News