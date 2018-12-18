
List of legacy code I used for reference and noted file name
NAvigation.js
Want drop down for navigation
<p style={navstyle}>  <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Portfolios
          </DropdownToggle>
            <DropdownMenu>
              <DropdownItem  header>Choose or Add</DropdownItem>
              <DropdownItem   onClick={this.toggleAddForm}>Add Portfolio</DropdownItem>
              {/* THis renders a drop down list of the porfolios clcikable  */}
              <Portfolios  toggleShowHoldings={this.toggleShowHoldings}/>
            </DropdownMenu>
        </ButtonDropdown>
</p>




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

componentWillReceiveProps() {
  // WHy does this work if I commented out the action and reducer?
  // console.log("THese are the current props:", this.props)
  // return dispatch => {
  //    // AM not hitting this dispatch?
  //    fetch("http://localhost:3001/portfolios/" +
  //    this.props.currentPortfoilio.id + "/holdings")
  //    .then(response => dispatch({
  //      type: 'SEE_HOLDINGS',
  //          payload: response
  //        }))
  //  }
}



HOldingactions.js
// NOT USING CALLING DIRECTLY IN HOldings.js
// export const seeHoldings = (holdings) => {
//   console.log("seeHoldings action:", holdings)
//   return {
//     type: 'SEE_HOLDINGS',
//         payload: holdings
//       }
//   }
