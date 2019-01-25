import React, { Component } from 'react';
import CryptoCards from '../Cryptos/CryptoCards'
import { Container, Row, Col } from 'reactstrap';



class Cryptos extends Component {
  render(){

    return (
      <div >
          <CryptoCards />
      </div>

    );
  }
};



export default Cryptos;
