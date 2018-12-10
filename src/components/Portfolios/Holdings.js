import React, { Component } from 'react';
import { Table } from 'reactstrap';
import InputHolding from '../Cryptos/InputHolding'

class Holdings extends Component {

  constructor(props) {
      super(props);
      this.state = {
        openForm: false,
        holdings: []
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

  componentDidMount() {

  // NEed to clear previous holding from page
    fetch("http://localhost:3001/portfolios/" +
    this.props.currentPortfoilio + "/holdings")
    .then(response => response.json())
    .then(holdings => this.setState({holdings}))
  }



  render() {
    console.log("these props for Holdings",this.props)
    console.log(this.state.holdings)
      const holdings = this.state.holdings.map((holding,index) =>
                         <tr key={index}>
                           <td>{holding.token}</td>
                           <td>{holding.wallet}</td>
                           <td>{holding.amount}</td>
                           <td>TBD MKT basis</td>
                           <td>TBD MKT Price</td>
                          <td>TBD MKT VALUE</td>
                        </ tr>)

    const showPortfolio = () => {
      if (this.props.showHoldings === true && this.props.currentPortfolio !== undefined){  return (
            <>
            {/* NEED to have acces to back end and name of portfolio to render  */}
            {/* {this.props.holdings.portfolio.name} */}
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

  export default Holdings;
