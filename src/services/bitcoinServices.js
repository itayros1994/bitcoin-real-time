import axios from 'axios'

export const bitcoinService = {
    getPriceBy
}

function getPriceBy(timeType, aggregate, coinType) {
    return axios.get(`https://www.fxempire.com/api/v1/en/crypto-coin/chart/candles/${timeType}?aggregate=${aggregate}&e=CCCAGG&fsym=${coinType}&tsym=usd&limit=30`)
        .then(res => res.data)
        .catch(err => console.log(err))
}
