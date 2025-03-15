import React from 'react';
import { Card } from 'react-bootstrap'
import './App.css';

class App extends React.Component{
  state = {
      Person: {
      fullName: "James Bond",
      bio: "Just a normal civilian man, definetely not a spy",
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/5/52/PierceBrosnanCannesPhoto2_b.jpg",
      profession: "Cold Blooded Cold Storage Worker",
    },
     show: true,
     timeElapsed:0
  };

  componentDidMount(){ //runs once the component is first added to the page
    this.timer =  //a reference to the timer
    setInterval(() => { //runs a function every 1 second
      this.setState(prevState => ({ //prevState is the previous state of the component
        timeElapsed: prevState.timeElapsed + 1
      }))
    }, 1000);
  }

  //TODO: clearInterval not working
  componentWillUnmount() { //runs when the component is removed
    clearInterval(this.timer);
  }

    //showProfile = () => this.state.show === false ? console.log(null): console.log(this.state.Person);
   showProfile = () => this.state.show === false ? this.setState({show: true}) : this.setState({show: false});  
   
  render() {
    return (
      <div className='text-center'>
        <button onClick={this.showProfile} className='border-warning rounded'>
          {this.state.show ? "Hide Profile" : "Show Profile"}
        </button>

        <p>Time elapsed since mount: {this.state.timeElapsed} seconds</p>

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
