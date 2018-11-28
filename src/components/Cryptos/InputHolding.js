import React, { Component } from 'react';

class InputHolding extends Component {
  render() {
    const showForm = (this.props.visible) ?
      <form>
        <input type="text" value="token"/><br/>
        <input type="text" value="amount"/><br/>
        <input type="text" value="cost basis"/><br/>
        <input type="text" value="wallet"/><br/>
        <input type="submit" />
      </form> : <div> </div>


      return (
        <div>
          {showForm}
        </div>
      )




  }}

  export default InputHolding;
