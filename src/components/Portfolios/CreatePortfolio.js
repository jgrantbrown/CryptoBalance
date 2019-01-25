import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input  } from 'reactstrap';
import {addPortfolio} from '../../actions/holdingsactions';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';



class CreatePortfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
        };
      }

    handleSubmit = e => {
      e.preventDefault()
      // console.log("Trying to add portfolio:",this.state)
      this.props.addPortfolio(this.state)
      this.setState({
        name: ""
      });
  
      this.props.history.push('/Portfolios');
    }

    handleChange = evt => {
      this.setState({ [evt.target.name]: evt.target.value });
      // Set up form changes
    }

    render() {
      const showForm = (this.props.showForm) ?
          <>
            CREATE A Portfolio:
            <Form onSubmit={(e)=>this.handleSubmit(e)}>
              <FormGroup row>
                <Label for="exampleName" sm={5}>Name</Label>
                <Col sm={5}>
                  <Input type="text" name="name" id="exampleName"  placeholder="name placeholder" value={this.state.name} onChange={event => this.handleChange(event)} />
                </Col>
              </FormGroup>
               <input
                 type="submit"
                />
           </Form>
         </>
        :
         <div></div>

        return (
          <div>
            {showForm}

          </div>
        )

    }}



  export default withRouter(connect(null,{addPortfolio})(CreatePortfolio));
