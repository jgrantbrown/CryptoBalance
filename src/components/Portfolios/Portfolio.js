import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { Link,  Route } from 'react-router-dom'
import {getHoldings, showHoldings} from '../../actions/holdingsactions';
// import InputHolding from './InputHolding'
import Holdings from '../Portfolios/Holdings'
import CreatePortfolio from '../Portfolios/CreatePortfolio'



class Portfolio extends Component {

  constructor(props) {
     super(props);
     this.state = {
       dropdownOpen: false,
       addPortfolioOpen: false
     };
   }

   toggle = () => {
     this.setState(prevState => ({
       dropdownOpen: !prevState.dropdownOpen
     }));
   }

   toggleShowHoldings = (portfolio) => {
     console.log("Portfolio:", portfolio)
     this.props.showHoldings()
     this.props.getHoldings(portfolio)

     // this.props.history.push(`/${portfolio.name}`);
   }

   toggleAddForm =(e)=>{
     this.setState({
       addPortfolioOpen: true
     });

   }

  render() {
      const addPortfolioForm = this.state.addPortfolioOpen ? <CreatePortfolio showForm={this.state.addPortfolioOpen}/> : <p>  </p>


      const portfolioList = this.props.portfolios.map((portfolio, index) => {
        const portfolionameroute = `/portfolio/${portfolio.name}`
        console.log("Route:",portfolionameroute)
        return      <Link to={portfolionameroute} key={index}>
                      <DropdownItem
                      onClick={() => this.toggleShowHoldings(portfolio)}
                      style={{ textDecoration: 'none', color: 'black' }}>
                      {portfolio.name}
                      </DropdownItem></Link>


                      })

      const dropDownList =  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                      Portfolios List
                    </DropdownToggle>
                    <DropdownMenu>

                      {/* Add style to add protfolio on list  */}
                      <Link to='Portfolio/AddNewPortfolio'>  <DropdownItem
                                onClick={() => this.toggleAddForm()}
                                style={{ textDecoration: 'none', color: 'black' }}

                                > ADD Portfolio</DropdownItem></Link>
                        {portfolioList}
                    </DropdownMenu>
                    </Dropdown>

    return (
        <div>
          {dropDownList}
          <Route  exact path="/Portfolio/AddNewPortfolio" component={addPortfolioForm}/>
          {addPortfolioForm}
        </div>
      )
    }}

  const mapStateToProps = (state) => {
      // console.log("New State in Portfolios:", state.portfolios)
      return {
        portfolios: state.portfolios,
        currentPortfolio: state.currentPortfolio,

      }
  }

  export default connect(mapStateToProps,{getHoldings,showHoldings})(Portfolio);
