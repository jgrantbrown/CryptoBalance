import React, { Component } from 'react';
import Home from './components/Cryptos/Home'
import './App.css';

export default class App extends Component {
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
