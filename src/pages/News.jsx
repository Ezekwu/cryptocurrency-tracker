import React from 'react'
import { useContext, useEffect } from 'react'
import NewsContext from '../context/News/NewsContext'
const News = () => {
    const { fetchNews, News, loading } = useContext(NewsContext)

    useEffect(() => {
        fetchNews()
    }, [])

    return (
        <div>
            {News.map((news) =>(
                <div>
                    <img src={news?.image?.thumbnail?.contentUrl} alt="" width={'100px'}/>
                    <p>{news.name}</p>
                </div>
            ))}
        </div>
        


    )
}

export default News