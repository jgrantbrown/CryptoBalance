import React, { Component } from 'react';
import {  DropdownItem } from 'reactstrap';


class Portfolios extends Component {
  constructor(props){
    super(props)
    this.state = {
      portfolios: [],
      // currentPortfolio: [],
      // showHoldings: false,
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/portfolios')
    .then(response => response.json())
    .then(portfolios => this.setState({portfolios}))
  }

  render() {

        console.log("Portfolios fetching:", this.state.portfolios)
        // showholding(portfolio.id) is passed back to hometo execute
    const portfolioList = this.state.portfolios.map((portfolio, index) => {
    return <DropdownItem key={portfolio.id}  onClick={()=>this.props.toggleShowHoldings(portfolio)} > {portfolio.name}</DropdownItem>
  })

    return (
      <div>
        {portfolioList}
      </div>

    )
  }}

  export default Portfolios;
