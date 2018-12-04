import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputHolding from './InputHolding'
import CryptoCards from './CryptoCards'
import { Table,Container, Row, Col,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Portfolio from '../Portfolios/Portfolio'
class Cryptos extends Component {

  constructor(props) {
      super(props);
      this.state = {
         dropdownOpen: false
      };
    }


  toggle = () =>{
   this.setState({
     dropdownOpen: !this.state.dropdownOpen
   });
 }


  render(){

    const holdingslist = this.props.holdings.map((holding,index) => {
      return   (<tr key={index}>
        <td>{holding.token} </td>
        <td>{holding.wallet}</td>
        <td>{holding.amount}</td>
        <td>{holding.costbasis}</td>
        <td>market price holder</td>
        <td>{holding.amount * 3800}</td>
    </tr>);
    })

    return (
      <Container>

        <Row>
            <Col xs="3"><ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Portfolios
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Dropdown header</DropdownItem>
            <DropdownItem >Add Portfolio</DropdownItem>
            <DropdownItem >Portfolio 1</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown></Col>
            <Col xs="8"><CryptoCards /></Col>
      </Row>
          <br/>
          <Portfolio holdings= {holdingslist} />
      </Container>
    );
  }
};

const mapStateToProps = (state) => {
    console.log("New State:", state.portfolio)
    return { holdings: state.portfolio}
}


  export default connect(mapStateToProps)(Cryptos);
