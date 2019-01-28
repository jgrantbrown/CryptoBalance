import React, { Component } from 'react';
import { Table ,Row} from 'reactstrap';

import { connect } from 'react-redux';


class Holding extends Component {


  render() {

    const holding = (this.props.currentPortfolio.holdings) ? this.props.currentPortfolio.holdings.map((holding,index) =>
                       <tr key={index}>
                         <td>{holding.token}</td>
                         <td>{holding.wallet}</td>
                         <td>{holding.amount}</td>
                         <td>{holding.costbasis}</td>
                         <td>TBD MKT Price</td>
                        <td>TBD MKT VALUE</td>
                      </ tr>)
                      : <tr></tr>

    return (
      <>{holding}</>
    )
  }}

  const mapStateToProps = (state) => {
      // console.log("Portfolios:", state.portfolios)
      return {
        currentPortfolio: state.currentPortfolio
      }
  }

  export default connect(mapStateToProps)(Holding)
