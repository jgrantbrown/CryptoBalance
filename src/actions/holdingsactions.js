


export const addHolding = (holding)=>{
  console.log(holding)

  // Need to Post the new portfolio name
// fetch(localhost:3001/portfolios)
// .then((response))=>
  return {
    type: 'ADD_HOLDING',
    payload: holding
  }
}

// Need to add reducer and also POST data to back end
export const addPortfolio = (portfolio)=>{
  console.log("reached the action:", portfolio)
  debugger
  return {
    type: 'ADD_PORTFOLIO',
    payload: portfolio
  }
}
