const initialState = {
  portfolio: [
    {
      amount: "1",
    token:"betacoin",
    costbasis: "5",
    wallet: "Betacoinbase"}
  ]
}

export default function manageCrypto(state = initialState, action){

  switch(action.type){
    case "ADD_HOLDING":
      return [...state, action.holding]

    default:
      return state
  }
}
