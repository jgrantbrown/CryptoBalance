import React, { Component } from 'react';
import { connect } from 'react-redux';
// import InputHolding from './InputHolding'
import CryptoCards from './CryptoCards'
import { Container, Row, Col,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Holdings from '../Portfolios/Holdings'
import CreatePortfolio from '../Portfolios/CreatePortfolio'
import Portfolios from '../Portfolios/Portfolios'
// import { getHoldings} from '../../actions/holdingsactions';


class Cryptos extends Component {

  constructor(props) {
      super(props);
      this.state = {
         dropdownOpen: false,
         showHoldings: false,
         showAddForm: false,
         currentPortfolio: 0,
      };
    }

  toggle = () =>{
   this.setState({
     dropdownOpen: !this.state.dropdownOpen
   });
 }

 toggleShowHoldings = (portfolioID) =>{

   // getHoldings(portfolioID)
    // AFTER THE CALL TO getHoldings THIS SHOULD DISPATCH ?
   // Create action/reducer to ge the holdings for this portfolio
  this.setState({
    showHoldings: true,
    currentPortfolio: portfolioID
  });

}

toggleAddForm = () => {
  this.setState({
    showAddForm: true,
  });
}

  render(){

    const holdingslist = this.props.holdings.map((holding,index) => {
      return   (<tr key={index}>
        <td>{holding.token} </td>
        <td>{holding.wallet}</td>
        <td>{holding.amount}</td>
        <td>{holding.costbasis}</td>
        <td>market price holder</td>
        <td>{holding.amount * 3800}</td>
    </tr>);
    })

    return (
      <Container>

        <Row>
          <Col xs="3">
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>
                Portfolios
              </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Dropdown header</DropdownItem>
                  <DropdownItem  onClick={this.toggleAddForm}>Add Portfolio</DropdownItem>
                  {/* <DropdownItem onClick={this.toggleShowHoldings}>Portfolio 1 HArdcoded data</DropdownItem> */}
                  <Portfolios showHolding={this.toggleShowHoldings} />
                </DropdownMenu>
            </ButtonDropdown>
            {/* THis is the form for adding new protfolio after clicking add portfolio */}
            <CreatePortfolio showForm={this.state.showAddForm} />
          </Col>
          {/* Section for rendering token and pricing cards */}
          <Col xs="8"><CryptoCards />
          </Col>
      </Row>
          <br/>
          {/* Will render the holdings of a particular portfolio */}
      <Holdings
        // holdings={holdingslist}
        showHoldings={this.state.showHoldings}
        currentPortfolio={this.state.currentPortfolio} />
      </Container>
    );
  }
};

const mapStateToProps = (state) => {
    console.log("New State:", state.holding)
    return { holdings: state.holding}
}


  export default connect(mapStateToProps )(Cryptos);

  // NOTES: Need to grab the specfic portfolio and Id to pass the holdings and be able to display on click of that portfolio
