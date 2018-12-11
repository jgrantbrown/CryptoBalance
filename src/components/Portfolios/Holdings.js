import React, { Component } from 'react';
import { Table } from 'reactstrap';
import InputHolding from '../Cryptos/InputHolding'
import {setHoldings} from '../../actions/holdingsactions';
import { connect } from 'react-redux';

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

  componentWillReceiveProps() {
    console.log("THese are the current props:", this.props)
    return dispatch => {
       // AM not hitting this dispatch?
       fetch("http://localhost:3001/portfolios/" +
       this.props.currentPortfoilio.id + "/holdings")
       .then(response => dispatch({
         type: 'SET_HOLDINGS',
             payload: response
           }))
     }
  }

  render() {
    console.log("these props for Holdings",this.props.currentPortfolio.holdings)

    const holdings = this.props.currentPortfolio.holdings ? this.props.currentPortfolio.holdings.map((holding,index) =>
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
            {/* NEED to have acces to back end and name of portfolio to render  */}
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

  const mapStateToProps = (state) => {
      console.log("New State:", state.holding)
      return { holdings: state.holding}
  }


  export default connect(mapStateToProps,{setHoldings})(Holdings);
