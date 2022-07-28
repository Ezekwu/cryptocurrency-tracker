import { createContext, useReducer } from "react";
import CryptoReducer from "./CryptoReducer";

const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {

    const initialState ={
        coins: [],
        loading: false,
        globalStats: [],
        cryptoDetails: {},
        coinHistory: [],
        coinMarkets :[],
        
    }
    const [state, dispatch] = useReducer(CryptoReducer, initialState)

    const CRYPTO_URL = 'https://coinranking1.p.rapidapi.com'

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6f25902dd2msh495cf2a5a25eab9p18d85bjsndadfd43ccfc4',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };

    
    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING',
        })
    }
    //Get general crypto data from api
    const fetchCryptosData = async (count) => {
        setLoading()
        
        const response = await fetch(`${CRYPTO_URL}/coins?limit=${count}`, options)
        
        const data = await response.json();
        //getting coins and statistics from API
        const coins = data.data.coins
        const stats = data.data.stats

        dispatch({
            type: 'GET_COINS',
            payload: coins
        })

        dispatch({
            type: 'GET_STATS',
            payload: stats
        })
    }
    
    const fetchCoinDetails = async (coinId) => {
        setLoading()
        const response = await fetch(`${CRYPTO_URL}/coin/${coinId}`, options)
        const data = await response.json()
        const coinDetails = data.data.coin
        
        dispatch({
            type: 'GET_COIN_DETAILS',
            payload: coinDetails
        })
    }
    
    const fetchCoinPriceHistory = async (coinId, timePeriod) => {
        // setLoading()
        const response = await fetch(`${CRYPTO_URL}/coin/${coinId}/history?timePeriod=${timePeriod}`, options)
        const data = await response.json()
        const coinHistory = data?.data?.history
        
        dispatch({
            type: 'GET_COIN_HISTORY',
            payload: coinHistory
        })
    }

    const fetchCoinMarkets = async (coinId) => {
        // setLoading()
        const response = await fetch(`${CRYPTO_URL}/coin/${coinId}/markets?limit=100`, options)
        const data = await response.json()
        const coinMarkets = data.data.markets
        

        dispatch({
            type: 'GET_COIN_MARKETS',
            payload: coinMarkets
        })
    }

    
    
    
    
    return (
        <CryptoContext.Provider value={{
            ...state,
            fetchCryptosData,
            fetchCoinDetails,
            fetchCoinMarkets,
            fetchCoinPriceHistory
        }}>
            {children}
        </CryptoContext.Provider>
    )
}

export default CryptoContext