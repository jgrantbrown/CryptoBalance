import React, { Component } from 'react';


class Holding extends Component {

  constructor(props) {
      super(props);
      this.state = {
        counter: 0,
      };
    }

    handleClick = (e) =>{
      e.preventDefault()
          this.setState({
            counter: (this.state.counter + 1)
          })
          // this.setState(prevState => ({ counter: prevState.counter+ 1 }));
        }

  render() {

    return (
      <tr key={this.props.holding.index}>
        <td>{this.props.holding.token}</td>
        <td>{this.props.holding.wallet}</td>
        <td>{this.props.holding.amount}</td>
        <td>{this.props.holding.costbasis}</td>
        <td>TBD MKT Price</td>
       <td>TBD MKT VALUE</td>
     <td>  <button onClick={this.handleClick}>Counter</button></td>
     <td> {this.state.counter } </td>
     </ tr>
   )

  }}


  export default Holding
