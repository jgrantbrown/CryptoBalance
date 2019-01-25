import React, { Component } from 'react';
// import './Navigation.css';
import { Link, Route, Switch } from 'react-router-dom';
import Home from '../components/Cryptos/Home'
import About from '../components/Navigation/About'
import Portfolio from '../components/Portfolios/Portfolio'
import Holdings from '../components/Portfolios/Holdings'
import CreatePortfolio from '../components/Portfolios/CreatePortfolio'

class BodyContainer extends Component {

  render() {

    return (
          <div className="Body-container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/About" component={About}/>
              <Route exact path="/Portfolios" component={Portfolio}/>
              <Route  exact path="/portfolio/:portfolio" component={Holdings} />
              <Route  exact path="/Portfolios/AddNewPortfolio" component={CreatePortfolio} />
              {/* <Route  exact path="/Portfolios/AddNewPortfolio" render={() => <div>Home</div>} /> */}
            </Switch>
          </div>
    );
  }
   }




 export default BodyContainer;
