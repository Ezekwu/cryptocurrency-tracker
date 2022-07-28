const ExchangeReducer = (state, action) =>{
    switch(action.type){
        case('GET_EXCHANGES'): {
            return {
                ...state,
                exchanges: action.payload,
                loading: false
            }
        }
        case('SET_LOADING') : {
            return{
                ...state,
                loading: true
            }
        }
        default:
            return state
    }
}
export default ExchangeReducer