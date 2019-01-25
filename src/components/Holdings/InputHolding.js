import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import {addHolding} from '../../actions/holdingsactions';

class InputHolding extends Component {

  constructor(props) {
      super(props);
      this.state = {
        token: "",
        amount: "",
        costbasis: "",
        wallet: "",
        formVisible: this.props.visible
      };
    }
    // Props available passed to component:
    // visible={this.state.openForm}
    // portfolioID={this.props.currentPortfolio.id}
  handleSubmit = e => {
    e.preventDefault()
    let data = { portfolio_id: this.props.portfolioID, ...this.state }
    this.props.addHolding(data);
    this.setState({
      token: "",
      amount: "",
      costbasis: "",
      wallet: "",
      formVisible: false
    })

    // Can i change/toggle global state of show for to not render when submitted?
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
    // Set up form changes
  }

  render() {
    console.log("Form Visisble State:", this.state.formVisible)
    const showForm = (this.state.formVisible) ?
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
