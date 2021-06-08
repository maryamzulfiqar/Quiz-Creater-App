import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

import { ListGroup, Container, Card, Form, Button, Table,textarea } from 'react-bootstrap';
import {FormControlLabel, FormControl, FormLabel } from '@material-ui/core';
export class Second extends Component {
    continue = e => {
        e.preventDefault();
        this.props.forward();
      };
      back = e => {
        e.preventDefault();
        this.props.bward();
      };
  
      render() {
        const {
          choice: {qstn, points}
        } = this.props;
        const { choice, handleChange } = this.props;

        return  (
          <Container className="text-left"> 
          <Card floated='left'>
          <h5>        <Card.Header ><b>Question</b></Card.Header></h5>
          <Form >



<Form.Group controlId="qstn">
  <Form.Label><b>Question : {qstn}</b> </Form.Label>

</Form.Group>



<Form.Group controlId="type">
    <Form.Label>Type</Form.Label>
          <RadioGroup
            aria-label="Type"
            name="Type1"
            choice={choice}
            onChange={handleChange('radiobtn')}
            defaultValue={choice.radiobtn}    
          
          >
            <FormControlLabel value="Single Choice" label="Single Choice" control={<Radio />}  />
            <FormControlLabel value="Multiple Choice" label="Multiple Choice"  control={<Radio />}  />
            </RadioGroup>

            </Form.Group>
            <Form.Group controlId="points">
    <Form.Label>Total Point : </Form.Label>
    <Form.Label><b> {points}</b> </Form.Label>
  </Form.Group>



  <Card style={{ display: "flex"
      ,border:'1px solid black', width: '100%' , height:'30rem'}}>
        <h2 style={{   display: "flex",
          justifyContent: "center",
          alignItems: "center",width: '100%' , height:'3rem'}}>Choices</h2>



<br></br>
<Button style={{   display: "flex",
          justifyContent: "center",
          alignItems: "center",width: '100%' , height:'3rem'}}  variant="primary" onClick={this.continue} type="submit">
  Add Choice
  </Button>


</Card>
 
  <Button style={{ float : 'right' }} variant="primary" onClick={this.continue} type="submit">
    Create 
  </Button>





 
  <Button style={{ float : 'right' }} variant="danger" onClick={this.back} type="submit">
   cancelQuiz
  </Button>


          </Form>
            </Card>
            </Container>
    );
  }
}

export default Second;
