import React, { Component } from 'react';
// import { Table ,Row} from 'reactstrap';

import { connect } from 'react-redux';

import Holding from './Holding'

class Holdings extends Component {

  constructor(props) {
      super(props);
      this.state = {
        counter: 0,
      };
    }

    handleClick = (e) =>{
      e.preventDefault()
          this.setState({
            counter: (this.state.counter + 1)
          })
          // this.setState(prevState => ({ counter: prevState.counter+ 1 }));
        }

  render() {


    const oneholding = (this.props.currentPortfolio.holdings) ? this.props.currentPortfolio.holdings.map((holding,index) =>
       <Holding holding={holding} key={index} />) : <p>Not Here</p>

    return (
      <>
        {oneholding}
      </>
    )
  }}

  const mapStateToProps = (state) => {
      // console.log("Portfolios:", state.portfolios)
      return {
        currentPortfolio: state.currentPortfolio
      }
  }

  export default connect(mapStateToProps)(Holdings)
