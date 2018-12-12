import React, { Component } from 'react';
import { Table } from 'reactstrap';
import InputHolding from '../Cryptos/InputHolding'

class Holdings extends Component {

  constructor(props) {
      super(props);
      this.state = {
        openForm: false,
      };
    }

  handleAddCoin = e => {
    e.preventDefault()
    this.setState({
      openForm: true,
    })
    // USe a route to rerender and expose the form
    // Render the </InputHolding>
  }

  // PROPS passed to component:
      // showHoldings={this.state.showHoldings}
      // currentPortfolio={this.state.currentPortfolio}

  render() {
    console.log("these props for Holdings",this.props.currentPortfolio)

    const portfolioName = (this.props.currentPortfolio.name) ? <div><p>Portfolio Name:</p><h1> {this.props.currentPortfolio.name} </h1></div> : <></>

    const holdings = (this.props.currentPortfolio.holdings !== undefined) ? this.props.currentPortfolio.holdings.map((holding,index) =>
                       <tr key={index}>
                         <td>{holding.token}</td>
                         <td>{holding.wallet}</td>
                         <td>{holding.amount}</td>
                         <td>TBD MKT basis</td>
                         <td>TBD MKT Price</td>
                        <td>TBD MKT VALUE</td>
                      </ tr>)
                      : <tr></tr>

    const showPortfolio = () => {
      if (this.props.showHoldings === true){  return (
            <>
            {portfolioName}
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
                  {holdings}
              </tbody>
           </Table>
            <p> Total: </p>
            <button onClick={(e)=>this.handleAddCoin(e)}>Add More Hodlr</button>
            <br/>
            <br/>
            <InputHolding visible={this.state.openForm} portfolioID={this.props.currentPortfolio.id} />
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

export default Holdings;
