
export const postPortfolio = (url, data)=>{
  console.log("postPorfolio data:", data)
  return fetch(url,{
    method: 'POST',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .catch(error => console.error('Error:', error));
}

// Need to add reducer and also POST data to back end
export const addPortfolio = (portfolio) => {
  console.log("Action addportfolio:", portfolio)

  return  dispatch => {
    postPortfolio("http://localhost:3001/portfolios", portfolio)
    .then(response => dispatch(  {
        type: 'ADD_PORTFOLIO',
        payload: response
      }))
  }

}

export const addHolding = (holding)=>{
  return {
    type: 'ADD_HOLDING',
    payload: holding
  }
}

// SETUP ACTION AND SEND TO REDUCER TO RETRIEVE THE HOLDINGS OF A PORTFOLIO
export const getHolding = (url, data)=>{
  console.log("getHolding data:", data)
  return fetch(url,{
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .catch(error => console.error('Error:', error));
}

export const getHoldings = (portfolio) => {
  console.log("getHolding:", portfolio)
  return  dispatch => {
    getHolding(`http://localhost:3001/portfolios/`+portfolio.id+`/holdings`)
    .then(response => dispatch(  {
        type: 'GET_HOLDINGS',
        payload: response
      }))
  }

}
