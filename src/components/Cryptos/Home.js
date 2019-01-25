import React, { Component } from 'react';
import CryptoCards from './CryptoCards'
import { Container, Row, Col } from 'reactstrap';

import { connect } from 'react-redux';

class Cryptos extends Component {
  render(){

    return (
      <Container>
        <Row>
          <Col xs="3">
          </Col>
          <Col xs="8">
              <CryptoCards />
          </Col>
        </Row>
          <br/>
      </Container>
    );
  }
};


const mapStateToProps = (state) => {
    return {
      currentPortfolio: state.currentPortfolio,
      showHoldings: state.showholdings}
}

export default connect(mapStateToProps)(Cryptos);
