import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom'
import {getHoldings, showHoldings} from '../../actions/holdingsactions';
// import InputHolding from './InputHolding'
// import Holdings from '../Portfolios/Holdings'
// import CreatePortfolio from '../Portfolios/CreatePortfolio'

class PortfolioListItem extends Component {

   toggleShowHoldings = (portfolio) => {
     console.log("Portfolio:", portfolio)
     this.props.showHoldings()
     this.props.getHoldings(portfolio)
   }

  render() {
      const portfolioList = this.props.portfolios.map((portfolio, index) => {
        const portfolionameroute = `/portfolio/${portfolio.name}`
        return      <Link to={portfolionameroute} key={index}>
                      <DropdownItem
                      onClick={() => this.toggleShowHoldings(portfolio)}
                      style={{ textDecoration: 'none', color: 'black' }}>
                      {portfolio.name}
                      </DropdownItem></Link>
                      })

    return (
        <div>
          {portfolioList}
        </div>
      )
    }}

  const mapStateToProps = (state) => {
      // console.log("New State in Portfolios:", state.portfolios)
      return {
        portfolios: state.portfolios,
      }
  }

  export default connect(mapStateToProps,{getHoldings,showHoldings})(PortfolioListItem);
