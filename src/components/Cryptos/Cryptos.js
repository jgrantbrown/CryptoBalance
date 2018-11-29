import React, { Component } from 'react';
import InputHolding from './InputHolding'
import CryptoCards from './CryptoCards'
import { Table,Container, Row, Col,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Cryptos extends Component {

  constructor(props) {
      super(props);
      this.state = {
        openForm: false,
         dropdownOpen: false
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

  toggle = () =>{
   this.setState({
     dropdownOpen: !this.state.dropdownOpen
   });
 }

  render() {
    return (
      <Container>
        <Row>
            <Col xs="3"><ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Portfolios
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Dropdown header</DropdownItem>
            <DropdownItem >Portfolio 1</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown></Col>
            <Col xs="8"><CryptoCards /></Col>
      </Row>
          <br/>

          <Table>
          <thead>
            <tr>
              <th> Coin </th>
              <th> Wallet </th>
              <th> Coins Held</th>
              <th> Current Price </th>
              <th> Mkt Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ETH </td>
              <td>Coinbase</td>
              <td>5</td>
              <td>117.00</td>
              <td>622</td>
            </tr>
          </tbody>
      </Table>
        <button onClick={(e)=>this.handleAddCoin(e)}>Add More Hodlr</button>
        <br/>
        <br/>
        <InputHolding visible={this.state.openForm} />
      </Container>

    )
  }}

  export default Cryptos;
