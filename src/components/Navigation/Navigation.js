import React, { Component } from 'react';
import { Container, Row, Col,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import Portfolios from '../Portfolios/Portfolios'

import { connect } from 'react-redux';
import {getHoldings} from '../../actions/holdingsactions';


class Navigation extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
           dropdownOpen: false,
           showHoldings: false,
           showAddForm: false,
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

  toggle = () =>{
     this.setState({
       dropdownOpen: !this.state.dropdownOpen
     });
   }

  toggleAddForm = () => {
    this.setState({
      showAddForm: true,
    });
  }

  toggleShowHoldings = (portfolio) => {
     console.log("Setting current portfolio of clicked:", portfolio)
     this.setState({
      showHoldings: true,
    });
    // CAN I SET STATE TO OF CURRENT PORTFOLIO TO portfolio?
    this.props.getHoldings(portfolio)
  }



  handleSelect(eventKey, event) {
    event.preventDefault();
    alert(`selected ${eventKey}`);
  }

  render() {
    return (
      <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <Link to='/home'>Portfolio Data</Link>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      Home
    </NavItem>
    <NavItem eventKey={2} href="#">
      About
    </NavItem>
    <NavDropdown eventKey={3} title="Portfolios" id="basic-nav-dropdown">
      {/* How DO I pass down the portfolio ids? */}
      <DropdownItem   onClick={this.toggleAddForm}>Add Portfolio</DropdownItem>
      <Portfolios  toggleShowHoldings={this.toggleShowHoldings}/>
      {/* <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Separated link</MenuItem> */}
    </NavDropdown>
  </Nav>
</Navbar>
    );
  }
}
export default connect(null,{getHoldings})(Navigation);
// render(<NavDropdownExample />);
