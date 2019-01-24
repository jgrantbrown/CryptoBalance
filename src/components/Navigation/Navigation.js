import React, { Component } from 'react';
import Home from '../Cryptos/Home'

import './Navigation.css';
// import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import About from '../Navigation/About'
import Portfolio from '../Portfolios/Portfolio'
// import { Container, Row, Col,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// import { connect } from 'react-redux';
// import {getHoldings} from '../../actions/holdingsactions';



class Navigation extends Component {

  render() {

    return (
      <div>
          <div className="NavBarStyle" >
            <Link to="/"  className="NavStyle"> Home </Link>
            <Link to="/About" className="NavStyle" > About </Link>
            {/* <Link to="/About" style={navstyle} > About </Link> */}
            <Link to="/Portfolios" className="NavStyle" > Portfolio </Link>
          </div>
        <header className="App-header">
          <p className="NavStyle" >Crypto Price and Portfolio Analysis </p>
        </header>
          <div className="Body-container">
              <Route exact path="/" component={Home} />
              <Route exact path="/About" component={About}/>
              <Route exact path="/Portfolios" component={Portfolio}/>
          </div>
      </div>
    );
  }
   }




 export default Navigation;
