import React, { Component } from 'react';
import Home from '../Cryptos/Home'
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import About from '../Navigation/About'
// import Portfolios from '../Portfolios/Portfolios'

// import { connect } from 'react-redux';
// import {getHoldings} from '../../actions/holdingsactions';


class Navigation extends Component {

  render() {
    const about = () => {
      return (
        <div>
          <About/>
        </div>)
    }

    const home = () => {
      return (
        <div>
          <Home/>
        </div>)
    }


    const navstyle ={
      textDecoration: 'none',
      color: 'black',
      padding: '10',
      margin: '10',
      backgroundColor: "orange",
      color: "#333",
      display: "inline-block",
      fontFamily: "monospace",
      fontSize: '32'}

    return (
      <div>
        <Navbar >
        <Nav style={{flexDirection: "row"}}>
          <NavItem style={navstyle} >
            <Link to="/"> Home </Link>
          </NavItem>
          <NavItem style={navstyle}>
            <Link to="/About"> About </Link>
          </NavItem>
      </Nav>
      </Navbar>
      <header className="App-header">
        <p style={navstyle} >Crypto Price and Portfolio Analysis </p>

      </header>
      <div className="Body-container">
        <Route exact path="/About" component={about} />
        <Route exact path="/" component={home} />
      </div>
</div>
    );
  }
 }






export default Navigation;
// render(<NavDropdownExample />);
