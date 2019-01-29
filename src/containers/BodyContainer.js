import React, { Component } from 'react';
// import './Navigation.css';
import {  Route, Switch } from 'react-router-dom';
import Home from '../components/Navigation/Home'
import About from '../components/Navigation/About'
import PortfolioListContainer from '../components/Portfolios/PortfolioListContainer'
import HoldingsContainer from '../components/Holdings/HoldingsContainer'
import CreatePortfolio from '../components/Portfolios/CreatePortfolio'

class BodyContainer extends Component {

  render() {

    return (
          <div className="Body-container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/About" component={About}/>
              <Route exact path="/Portfolios" component={PortfolioListContainer}/>
              <Route  exact path="/portfolio/:portfolio" component={HoldingsContainer} />
              <Route  exact path="/Portfolios/AddNewPortfolio" component={CreatePortfolio} />
              {/* <Route  exact path="/Portfolios/AddNewPortfolio" render={() => <div>Home</div>} /> */}
            </Switch>
          </div>
    );
  }
   }




 export default BodyContainer;
