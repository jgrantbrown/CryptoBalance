// NEed to construct global state so there are  portfolios with many holdings and a name

const initialState = {
  portfolios: [],
}

export default function manageCrypto(state = initialState, action){

  switch(action.type){
    case "ADD_HOLDING":
      console.log("Add Holding payload", action.payload)
      return {...state, portfolios: [ action.payload]}

    case "ADD_PORTFOLIO":
        console.log("Spread state adding portfolio",[...state.portfolios, action.payload])
        return {...state, portfolios: [...state.portfolios, action.payload]}

    // case 'SEE_HOLDINGS':
    //     console.log("ACTION PAYLOAD FOR GETHOLDINGS:", action.payload)
    //     debugger
    //     return {...state, portfolios: [state.portfolios.holdings, action.payload]}

    default:
      return state
  }
}
