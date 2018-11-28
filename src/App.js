import React, { Component } from 'react';
import Cryptos from './components/Cryptos/Cryptos'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>My Crypto Balances</p>

          <Cryptos />

        </header>
        {/* ADD COMPONENTS HERE? */}
      </div>
    );
  }
}
