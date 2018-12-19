import React, { Component } from 'react';
import { DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { Link,  Route } from 'react-router-dom'
import {getHoldings, showHoldings} from '../../actions/holdingsactions';
// import InputHolding from './InputHolding'
import Holdings from '../Portfolios/Holdings'


class Portfolio extends Component {

  toggleShowHoldings = (portfolio) => {
    this.props.showHoldings()
    this.props.getHoldings(portfolio)
  }

  render() {

      const holdings = () => {
        debugger
        return(<div>

                  <Holdings currentPortfolio={this.props.currentPortfolio} />
                </div>)
      }

      const portfolioList = this.props.portfolios.map((portfolio, index) => {

    // return <DropdownItem  key = {portfolio.id} onClick={()=>this.toggleShowHoldings(portfolio)}   >
        return   <Link
                  key = {portfolio.id}
                  onClick={()=>this.toggleShowHoldings(portfolio)}
                  style={{ textDecoration: 'none', color: 'black' }}
                  to={`/${portfolio.name}`}>
                  {portfolio.name}
                </Link>
            // </DropdownItem>
    })
    return (
        <div>
          {portfolioList}
          <Route
             path={`/:holdings`}
             component={holdings}
            />
        </div>
      )
    }}

  const mapStateToProps = (state) => {
      // console.log("New State in Portfolios:", state.portfolios)
      return { portfolios: state.portfolios,
      currentPortfolio: state.currentPortfolio}
  }

  export default connect(mapStateToProps,{getHoldings,showHoldings})(Portfolio);

  // <Route
  //   exact path={`/:holdings`}
  //   render{()=><Holdings currentPortfolio={this.props.currentPortfolio} />}
  //   component={holdings}/>
