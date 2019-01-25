

//  simply this for one dynamic method?
// const COINS = ["BTC","LTC","ETH"]

// export const getCoin = (COINS) =>{
//
//   COINS.map(coin =>{
//     return dispatch => {fetch(`https://api.coinbase.com/v2/prices/${coin}-USD/spot`)
//     .then(response => response.json())
//     .then(Coindata => dispatch({
//       type: "GET_COIN",
//       payload: BTCdata
//     }))
//   }
//   })
//
// }


export const getBTC = () =>{
  return dispatch => {fetch("https://api.coinbase.com/v2/prices/BTC-USD/spot")
  .then(response => response.json())
  .then(BTCdata => dispatch({
    type: "GET_BTC",
    payload: BTCdata
  }))
}
}

export const getLTC = () =>{
  return dispatch => {fetch("https://api.coinbase.com/v2/prices/LTC-USD/spot")
  .then(response => response.json())
  .then(LTCdata => dispatch({
    type: "GET_LTC",
    payload: LTCdata
  }))
}
}

export const getETH = () =>{
  return dispatch => {fetch("https://api.coinbase.com/v2/prices/ETH-USD/spot")
  .then(response => response.json())
  .then(ETHdata => dispatch({
    type: "GET_ETH",
    payload: ETHdata
  }))
}
}
