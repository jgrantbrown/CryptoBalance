const initialState = {
  portfolio: [
    {
      token:"betacoin",
      amount: "1",
      costbasis: "5",
      wallet: "Betacoinbase"}
  ]
}

export default function manageCrypto(state = initialState, action){

  switch(action.type){
    case "ADD_HOLDING":

      console.log([...state, action.portfolio.payload])
      return ([...state, action.payload])

    default:
      return state
  }
}
