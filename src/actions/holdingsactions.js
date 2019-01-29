// FETCH "POST" REQUEST FOR  creating portfolio
export const postPortfolio = (url, data)=>{
  // console.log("postPorfolio data:", data)
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

// POst request for adding anew Holding
export const postHolding = (url, data)=>{
  // console.log("postHolding data:", data)
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

// ACtion with data from post of new portfolio dispatch to reducer
export const addPortfolio = (portfolio) => {
  // console.log("Action addportfolio:", portfolio)
  console.log('C')
  return dispatch => {
    postPortfolio("http://localhost:3001/portfolios", portfolio)
    .then(response => {
      console.log('D')
      dispatch(  {
        type: 'ADD_PORTFOLIO',
        payload: response
      })})
  }
  
}

// ACtion with data from post of new Holding dipatch to reducer
export const addHolding = (holding) => {
  // console.log("holding in Acton to add:", holding)
  const url = "http://localhost:3001/portfolios/" + holding.portfolio_id + "/holdings"
  return dispatch => {
    postHolding(url, holding)
    .then(response => dispatch(  {
        type: 'ADD_HOLDING',
        payload: response
      }))
  }
}

// Action for getting all lportfioliols used in APP.js
export const getPortfolios = () =>{
  return dispatch => {fetch('http://localhost:3001/portfolios')
  .then(response => response.json())
  .then(portfolios => dispatch({
    type: "GET_PORTFOLIOS",
    payload: portfolios
  }))
}
}

export const getHoldings = (portfolio) =>{
  return  {
    type: "GET_HOLDINGS",
    payload: portfolio
  }
}

export const showHoldings = () =>  {
  return{type: "SHOW_HOLDINGS",
            payload: true}
}

export const showAddForm = () =>{
  return{ type: "SHOW_FORM",
    payload: true}
}
