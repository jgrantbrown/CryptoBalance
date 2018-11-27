import React, { Component } from 'react';
// import InputHolding from './InputHolding'

class Cryptos extends Component {

  handleAddCoin = e => {
    e.preventDefault()
    debugger
    // Render the </InputHolding>
  }

  render() {

    // const addForm =



    return (
      <div>
        <p>THis Cryptos Component Soon to be a list of Cryptos with QUotes</p>
        <button onClick={(e)=>this.handleAddCoin(e)}>Add More coins</button>
      </div>
    )
  }}

  export default Cryptos;
