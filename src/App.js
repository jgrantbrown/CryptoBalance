import React, { Component } from 'react';
// import Home from './components/Cryptos/Home'
import './App.css';
import {getPortfolios} from './actions/holdingsactions';
import { connect } from 'react-redux';

import {getBTC} from './actions/cryptoactions';
import {getLTC} from './actions/cryptoactions';
import {getETH} from './actions/cryptoactions';



import NavBarContainer from './containers/NavBarContainer'
import HeaderContainer from './containers/HeaderContainer'
import BodyContainer from './containers/BodyContainer'


class App extends Component {

  componentDidMount() {
    this.props.getPortfolios()
    this.props.getBTC()
    this.props.getETH()
    this.props.getLTC()
  }

  render() {

    return (
      <div className="App">

        {/* <Navigation /> */}
        <NavBarContainer />
        <HeaderContainer />
        <BodyContainer />
      </div>
    );
  }
}

  export default connect(null,{getPortfolios, getBTC, getLTC, getETH})(App);
