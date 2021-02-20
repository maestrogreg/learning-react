import React , { Component } from 'react';
import './App.css';
import Greet from './Greet/Greet';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: ['Ekene', 'Greg'],
       age: [24, 25],
       showNames: false
    }
  }
  switchNameHandler = (newName1, newName2) => {
    this.setState({
      name: [newName1, newName2]
    })
  }
  setValueHandler = (event) => {
    this.setState({
      name: [event.target.value, "Charles"]
    })
  }
  toggleSetHandler = () => {
    const handleValue = this.state.showNames;
    this.setState({ showNames: !handleValue })
  }
  
  render(){
    const style= {
      backgroundColor: "white",
      border: "1px solid green",
      padding: "0.5rem",
      font: "inherit",
      cursor: "pointer"
    }
    let person = null;
    if(this.state.showNames){
      person =  
    <div>
      <Greet setValue={this.setValueHandler} name={this.state.name[0]} age={this.state.age[0]}/>
      <Greet name={this.state.name[1]}  age={this.state.age[1]} click={() => this.switchNameHandler("Chim", "Osi")}> , I love to sing</Greet> {/*This an easier way to write bind*/}
    </div>
    }

  return (
    
    <div className="App">
     <h2>Hey there!</h2>
       <button  style={style} onClick={this.toggleSetHandler}>
            show names
       </button> {/*The .bind() is used to pass a value from prop to function*/}
      {person}   
          
    </div>
  );
   }
}

export default App;

