import React from 'react';
import { Card } from 'react-bootstrap'
import './App.css';

//making it class-based
class App extends React.Component{
  state = {
      Person: {
      fullName: "James Bond",
      bio: "Just a normal civilian man, definetely not a spy",
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/5/52/PierceBrosnanCannesPhoto2_b.jpg",
      profession: "Cold Blooded Cold Storage Worker",
    },
     show: false,
     timeElapsed:0
  };
   // start the timer when component is mounted
   componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(prevState => ({ timeElapsed: prevState.timeElapsed + 1 }));
    }, 1000);
  }

  // stop the timer when the component is unmounted
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  //toggle profile visibility without managing the timer
  showProfile = () => {
    this.setState(prevState => ({ show: !prevState.show, timeElapsed: 0 }));
  };
  
  render() { //render(), always used in class components
    return (
      <div className='text-center'>
        <button onClick={this.showProfile} className='border-warning rounded'>
          {this.state.show ? "Hide Profile" : "Show Profile"}
        </button>

        <p>Time elapsed since mount: {this.state.timeElapsed} seconds</p>

        {/* if it is true display the card*/}
        {this.state.show && (
          <div className="d-flex justify-content-center mt-2"> {/*centers the card*/}
          <Card className="text-center w-25 p-3 border-warning border-4 bg-warning-subtle">
            <Card.Body>
              <Card.Img src={this.state.Person.imgSrc} alt={this.state.Person.fullName} className="w-50 rounded mb-3"/>
              <Card.Text><b>Name</b>: <i>{this.state.Person.fullName}</i></Card.Text>
              <Card.Text><b>Bio</b>: {this.state.Person.bio}</Card.Text>
              <Card.Text><b>Profession</b>: {this.state.Person.profession}</Card.Text>
              <Card.Text> <strong>007</strong> </Card.Text>
            </Card.Body>
          </Card>
        </div>
        
          
        )}

        
      </div>
    )
  }
}

export default App;
