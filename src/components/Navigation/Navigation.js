import React, { Component } from 'react';
import Home from '../Cryptos/Home'
// import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import About from '../Navigation/About'
import Portfolio from '../Portfolios/Portfolio'
// import { Container, Row, Col,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// import { connect } from 'react-redux';
// import {getHoldings} from '../../actions/holdingsactions';
// import './Navigation.css'

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

    const portfolios = () =>{
      return (
        <div>
          <Portfolio />
        </div>
      )
    }

    const navstyle ={
      textDecoration: 'none',
      color: 'black',
      padding: '10px',
      margin: '15px',
      backgroundColor: "orange",
      display: "inline-block",
      fontFamily: "monospace",
      fontSize: '150%',
      height: 'auto',
      }

      const navBarStyle ={
        color: 'black',
        backgroundColor: '#282c34',
        height: "AUTO",
      }

    return (
      <div>
          <div style={navBarStyle} >
            <Link to="/" style={navstyle}> Home </Link>
            <Link to="/About" style={navstyle}> About </Link>
            <Link to="/Portfolios" style={navstyle}> Portfolios </Link>

          </div>
        <header className="App-header">
          <p style={navstyle} >Crypto Price and Portfolio Analysis </p>
        </header>
          <div className="Body-container">
              <Route exact path="/" component={home} />
              <Route exact path="/About" component={about}/>
              <Route exact path="/Portfolios" component={portfolios}/>

          </div>

      </div>
    );
  }
   }




 export default Navigation;
