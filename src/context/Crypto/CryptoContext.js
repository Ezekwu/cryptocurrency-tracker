import { createContext, useReducer } from "react";
import CryptoReducer from "./CryptoReducer";

const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {

    const initialState ={
        coins: [],
        globalStats: []
    }
    const [state, dispatch] = useReducer(CryptoReducer, initialState)

    //Get general crypto data from api
    const fetchCryptosData = async () => {
        const CRYPTO_URL = 'https://coinranking1.p.rapidapi.com'

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6f25902dd2msh495cf2a5a25eab9p18d85bjsndadfd43ccfc4',
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
        };
        
        const response = await fetch(`${CRYPTO_URL}/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=100&offset=0`, options)
        
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
    
    return (
        <CryptoContext.Provider value={{
            ...state,
            fetchCryptosData
        }}>
            {children}
        </CryptoContext.Provider>
    )
}

export default CryptoContext