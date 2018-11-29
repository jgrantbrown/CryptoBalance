import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardGroup } from 'reactstrap';

class CryptoPrices extends Component {
  render(){
    return(
      // <Container>
      //   <Row>
      //     <Col xs style={{ backgroundColor: "#44014C", width: "175px", minHeight: "100px"}}>
      //           <h2 style={{ padding: "10px 10px", textAlign: "center", color: "white"}}>
      //             ETH:
      //             $117.00
      //            </h2></Col>
      //   <Col  xs style={{ backgroundColor: "#44014C", width: "175px", minHeight: "100px"}}>
      //         <h2 style={{ padding: "10px 10px", textAlign: "center", color: "white"}}>
      //           ETH:
      //           $117.00
      //          </h2></Col>
      //   <Col  style={{ backgroundColor: "#44014C", width: "175px", minHeight: "100px"}}>
      //            <h2 style={{ padding: "10px 10px", textAlign: "center", color: "white"}}>
      //              ETH:
      //              $117.00
      //             </h2></Col>
      //  </Row>
      //
    // </Container>
    <Row>
      <Col sm="3">
      <Card  body style={{ backgroundColor: "#44014C", width: "175px", minHeight: "100px"}}>
      <CardImg top width="90%" src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt="Card image cap" />
      <CardBody>
        <CardTitle>BTC:</CardTitle>
        <CardSubtitle>$3900</CardSubtitle>
      </CardBody>
    </Card>
    </Col>

    <Col sm="3">
    <Card  body style={{ backgroundColor: "#44014C", width: "175px", minHeight: "100px"}}>
    <CardImg top width="90%" src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt="Card image cap" />
    <CardBody>
      <CardTitle>LTC:</CardTitle>
      <CardSubtitle>$3900</CardSubtitle>
    </CardBody>
  </Card>
  </Col>

  <Col sm="3">
  <Card body style={{ backgroundColor: "#44014C", width: "175px", minHeight: "100px"}}>
  <CardImg top width="90%" src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt="Card image cap" />
  <CardBody>
    <CardTitle>ETH:</CardTitle>
    <CardSubtitle>$3900</CardSubtitle>
  </CardBody>
</Card>
</Col>

</Row>

    )
  }

}



export default CryptoPrices;
