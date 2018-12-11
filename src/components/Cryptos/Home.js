import React, { Component } from 'react';
import { connect } from 'react-redux';
import CryptoCards from './CryptoCards'
import { Container, Row, Col,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Holdings from '../Portfolios/Holdings'
import CreatePortfolio from '../Portfolios/CreatePortfolio'
import Portfolios from '../Portfolios/Portfolios'
import { getHoldings} from '../../actions/holdingsactions';
// import InputHolding from './InputHolding'

class Cryptos extends Component {

  constructor(props) {
      super(props);
      this.state = {
         dropdownOpen: false,
         showHoldings: false,
         showAddForm: false,
         currentPortfolio: [],
         currentPortfolioID: [],
      };
    }

  toggle = () =>{
   this.setState({
     dropdownOpen: !this.state.dropdownOpen
   });
 }

toggleAddForm = () => {
  this.setState({
    showAddForm: true,
  });
}

toggleShowHoldings = (portfolio) => {
   console.log("Setting current portfolio of clicked:", portfolio)
   this.setState({
    showHoldings: true,
    currentPortfolio: portfolio,
    currentPortfolioID: portfolio.id,
  });

  // return dispatch =>{this.props.getHoldings(portfolio.id)
  //    .then(response => dispatch(  {
  //        type: 'GET_HOLDINGS',
  //        payload: response
  //      }))
  //      .then (this.setState({
  //        showHoldings: true,
  //        currentPortfolio: portfolio,
  //        currentPortfolioID: portfolio.id,
  //      }));
  //  }


  // Call an action with the portfolio.id
      // this.props.getHoldings(portfolio.id)
}

  render(){
    return (
      <Container>

        <Row>
          <Col xs="3">
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>
                Portfolios
              </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem  header>Dropdown header</DropdownItem>
                  <DropdownItem   onClick={this.toggleAddForm}>Add Portfolio</DropdownItem>
                  {/* THis renders a drop down list of the porfolios clcikable  */}
                  <Portfolios  toggleShowHoldings={this.toggleShowHoldings}/>
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
        showHoldings={this.state.showHoldings}
        currentPortfolio={this.state.currentPortfolio}
        />
      </Container>
    );
  }
};

// SHOULD USE THIS TO PASS TO HOLDINGS COMPONENT currentPortfolio= this.props.portfolio
const mapStateToProps = (state) => {
    console.log("New State:", state.portfolios)
    return { portfolio: state.currentPortfolio}
}


  export default connect(mapStateToProps,{getHoldings})(Cryptos);
