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
    console.log("these props for Portfolio",this.props)

    const showPortfolio = () => {
      if (this.props.showHoldings === true){  return (
            <>
            {/* NEED to have acces to back end and name of portfolio to render  */}
            {/* {this.props.holdings.portfolio.name} */}
            Portfolio Name
            <Table>
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

              </tbody>
           </Table>
            <p> Total: {this.props.showHoldings}</p>
            <button onClick={(e)=>this.handleAddCoin(e)}>Add More Hodlr</button>
            <br/>
            <br/>
            <InputHolding visible={this.state.openForm} />
          </>)
      }else{
        return( <div></div>)
      }}

    return (
      <div>
          {showPortfolio()}
      </div>

    )
  }}

  export default Portfolio;
