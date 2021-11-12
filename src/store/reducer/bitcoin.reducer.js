const initialState = {
    coinType : 'btc',
    currCoinImg : 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'
  
}

export function bitcoinReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_COIN_TYPE':
            return { ...state, coinType: action.coinType }
        case 'SET_COIN_IMG':
            return { ...state, currCoinImg: action.imgUrl }

        default:
            return state
    }
}