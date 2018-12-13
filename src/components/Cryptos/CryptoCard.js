import React, { Component } from 'react';
import { Row, Col,Card, CardImg, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';
import { connect } from 'react-redux';
// Will use this to render each crypto currency price card

class CryptoCard extends Component {





  render(){
    const cryptoCard = this.props.cryptos.map((crypto,index) =>
          <Col key={index} sm="4">
        <Card  body style={{ backgroundColor: "#44014C", width: "175px", minHeight: "100px"}}>
        <CardImg top width="90%" src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>{crypto.base}</CardTitle>
          <CardSubtitle>${crypto.amount}</CardSubtitle>
        </CardBody>
      </Card>
    </Col>
    )


    return(
      <div>
          <Row>
            {cryptoCard}
          </Row>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
    console.log("New State in Crypto:", state.cryptos)
    return { cryptos: state.cryptos }
}

export default connect(mapStateToProps)(CryptoCard);
