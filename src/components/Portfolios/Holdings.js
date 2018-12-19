import React, { Component } from 'react';
import { Table ,Row} from 'reactstrap';
// import InputHolding from '../Cryptos/InputHolding'
import { connect } from 'react-redux';
import CryptoCards from '../Cryptos/CryptoCards'


class Holdings extends Component {
  render() {
    // console.log("these props for Holdings",this.props.currentPortfolio)

    const portfolioName = (this.props.currentPortfolio.name) ? <div><p>Portfolio Name:</p><h1> {this.props.currentPortfolio.name} </h1></div> : <></>

    const holdings = (this.props.currentPortfolio.holdings) ? this.props.currentPortfolio.holdings.map((holding,index) =>
                       <tr key={index}>
                         <td>{holding.token}</td>
                         <td>{holding.wallet}</td>
                         <td>{holding.amount}</td>
                         <td>{holding.costbasis}</td>
                         <td>TBD MKT Price</td>
                        <td>TBD MKT VALUE</td>
                      </ tr>)
                      : <tr></tr>

    const showPortfolio = () => {
     if (this.props.showHoldings === true){  return (
        <>
        <Row>
          <CryptoCards />
        </Row>
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
            <button onClick={(e)=>this.props.handleAddCoin(e)}>Add More Hodlr</button>
          <br/>
          <br/>
          </>)
      }else{
        return( <div></div>)
      }
    }

    return (
      <div>
          {showPortfolio()}
      </div>

    )
  }}

  const mapStateToProps = (state) => {
      // console.log("Portfolios:", state.portfolios)
      return { showHoldings: state.showholdings,
      }
  }

  export default connect(mapStateToProps)(Holdings)
