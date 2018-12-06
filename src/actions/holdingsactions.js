
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
  // .catch(error => console.error('Error:', error));
}

// SHOULD IT BE THUNK
// function postPortfolio(url, data){
// retrun dispatch =>{
//   dispatch(addPortfolio());
//   return fetch(url)
//   .then(res => res.json())
//   .then(parsedRes =>{
//     dispatch({
//       type: "ADD_PORTFOLIO"
//       data: parsedRes.name
//     })
//
//   })
// }
// }


export const addHolding = (holding)=>{
  console.log("Action Holding:",holding)

  // Need to Post the new portfolio name
// fetch(localhost:3001/portfolios)
// .then((response))=>
  return {
    type: 'ADD_HOLDING',
    payload: holding
  }
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
