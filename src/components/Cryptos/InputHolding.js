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
    // USe a route to rerender and expose the form
    // Render the </InputHolding>
  }

  handleChange = evt => {
    debugger
    this.setState({ [evt.target.name]: evt.target.value });
    // Set up form changes
  }



  render() {
    const showForm = (this.props.visible) ?
      <form onSubmit={(e)=>this.Submit(e)}>
        <input type="text" value="token" onChange={this.handleChange}/><br/>
        <input type="text" value="amount" onChange={this.handleChange}/><br/>
        <input type="text" value="cost basis" onChange={this.handleChange}/><br/>
        <input type="text" value="wallet" onChange={this.handleChange}/><br/>
        <input type="submit" />
      </form> : <div> </div>


      return (
        <div>
          {showForm}
        </div>
      )




  }}

  export default InputHolding;
