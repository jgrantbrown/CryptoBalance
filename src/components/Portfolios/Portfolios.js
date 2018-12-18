import React, { Component } from 'react';
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import Holdings from '../Portfolios/Holdings'
import CreatePortfolio from '../Portfolios/CreatePortfolio'
import Portfolio from '../Portfolios/Portfolio'
import {getHoldings} from '../../actions/holdingsactions';
// Working on addHolding
import { connect } from 'react-redux';

class Portfolios extends Component {
  constructor(props) {
        super(props);
        this.state = {
           dropdownOpen: false,
           showHoldings: false,
           showAddForm: false,
           openForm: false,
        };
      }

      handleAddCoin = e => {
        e.preventDefault()
        this.setState({
          openForm: true,
        })
        // USe a route to rerender and expose the form
        // Render the </InputHolding>
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
       // console.log("Setting current portfolio of clicked:", portfolio)
       this.setState({
        showHoldings: true,
      });
      // CAN I SET STATE TO OF CURRENT PORTFOLIO TO portfolio?
      this.props.getHoldings(portfolio)
    }


  render() {
    return (
      <div>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Portfolios
          </DropdownToggle>
            <DropdownMenu>
              <DropdownItem  header>Choose or Add</DropdownItem>
              <DropdownItem   onClick={this.toggleAddForm}>Add Portfolio</DropdownItem>
              {/* THis renders a drop down list of the porfolios clcikable  */}
              <Portfolio  toggleShowHoldings={this.toggleShowHoldings}/>
            </DropdownMenu>
        </ButtonDropdown>
        {/* THis is the form for adding new protfolio after clicking add portfolio */}
        <CreatePortfolio showForm={this.state.showAddForm} />
      </div>
    )
  }}

  const mapStateToProps = (state) => {
      // console.log("Portfolios:", state.portfolios)
      return { portfolios: state.portfolios}
  }

  export default connect(mapStateToProps,{getHoldings})(Portfolios);
