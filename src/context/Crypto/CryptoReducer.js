const CryptoReducer = (state, action) => {
    switch (action.type) {
        case('GET_COINS'):
            return{
                ...state,
                coins: action.payload,
                loading: false
            }
        case('GET_STATS'):
            return{
                ...state,
                globalStats: action.payload
                
            }

        case('GET_COIN_HISTORY'):
            return{
                ...state,
                coinHistory: action.payload,
                // loading: false
            }

        case('GET_COIN_DETAILS'):
            return{
                ...state,
                cryptoDetails: action.payload,
                loading: false
            }

        case('GET_COIN_MARKETS'):
            return{
                ...state,
                coinMarkets: action.payload,
                // loading: false
            }
        case('GET_EXCHANGES'):
            return{
                ...state,
                exchanges: action.payload,
                loading: false
            }

        case('SET_LOADING'):
            return{
                ...state,
                loading: true
            }
        default:
            return state
    }
}

export default CryptoReducer