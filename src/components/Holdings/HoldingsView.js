
// *******************************
// TESTING THIS COMPONENT TO USE AS ROUTE TO RENDER THE WHOLE PAGE AND HOLDINGS FOR A PATICULAR Portfolio?
// /portfolio/:id/holdings
// ********************************


import React, { Component } from 'react';
// import { Table } from 'reactstrap';
import Holdings from '../Portfolios/Holdings';
import APP from '../../App';

import { connect } from 'react-redux';
import {getHoldings} from '../../actions/holdingsactions';


class HoldingsView extends Component {
  render() {

    return (
      <div>
          <p> THE HOLDINGS VIEW</p>
        <APP />
        <Holdings
          showHoldings = "true"
          currentPortfolio={this.props.currentPortfolio}
          handleAddCoin={this.handleAddCoin}/>
      </div>

    )
  }}

  const mapStateToProps = (state) => {
      console.log("New State in Home:", state)
      return { currentPortfolio: state.currentPortfolio }
  }

    // export default Cryptos;
    export default connect(mapStateToProps,{getHoldings})(HoldingsView);
