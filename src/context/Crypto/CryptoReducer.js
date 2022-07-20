const CryptoReducer = (state, action) => {
    switch (action.type) {
        case('GET_COINS'):
            return{
                ...state,
                coins: action.payload
            }
        case('GET_STATS'):
            return{
                ...state,
                globalStats: action.payload
            }
        default:
            return state
    }
}

export default CryptoReducer