import React, { Component } from 'react';
import InputHolding from './InputHolding'

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
        <button onClick={(e)=>this.handleAddCoin(e)}>Add More coins</button>
        <InputHolding visible={this.state.openForm} />
      </div>

    )
  }}

  export default Cryptos;
