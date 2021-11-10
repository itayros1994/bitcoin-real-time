import axios from 'axios'

export const bitcoinService = {
getPriceBy
    
}

function getPriceBy(timeType, aggregate) {
    return axios.get(`https://www.fxempire.com/api/v1/en/crypto-coin/chart/candles/${timeType}?aggregate=${aggregate}&e=CCCAGG&fsym=BTC&tsym=usd&limit=30`).then(res => res.data)
    // return Promise.reject
}
