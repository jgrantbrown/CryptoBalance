import React, { Component } from 'react';
import { Row, Col,Card, CardImg, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';



class CryptoCards extends Component {
  render(){
    return(
      <div>
  <h1> Current Market Prices</h1>
    <Row>
      <Col sm="4">
      <Card  body style={{ backgroundColor: "#44014C", width: "175px", minHeight: "100px"}}>
      <CardImg top width="90%" src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt="Card image cap" />
      <CardBody>
        <CardTitle>BTC:</CardTitle>
        <CardSubtitle>$3900</CardSubtitle>
      </CardBody>
    </Card>
    </Col>

    <Col sm="4">
    <Card  body style={{ backgroundColor: "#44014C", width: "175px", minHeight: "100px"}}>
    <CardImg top width="90%" src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt="Card image cap" />
    <CardBody>
      <CardTitle>LTC:</CardTitle>
      <CardSubtitle>$3900</CardSubtitle>
    </CardBody>
  </Card>
  </Col>

  <Col sm="4">
  <Card body style={{ backgroundColor: "#44014C", width: "175px", minHeight: "100px"}}>
  <CardImg top width="90%" src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt="Card image cap" />
  <CardBody>
    <CardTitle>ETH:</CardTitle>
    <CardSubtitle>$3900</CardSubtitle>
  </CardBody>
</Card>
</Col>

</Row>
</div>
    )
  }

}

// Notes:
// Use these when we have access to builindg data for each crypto price card
// import CryptoCard from './CryptoCard';
{/* <CryptoCard/> */}


export default CryptoCards;
