
export const ADD_HOLDING = "ADD_HOLDING"

cont function addHolding(holding){
  return {
    type: ADD_HOLDING,
    holding
  }
}
