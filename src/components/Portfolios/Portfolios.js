import React, { Component } from 'react';
import {  DropdownItem } from 'reactstrap';


class Portfolios extends Component {

  constructor(props){
    super(props)
    this.state = {
      portfolios: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/portfolios')
    .then(response=> response.json())
    .then(portfolios => this.setState({portfolios}))
  }



  render() {
    const portfoliosAdded = this.state.portfolios.map((portfolio, index) => {
    return <DropdownItem key={index} onClick={this.toggleShowHoldings} > {portfolio.name}</DropdownItem>
  })
  
    return (
      <div>
        {portfoliosAdded}
      </div>

    )
  }}

  export default Portfolios;
