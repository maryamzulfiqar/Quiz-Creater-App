import React, { Component } from 'react';
import First from './first';
import Second from './second';
import Third from './third';
import Four from './four';
;export class Home extends Component {
  state = {
   title: '',
    points: '',
  timeAllowed: '',
    deadline: '',
    qstn: '',
    radiobtn:'',
    proceed: 1,
    cbox:'',
  };
 forward = () => {
    const { proceed } = this.state;
    this.setState({
        proceed: proceed + 1
    });
  };
bward = () => {
    const { proceed } = this.state;
    this.setState({
        proceed: proceed - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { proceed } = this.state;
    const { title,points,timeAllowed,deadline,qstn,radiobtn,cbox} = this.state;
    const choice = { title,points,timeAllowed,deadline,qstn ,radiobtn,cbox};

    switch (proceed) {
      case 1:
        return (
          <First
            forward={this.forward}
            handleChange={this.handleChange}
            choice={choice}
          />
        );
        case 2:
            return (
              <Second
              forward={this.forward}
                bward={this.bward}
                handleChange={this.handleChange}
                choice={choice}
              />
            );
            case 3:
              return (
                <Third
                forward={this.forward}
                bward={this.bward}
                handleChange={this.handleChange}
                choice={choice}
                />
              );
   
              case 4:
                return (
                  <Four
                  forward={this.forward}
                  bward={this.bward}
                  handleChange={this.handleChange}
                  choice={choice}
                  />
                );
     

          case 5:
            alert('your quiz created successfully');
            this.setState({
              proceed: 1,
              title: '',
              points: '',
            timeAllowed: '',
              deadline: '',
              qstn: '',
              radiobtn:'',
           
              cbox:'', 
          });

          return(
              
           
            <First
            forward={this.forward}
            handleChange={this.handleChange}
            choice={choice}
          />


            );


        }
    }
  
}

export default Home;
