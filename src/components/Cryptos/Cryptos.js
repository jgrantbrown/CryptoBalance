import React, { Component } from 'react';
import InputHolding from './InputHolding'
import CryptoPrices from './CryptoPrices'
import { Table } from 'reactstrap';

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
            <CryptoPrices />
          <Table>
          <thead>
            <tr>
              <th> Coin </th>
              <th> Wallet </th>
              <th> Coins Held</th>
              <th> Current Price </th>
              <th> Mkt Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ETH </td>
              <td>Coinbase</td>
              <td>5</td>
              <td>117.00</td>
              <td>622</td>
            </tr>
          </tbody>
          </Table>
        <button onClick={(e)=>this.handleAddCoin(e)}>Add More coins</button>
        <InputHolding visible={this.state.openForm} />
      </div>

    )
  }}

  export default Cryptos;
