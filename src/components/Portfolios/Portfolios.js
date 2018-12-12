import React, { Component } from 'react';
import {  DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';

class Portfolios extends Component {

  render() {
    console.log("Portfolios fetching:", this.props.portfolios)
        // showholding(portfolio.id) is passed back to home to execute
    const portfolioList = this.props.portfolios.map((portfolio, index) => {
    return <DropdownItem key = {portfolio.id}  onClick={()=>this.props.toggleShowHoldings(portfolio)} > {portfolio.name}</DropdownItem>
  })

    return (
      <div>
        {portfolioList}
      </div>
    )
  }}

  const mapStateToProps = (state) => {
      console.log("New State in Portfolios:", state.portfolios)
      return { portfolios: state.portfolios}
  }

  export default connect(mapStateToProps)(Portfolios);
