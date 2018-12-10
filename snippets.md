
List of legacy code I used for reference and noted file name

Home.js

//  toggleShowHoldings = (portfolioID) =>{
//    console.log("Settin current id and clicked:", portfolioID)
//   this.setState({
//     showHoldings: true,
//     currentPortfolio: portfolioID
//   });
//
// }

Portfolios.js

// return dispatch =>{fetch("http://localhost:3001/portfolios/" + portfolioID + "/holdings")
//    .then(response => dispatch(  {
//        type: 'SET_HOLDINGS',
//        payload: response
//      }))
//      .then (this.setState({
//        showHoldings: true,
//        currentPortfolio: portfolioID
//      }));
//  }}


HOldings.js

// WHy is is this pre filling as id:1
// fetch("http://localhost:3001/portfolios/" +
// this.props.currentPortfoilio + "/holdings")
// .then(response => response.json())
// .then(holdings => setHoldings(holdings))
