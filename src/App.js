import React, { Component } from 'react';
// import Home from './components/Cryptos/Home'
import './App.css';
import {getPortfolios} from './actions/holdingsactions';
import { connect } from 'react-redux';

import {getBTC} from './actions/cryptoactions';
import {getLTC} from './actions/cryptoactions';
import {getETH} from './actions/cryptoactions';

import Navigation from './components/Navigation/Navigation'


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
        {/* TRYING TO IMPLEMENT A NAV BAR */}
        <Navigation />
      </div>
    );
  }
}

  export default connect(null,{getPortfolios, getBTC, getLTC, getETH})(App);
