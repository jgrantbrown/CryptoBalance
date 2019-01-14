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
      const holdings = () => {
        return(<div>
                  <Holdings currentPortfolio={this.props.currentPortfolio} />
                </div>)
      }

      const addPortfolioForm = this.state.addPortfolioOpen ? <CreatePortfolio showForm={this.state.addPortfolioOpen}/> : <p>  </p>


      const portfolioList = this.props.portfolios.map((portfolio, index) => {
    // return <DropdownItem  key = {portfolio.id} onClick={()=>this.toggleShowHoldings(portfolio)}   >
        return <DropdownItem key = {portfolio.id}
                                onClick={() => this.toggleShowHoldings(portfolio)}
                                style={{ textDecoration: 'none', color: 'black' }}
                                to={`/${portfolio.name}`} >
                                {portfolio.name}
                                </DropdownItem>
                      })

      const dropDownList =  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                      Portfolios List
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>

                        <DropdownItem
                                onClick={() => this.toggleAddForm()}
                                style={{ textDecoration: 'none', color: 'black' }}
                                > ADD Portfolio</DropdownItem>
                        {portfolioList}
                    </DropdownMenu>
                    </Dropdown>

    return (
        <div>
          {dropDownList}
          {addPortfolioForm}
          <Route
            exact path={`/:holdings`}
             component={holdings}
            />
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

  // <Route
  //   exact path={`/:holdings`}
  //   render{()=><Holdings currentPortfolio={this.props.currentPortfolio} />}
  //   component={holdings}/>
