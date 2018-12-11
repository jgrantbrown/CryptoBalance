import React, { Component } from 'react';
import Home from './components/Cryptos/Home'
import './App.css';
import {getPortfolios} from './actions/holdingsactions';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.getPortfolios()
  }

  render() {
    const pStyle =
    {
           padding: 10,
           margin: 30,
           backgroundColor: "orange",
           color: "#333",
           display: "inline-block",
           fontFamily: "monospace",
           fontSize: 32,
       };

    return (
      <div className="App">
        <header className="App-header">
          <p style={pStyle} >Crypto Price and Portfolio Analysis </p>
          <Home />
        </header>
      </div>
    );
  }
}

// / NEED TO GET THIS TO WORK!!
//   const mapStateToProps = (state) => {
//       console.log("New State:", state.portfolios)
//       return { portfolios: state.portfolios}
//   }
//


  export default connect(null,{getPortfolios})(App);
