export function setCoinType(coinType) {
  return (dispatch) => {
      const action = {
        type: 'SET_COIN_TYPE',
        coinType
      }
      dispatch(action)
  }
}
export function setCoinImg(imgUrl) {
  return (dispatch) => {
      const action = {
        type: 'SET_COIN_IMG',
        imgUrl
      }
      dispatch(action)
  }
}
