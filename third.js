import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Checkbox } from '@material-ui/core';
import { ListGroup, Container, Card, Form, Button, Table,textarea } from 'react-bootstrap';
import {FormControlLabel, FormControl} from '@material-ui/core';
export class Third extends Component {
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
          choice: {qstn, points, radiobtn}
        } = this.props;
        const { choice, handleChange } = this.props;

        return  (
          <Container className="text-left"> 
          <Card floated='left'>
          <h5>        <Card.Header ><b>Choice</b></Card.Header></h5>
          <Form >

<Form.Group controlId="qstn">
  <Form.Label><b>Question : {qstn}</b> </Form.Label>
</Form.Group>


<Form.Group controlId="checkb">
            <FormControlLabel
          control={
            <Checkbox
              value="correct option"
              choice={choice}
              onChange={handleChange('cbox')}
              defaultValue={choice.cbox}   
            />
          }
          label="correct option"
        />
        </Form.Group>

  <Button style={{ float : 'right' }} variant="primary" onClick={this.continue} type="submit">
  Add Choice
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

export default Third;
