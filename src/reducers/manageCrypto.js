const initialState = {
  portfolios: [
    {name: '',
    holdings: []}
  ],

  holding: [
    {
      token:"betacoin",
      amount: 1,
      costbasis: "5",
      wallet: "Betacoinbase"}
  ],
  portfolio: [
    {
      token:"betacoin",
      amount: 1,
      costbasis: "5",
      wallet: "Betacoinbase"}
  ]
}

export default function manageCrypto(state = initialState, action){

  switch(action.type){
    case "ADD_HOLDING":

      console.log("Spread state",[...state.portfolio, action.payload])
      return {...state, portfolio: [...state.portfolio, action.payload]}

    default:
      return state
  }
}
