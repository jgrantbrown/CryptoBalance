import React, { Component } from 'react';
import { Table } from 'reactstrap';
import InputHolding from '../Cryptos/InputHolding'

class Portfolio extends Component {

  constructor(props) {
      super(props);
      this.state = {
        openForm: false,
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
  const showHoldings = () => {
      return (
        <><Table>
      <thead>
        <tr>
          <th> Coin </th>
          <th> Wallet </th>
          <th> Coins Held</th>
          <th> Cost Basis</th>
          <th> Current Price </th>
          <th> Mkt Value</th>
        </tr>
      </thead>
      <tbody>

          {this.props.holdings}
          <p> Total: </p>
      </tbody>
    </Table>
    <button onClick={(e)=>this.handleAddCoin(e)}>Add More Hodlr</button>
    <br/>
    <br/>
    <InputHolding visible={this.state.openForm} /></>)
    }

    return (
      <div>
          A portfolio
          {showHoldings()}
        </div>

    )
  }}

  export default Portfolio;
