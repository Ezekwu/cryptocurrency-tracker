import { createContext, useReducer, useEffect } from "react";
import NewsReducer from "./NewsReducer";

const NewsContext = createContext()

export const NewsProvider = ({ children }) => {
    const initialState = {
        loading: false,
        News:[]
    }

    const [state, dispatch] = useReducer(NewsReducer, initialState)
    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING',
        })
    }

    const fetchNews = async ( category , count) => {
        setLoading()
        const options = {
            method: 'GET',
            headers: {
                'X-BingApis-SDK': 'true',
                'X-RapidAPI-Key': '6f25902dd2msh495cf2a5a25eab9p18d85bjsndadfd43ccfc4',
                'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
            }
        };
        
        const response = await fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=${category}&count=${count}&setLang=EN%20(English)&freshness=Day&textFormat=Raw&safeSearch=Off`, options);

        const data = await response.json()
        const newsArray = data.value

        dispatch({
            type:'GET_NEWS',
            payload:newsArray
        })
    }

    
    return(
        <NewsContext.Provider value={{
            ...state,
            fetchNews
        }}>
            { children }
        </NewsContext.Provider>
    )
}

export default NewsContext
