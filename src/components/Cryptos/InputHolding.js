import React, { Component } from 'react';

class InputHolding extends Component {
  render() {
  if(this.props.visible===true){
      return (
      <form>
        <input type="text" value="token"/><br/>
        <input type="text" value="amount"/><br/>
        <input type="text" value="cost basis"/><br/>
        <input type="text" value="wallet"/><br/>
        <input type="submit" />
      </form>)
    }

      return (
        <div></div>
      )




  }}

  export default InputHolding;
