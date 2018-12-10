// FETCH "POST" REQUEST FOR  creating portfolio
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
  return dispatch => {
    postPortfolio("http://localhost:3001/portfolios", portfolio)
    .then(response => dispatch(  {
        type: 'ADD_PORTFOLIO',
        payload: response
      }))
  }
}

export const addHolding = (holding) => {
  return {
    type: 'ADD_HOLDING',
    payload: holding
  }
}

export const setHoldings = (holdings) => {
  console.log("setHoldings action:", holdings)
  return {
    type: 'SET_HOLDINGS',
        payload: holdings
      }
  }





// MOVED THIS WORK INTO THE HOLDINGS AS A COMPONET WILL MOUNT
// FETCH REQUEST FOR HOLDINGS OF PORTFOLIO
// SETUP ACTION AND SEND TO REDUCER TO RETRIEVE THE HOLDINGS OF A PORTFOLIO
// export const apiHolding = (url) => {
//   console.log("getHolding data:", url)
//   debugger
//   return fetch(url)
//   .then(response => console.log("RESPONSE FROM API:",response.json()))
//   .catch(error => console.error('Error:', error));
// }

// export const getHoldings = (portfolioID) => {
//   console.log("getHoldings action:", portfolioID)
//   console.log("URL to use:",`http://localhost:3001/portfolios/` + portfolioID + `/holdings`)
//   return dispatch => {
//     // AM not hitting this dispatch?
//     apiHolding("http://localhost:3001/portfolios/" + portfolioID + "/holdings")
//     .then(response => dispatch(  {
//         type: 'GET_HOLDINGS',
//         payload: response
//       }))
//   }
// }
