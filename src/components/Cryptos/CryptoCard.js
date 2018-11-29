import React, { Component } from 'react';
import { Row, Col,Card, CardImg, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';

// Will use this to render each crypto currency price card
class CryptoCard extends Component {
  render(){
    const cryptocard = (
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
  </Row>
)

    return(
      <div>
        <h1> Current Market Prices</h1>
            {cryptocard}
      </div>
    )
  }

}



export default CryptoCard;
