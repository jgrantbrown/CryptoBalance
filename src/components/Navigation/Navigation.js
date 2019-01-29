import React, { Component } from 'react';
import Home from './Home'

import { Link, Route, Switch } from 'react-router-dom';
import About from '../Navigation/About'
import PortfolioListContainer from '../Portfolios/PortfolioListContainer'
import HoldingsContainer from '../Portfolios/HoldingsContainer'
import CreatePortfolio from '../Portfolios/CreatePortfolio'


class Navigation extends Component {

  render() {

    return (
      <div>
          <div className="NavBarStyle" >
            <Link to="/"  className="NavStyle"> Home </Link>
            <Link to="/About" className="NavStyle" > About </Link>
            <Link to="/Portfolios" className="NavStyle" > Portfolio </Link>
          </div>

          <div className="Body-container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/About" component={About}/>
              <Route exact path="/Portfolios" component={Portfolio}/>
              <Route  exact path="/portfolio/:portfolio" component={HoldingsContainer} />
              <Route  exact path="/Portfolios/AddNewPortfolio" component={CreatePortfolio} />
              {/* <Route  exact path="/Portfolios/AddNewPortfolio" render={() => <div>Home</div>} /> */}
            </Switch>
          </div>
      </div>
    );
  }
   }




 export default Navigation;
