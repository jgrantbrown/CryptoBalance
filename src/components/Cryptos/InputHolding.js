import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';

class InputHolding extends Component {

  constructor(props) {
      super(props);
      this.state = {
        token: "",
        amount: "",
        costbasis: "",
        wallet: ""
      };

    }

  handleSubmit = e => {
    e.preventDefault()
    debugger
    //  USe this.state to add to portfolio
    // USe a route to rerender and expose the form
    // Render the </InputHolding>
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
            <Col sm={10}>
              <Input type="text" name="amount" id="exampleAmount" placeholder="amount placeholder" onChange={event => this.handleChange(event)} />
            </Col>
          </FormGroup>

           <FormGroup row>
             <Label for="exampleToken" sm={2}>Token</Label>
             <Col sm={10}>
               <Input type="text" name="token" id="exampleToken" placeholder="token placeholder" onChange={event => this.handleChange(event)}/>
             </Col>
           </FormGroup>

           <FormGroup row>
             <Label for="exampleCostbasis" sm={2}>Costbasis</Label>
             <Col sm={10}>
               <Input type="text" name="costbasis" id="exampleCostbasis" placeholder="Costbasis placeholder" onChange={event => this.handleChange(event)} />
             </Col>
           </FormGroup>

           <FormGroup row>
             <Label for="exampleWallet" sm={2}>Wallet</Label>
             <Col sm={10}>
               <Input type="text" name="wallet" id="exampleWallet" placeholder="Wallet placeholder" onChange={event => this.handleChange(event)}/>
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

  export default connect(null,{})(InputHolding);
