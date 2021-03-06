// NEed to construct global state so there are  portfolios with many holdings and a name

const initialState = {
  currentPortfolio: [],
  portfolios: [],
  cryptos:[],
  showholdings: false,
  showform: false,
}

export default function manageCrypto(state = initialState, action){

  switch(action.type){
    case "ADD_HOLDING":
      // console.log("Add Holding payload", action.payload)
      return {...state, currentPortfolio:  action.payload}

    case "ADD_PORTFOLIO":
        // console.log("Spread state adding portfolio",[...state.portfolios, action.payload])
        return {...state, portfolios: [...state.portfolios, action.payload]}

    case 'GET_HOLDINGS':
        console.log("ACTION PAYLOAD FOR GETHOLDINGS:", action.payload)
        return {...state, currentPortfolio: action.payload}

    case 'GET_PORTFOLIOS':
            // console.log("ACTION PAYLOAD FOR Portfolios:", action.payload)
            return {...state, portfolios: action.payload}

    case 'GET_BTC':
            // console.log("ACTION PAYLOAD FOR Get BTC:", action.payload)
            return {...state, cryptos: [...state.cryptos,action.payload.data]}

    case 'GET_LTC':
            // console.log("ACTION PAYLOAD FOR Get LTC:", action.payload)
            return {...state,cryptos: [...state.cryptos,action.payload.data]}

    case 'GET_ETH':
            // console.log("ACTION PAYLOAD FOR Get ETH:", action.payload)
            return {...state, cryptos: [...state.cryptos,action.payload.data]}

    case 'SHOW_HOLDINGS':
                    console.log("ACTION PAYLOAD FOR SHOW_HOLDINGS:", action.payload)
          return {...state, showholdings: true }

    case 'SHOW_FORM':
            console.log("ACTION PAYLOAD FOR SHOW_FORM:", action.payload)
            return {...state, showform: true }


    default:
      return state
  }
}
