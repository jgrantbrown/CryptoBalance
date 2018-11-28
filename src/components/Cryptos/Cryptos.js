import React, { Component } from 'react';
import InputHolding from './InputHolding'
import CryptoPrices from './CryptoPrices'

class Cryptos extends Component {



  constructor(props) {
      super(props);
      this.state = {
        openForm: false
      };

    }

  handleAddCoin = e => {
    e.preventDefault()
    this.setState({
      openForm: true
    })
    // USe a route to rerender and expose the form
    // Render the </InputHolding>
  }

  render() {
    return (
      <div>
        <p>THis Cryptos Component Soon to be a list of Cryptos with QUotes</p>
            <CryptoPrices />
          <table>
            <tr>
              <th> Coin </th>
              <th> Wallet </th>
              <th> Coins Held</th>
              <th> Coins Held</th>
              <th> Current Price </th>
              <th> Mkt Value</th>
            </tr>
            <tr>
              <td>row 1 </td>
              <td>row 2</td>
              <td>row 3</td>
              <td>row 4</td>
              <td>row 5</td>
              <td>row 6</td>
            </tr>
          </table>
        <button onClick={(e)=>this.handleAddCoin(e)}>Add More coins</button>
        <InputHolding visible={this.state.openForm} />
      </div>

    )
  }}

  export default Cryptos;
