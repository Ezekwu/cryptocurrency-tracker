import { createContext, useReducer, useEffect } from "react";
import ExchangeReducer from "./ExchangesReducer";
const ExchangesContext = createContext();
export const  ExchangesProvider = ({ children }) => {
    const exchanges =  {
        loading: false,
        exchanges: []
    }

    const [state, dispatch] =useReducer(ExchangeReducer, exchanges)

    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING',
        })
    }

    const fetchExchanges = async () => {
        setLoading()
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6f25902dd2msh495cf2a5a25eab9p18d85bjsndadfd43ccfc4',
                'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
            }
        };
        const response = await fetch('https://coingecko.p.rapidapi.com/exchanges', options)
        const data = await response.json()
        
        dispatch({
            type: 'GET_EXCHANGES',
            payload: data
        })
        
    }

    
    

    
    return (
        <ExchangesContext.Provider value={{
            ...state,
            fetchExchanges
        }}>
            {children}
        </ExchangesContext.Provider>
    )
}

export default ExchangesContext