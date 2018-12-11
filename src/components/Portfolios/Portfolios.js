import React, { Component } from 'react';
import {  DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
// import {getPortfolios} from '../../actions/holdingsactions';

class Portfolios extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     portfolios: [],
  //   }
  // }

  // componentDidMount() {
  //   fetch('http://localhost:3001/portfolios')
  //   .then(response => response.json())
  //   .then(portfolios => this.setState({portfolios}))
  // }


// NEED THIS TO FIRE BEFORE RENDERING SO STATE IS POPULATED WITH PORTFOLIOS
  // componentDidMount() {
  //   this.props.getPortfolios()
  // }

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

// NEED TO GET THIS TO WORK!!
  const mapStateToProps = (state) => {
      console.log("New State:", state.portfolios)
      return { portfolios: state.portfolios}
  }



  export default connect(mapStateToProps)(Portfolios);
