import React, { Component } from 'react';

class InputHolding extends Component {

  constructor(props) {
      super(props);
      this.state = {
        token: "",
        amount: "",
        costbasis: "",
        wallet: ""
      };

    }

  handleSubmit = e => {
    e.preventDefault()
    debugger
    //  USe this.state to add to portfolio
    // USe a route to rerender and expose the form
    // Render the </InputHolding>
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
    // Set up form changes
  }



  render() {
    const showForm = (this.props.visible) ?
      <form onSubmit={(e)=>this.handleSubmit(e)}>
        <label>Token: </label>
        <input type="text" name="token" onChange={this.handleChange}/><br/>
        <label>Amount: </label>
        <input type="text" name="amount" onChange={this.handleChange}/><br/>
        <label>Cost Basis: </label>
        <input type="text"  name="costbasis" onChange={this.handleChange}/><br/>
        <label>Wallet: </label>
        <input type="text"  name="wallet"  onChange={this.handleChange}/><br/>
        <input type="submit" />
      </form> : <div> </div>


      return (
        <div>
          {showForm}
        </div>
      )




  }}

  export default InputHolding;
