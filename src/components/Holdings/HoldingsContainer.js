import React, { Component } from 'react';
import { Table ,Row} from 'reactstrap';
import InputHolding from './InputHolding'
import { connect } from 'react-redux';
import CryptoCards from '../Cryptos/CryptoCards'
import {showAddForm} from '../../actions/holdingsactions';
import Holdings from "./Holdings"

class HoldingsContainer extends Component {

    handleAddCoin = e => {
        e.preventDefault()
        this.props.showAddForm()
      }

      showForm = () => {
            if(this.props.showForm === true){
              return  <div> <InputHolding
                visible={this.props.showForm}
                portfolioID={this.props.currentPortfolio.id}/> </div>
            }else{
              return  <></>
            }
        }

  render() {
    const portfolioName = (this.props.currentPortfolio.name) ? <div><p>Portfolio Name:</p><h1> {this.props.currentPortfolio.name} </h1></div> : <></>

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
                  <Holdings />
              </tbody>
           </Table>
            <p> Total: </p>
            <button onClick={(e)=>this.handleAddCoin(e)}>Add More Hodlr</button>
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
          {this.showForm()}
      </div>

    )
  }}

  const mapStateToProps = (state) => {
      // console.log("Portfolios:", state.portfolios)
      return {
        showHoldings: state.showholdings,
        showForm: state.showform,
        currentPortfolio: state.currentPortfolio
      }
  }

  export default connect(mapStateToProps,{showAddForm})(HoldingsContainer)
