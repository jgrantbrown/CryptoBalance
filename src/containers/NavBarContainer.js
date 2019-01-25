import React, { Component } from 'react';
// import './Navigation.css';
import { Link } from 'react-router-dom';

class NavBarContainer extends Component {

  render() {

    return (
          <div className="NavBarStyle" >
            <Link to="/"  className="NavStyle"> Home </Link>
            <Link to="/About" className="NavStyle" > About </Link>
            <Link to="/Portfolios" className="NavStyle" > Portfolio </Link>
          </div>
    );
  }
   }




 export default NavBarContainer;
