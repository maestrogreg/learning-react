import React , { Component } from 'react';
import './App.css';
import Greet from './Greet/Greet';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       persons: [
         {name: "Greg", age: 24},
         {name: "Sharon", age: 25}
       ],
       showNames: false
    }
  }
  switchNameHandler = (newName1, newName2) => {
    this.setState({
      persons: [
        {name: newName1, age: 24},
        {name: newName2, age: 25}
      ]
    })
  }
  setValueHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 24},
        {name: "Sharon", age: 25}
      ]
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
      <Greet setValue={this.setValueHandler} name={this.state.persons[0].name} age={this.state.persons[1].age}/>
      <Greet name={this.state.persons[1].name}  age={this.state.persons[1].age} click={() => this.switchNameHandler("Chim", "Anita")}> , I love to sing</Greet> {/*This an easier way to write bind*/}
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

