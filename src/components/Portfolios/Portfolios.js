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
    .then(response => response.json())
    .then(portfolios => this.setState({portfolios}))
  }


  render() {
    const portfolioAdded = this.state.portfolios.map((portfolio, index) => {
    return <DropdownItem key={portfolio.id}  onClick={()=>this.props.showHolding(portfolio.id)} > {portfolio.name}</DropdownItem>
  })

    return (
      <div>
        {portfolioAdded}
      </div>

    )
  }}

  export default Portfolios;
