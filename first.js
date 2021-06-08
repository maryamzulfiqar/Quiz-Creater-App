import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Container, Card, Form, Button, Table,textarea } from 'react-bootstrap';;
export class First extends Component {
    continue = e => {
        e.preventDefault();
        this.props.forward();
      };
  render() {
    const { choice, handleChange } = this.props;
    return (
        <Container className="text-left"> 
        <Card floated='left'>
        <h5>        <Card.Header className="text-center" >Create Your Quiz</Card.Header></h5>
        <Form>
  <Form.Group controlId="title">
    <Form.Label>Quiz Ttile</Form.Label>
    <Form.Control type="text"
              onChange={handleChange('title')}
             
           
            />
  </Form.Group>

  <Form.Group controlId="points">
    <Form.Label>Total Point</Form.Label>
    <Form.Control type="text"  onChange={handleChange('points')}
              />
  </Form.Group>



  <Form.Group controlId="timeAllowed">
    <Form.Label>Total time allowed</Form.Label>
    <Form.Control type="text"   onChange={handleChange('timeAllowed')}
            />
  </Form.Group>


  <Form.Group controlId="deadline">
    <Form.Label>Deadlines</Form.Label>
    <Form.Control type="date"   onChange={handleChange('deadline')}
           />
  </Form.Group>

  <Card style={{ display: "flex"
      ,border:'1px solid black', width: '100%' , height:'30rem'}}>

<br></br>
<Form.Group controlId="timeAllowed">
 
    <Form.Control type="text"          onChange={handleChange('qstn')}
            
            placeholder="Write Your Question" />
  </Form.Group>




<br></br>
<Button style={{   display: "flex",
          justifyContent: "center",
          alignItems: "center",width: '100%' , height:'3rem'}}  variant="primary" onClick={this.continue} type="submit">
  Add QUestion
  </Button>


</Card>
 
  <Button style={{ float : 'right' }} variant="primary" onClick={this.continue} type="submit">
    Create Quiz
  </Button>





 
  <Button style={{ float : 'right' }} variant="danger" onClick={this.clear} type="submit">
   cancelQuiz
  </Button>

</Form>
            </Card>
            </Container>
    );
  }
}

export default First;
