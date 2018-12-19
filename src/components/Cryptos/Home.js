import React, { Component } from 'react';
import CryptoCards from './CryptoCards'
import { Container, Row, Col } from 'reactstrap';
import Holdings from '../Portfolios/Holdings'
// import CreatePortfolio from '../Portfolios/CreatePortfolio'
// import Portfolios from '../Portfolios/Portfolios'
// Working on addHolding
import { connect } from 'react-redux';
// import {getHoldings} from '../../actions/holdingsactions';
//
// import { Route } from 'react-router-dom';


class Cryptos extends Component {
  render(){

    return (
      <Container>
        <Row>
          <Col xs="3">
            {/* <Portfolios /> */}
          </Col>
          <Col xs="8">
              <CryptoCards />
          </Col>
        </Row>
          {/* <Holdings currentPortfolio={this.props.currentPortfolio}  /> */}
          <br/>
      </Container>
    );
  }
};

  // export default Cryptos;
// export default Cryptos;

const mapStateToProps = (state) => {
    // console.log("Portfolios:", state.portfolios)
    return {
      currentPortfolio: state.currentPortfolio,
      showHoldings: state.showholdings}
}

export default connect(mapStateToProps)(Cryptos);
