import React, { Component } from 'react';
import { Row} from 'reactstrap';
import CryptoCard from './CryptoCard'


class CryptoCards extends Component {


  render(){
    // get data from databse and change the <cryptocard> to render one card for each coin also change the cryptocard.js
    // to represent just one card
    return(
      <div>
          <h1> Current Market Prices</h1>
          <Row>
            <CryptoCard />
          </Row>
      </div>
    )
  }

}

// Notes:
// Use these when we have access to builindg data for each crypto price card
// import CryptoCard from './CryptoCard';



export default CryptoCards;
