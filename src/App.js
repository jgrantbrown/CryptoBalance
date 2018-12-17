import React, { Component } from 'react';
import Home from './components/Cryptos/Home'
import './App.css';
import {getPortfolios} from './actions/holdingsactions';
import { connect } from 'react-redux';

import {getBTC} from './actions/cryptoactions';
import {getLTC} from './actions/cryptoactions';
import {getETH} from './actions/cryptoactions';

class App extends Component {

  componentDidMount() {
    this.props.getPortfolios()
    this.props.getBTC()
    this.props.getETH()
    this.props.getLTC()
  }

  render() {
    const pStyle =
    {
           padding: 10,
           margin: 10,
           backgroundColor: "orange",
           color: "#333",
           display: "inline-block",
           fontFamily: "monospace",
           fontSize: 32,
       };

    return (
      <div className="App">

        {/* TRYING TO IMPLEMENT A NAV BAR */}
        {/* <Navigation /> */}
        <header className="App-header">

          <p style={pStyle} >Crypto Price and Portfolio Analysis </p>

        </header>
        <div className="Body-container">
        <Home />
        </div>
      </div>
    );
  }
}

  export default connect(null,{getPortfolios, getBTC, getLTC, getETH})(App);
