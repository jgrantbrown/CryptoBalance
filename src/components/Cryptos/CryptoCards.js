import React, { Component } from 'react';

import CryptoCard from './CryptoCard'
import { Container, Row, Col } from 'reactstrap';
import './CryptoCards.css';


class CryptoCards extends Component {
  render(){
    // get data from databse and change the <cryptocard> to render one card for each coin also change the cryptocard.js
    // to represent just one card
    return(
      <div className="CryptoMarket" >
          <h1> Current Market Prices</h1>
          <Container>
              <Col xs="10">
                <Row>
                  <CryptoCard />
                </Row>
              </Col>
              <br/>
          </Container>
      </div>
    )
  }

}

// Notes:
// Use these when we have access to builindg data for each crypto price card
// import CryptoCard from './CryptoCard';



export default CryptoCards;
