import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import { ListGroup, Container, Card, Form, Button, Table,textarea } from 'react-bootstrap';
import {FormControlLabel, FormControl, FormLabel } from '@material-ui/core';
export class Four extends Component {
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
          choice: {qstn, points,title,timeAllowed, deadline,radiobtn, cbox}
        } = this.props;
        const { choice, handleChange } = this.props;

        return  (
          <Container className="text-left"> 
          <Card floated='left'>
          <h5>        <Card.Header ><b>Question</b></Card.Header></h5>
          <Form >



<Form.Group controlId="qstn">
  <Form.Label><h2><b> {qstn}</b></h2> </Form.Label>
</Form.Group>


<Form.Group controlId="type">
    <Form.Label><b> Type</b> </Form.Label>
          <RadioGroup
            aria-label="Type"
            name="Type1"
            choice={choice}
            onChange={handleChange('radiobtn')}
            defaultValue={choice.radiobtn}    
          >

            <FormControlLabel value={radiobtn} label={radiobtn}  control={<Radio />} defaultChecked />
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
<Table striped bordered hover size="sm">
  <thead>
    <tr>
   
      <th>Text</th>
      <th>Is Corrct</th>
      <th>Choice</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{qstn}</td>
      <td>{cbox}</td>
   <td>{radiobtn}</td>
      <td>  <Button  variant="danger" onClick={this.back}>
   Delete
  </Button>
</td>
    </tr>

  </tbody>
</Table>
</Card>
 
  <Button style={{ float : 'right' }} variant="primary" onClick={this.continue}>
    Create 
  </Button>





 
  <Button style={{ float : 'right' }} variant="danger" onClick={this.back}>
   cancelQuiz
  </Button>


          </Form>
            </Card>
            </Container>
    );
  }
}

export default Four;
