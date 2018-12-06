// NEed to construct global state so there are  portfolios with many holdings and a name

const initialState = {
  portfolios: [
    {name: ' First Portfolio hardcode from redux',
    holdings: [
      {
        token:"betacoin",
        amount: 1,
        costbasis: "5",
        wallet: "Betacoinbase",
        portfolioId: ""}
    ]}
  ],

  holding: [
    {
      token:"betacoin",
      amount: 1,
      costbasis: "5",
      wallet: "Betacoinbase",
      portfolioId: ""}
  ],
}

export default function manageCrypto(state = initialState, action){

  switch(action.type){
    case "ADD_HOLDING":
      console.log("Spread state",[...state.holding, action.payload])
      return {...state, holding: [...state.holding, action.payload]}

    case "ADD_PORTFOLIO":
        console.log("Spread state adding portfolio",[...state.portfolios, action.payload])
        return {...state, portfolios: [...state.portfolios, action.payload]}

    default:
      return state
  }
}
