import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class CryptoPrices extends Component {
  render(){
    return(
      <Container>
        <Row>
          <Col style={{ backgroundColor: "#44014C", width: "175px", minHeight: "100px"}}>
                <h2 style={{ padding: "10px 10px", textAlign: "center", color: "white"}}>
                  ETH:
                  $117.00
                 </h2></Col>
        <Col style={{ backgroundColor: "#44014C", width: "175px", minHeight: "100px"}}>
              <h2 style={{ padding: "10px 10px", textAlign: "center", color: "white"}}>
                ETH:
                $117.00
               </h2></Col>
        <Col style={{ backgroundColor: "#44014C", width: "175px", minHeight: "100px"}}>
                 <h2 style={{ padding: "10px 10px", textAlign: "center", color: "white"}}>
                   ETH:
                   $117.00
                  </h2></Col>
       </Row>
      </Container>

    )
  }

}



export default CryptoPrices;
