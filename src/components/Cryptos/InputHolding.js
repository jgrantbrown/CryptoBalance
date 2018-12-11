import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import {addHolding} from '../../actions/holdingsactions';

class InputHolding extends Component {

  constructor(props) {
      super(props);
      this.state = {
        portfolio_id: this.props.portfolioID,
        token: "",
        amount: "",
        costbasis: "",
        wallet: ""
      };

    }
    // Props available passed to component:
    // visible={this.state.openForm}
    // portfolioID={this.props.currentPortfolio.id}
    //

  handleSubmit = e => {
    e.preventDefault()
      // State is not update here?
      this.props.addHolding(this.state)

    this.setState({
      portfolio_id: "",
      token: "",
      amount: "",
      costbasis: "",
      wallet: ""
    });
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
    // Set up form changes
  }



  render() {
    const showForm = (this.props.visible) ?

        <Form onSubmit={(e)=>this.handleSubmit(e)}>
          <FormGroup row>
            <Label for="exampleAmount" sm={2}>Amount</Label>
            <Col sm={5}>
              <Input type="text" name="amount" id="exampleAmount"  placeholder="amount placeholder" value={this.state.amount} onChange={event => this.handleChange(event)} />
            </Col>
          </FormGroup>

           <FormGroup row>
             <Label for="exampleToken" sm={2}>Token</Label>
             <Col sm={5}>
               <Input type="text" name="token" id="exampleToken" placeholder="token placeholder" value={this.state.token}  onChange={event => this.handleChange(event)}/>
             </Col>
           </FormGroup>

           <FormGroup row>
             <Label for="exampleCostbasis" sm={2}>Cost basis</Label>
             <Col sm={5}>
               <Input type="text" name="costbasis" id="exampleCostbasis" placeholder="Costbasis placeholder" value={this.state.costbasis} onChange={event => this.handleChange(event)} />
             </Col>
           </FormGroup>

           <FormGroup row>
             <Label for="exampleWallet" sm={2}>Wallet</Label>
             <Col sm={5}>
               <Input type="text" name="wallet" id="exampleWallet" placeholder="Wallet placeholder" value={this.state.wallet} onChange={event => this.handleChange(event)}/>
             </Col>
           </FormGroup>
           <input type="submit" />
       </Form>

       : <div> </div>

      return (
        <div>
          {showForm}
        </div>
      )

  }}

  export default connect(null,{addHolding})(InputHolding);
