// NEed to construct global state so there are  portfolios with many holdings and a name

const initialState = {
  currentPortfolio: [],
  portfolios: [],

}

export default function manageCrypto(state = initialState, action){

  switch(action.type){
    case "ADD_HOLDING":
      console.log("Add Holding payload", action.payload)
      debugger
      return {...state, currentPortfolio: [ action.payload]}

    case "ADD_PORTFOLIO":
        console.log("Spread state adding portfolio",[...state.portfolios, action.payload])
        return {...state, portfolios: [...state.portfolios, action.payload]}

    case 'GET_HOLDINGS':
        console.log("ACTION PAYLOAD FOR GETHOLDINGS:", action.payload)
        return {...state, currentPortfolio: [state.holdings, action.payload.holdings]}

    case 'GET_PORTFOLIOS':
            console.log("ACTION PAYLOAD FOR Portfolios:", action.payload)
            return {...state, portfolios: action.payload}

    default:
      return state
  }
}
