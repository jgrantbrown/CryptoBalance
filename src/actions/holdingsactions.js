


export const addHolding = (holding)=>{
  console.log(holding)
  debugger
  return {
    type: 'ADD_HOLDING',
    payload: holding
  }
}

// Need to add reducer and also POST data to back end 
export const addPortfolio = (portfolio)=>{
  console.log(portfolio)
  debugger
  return {
    type: 'ADD_PORTFOLIO',
    payload: portfolio
  }
}
