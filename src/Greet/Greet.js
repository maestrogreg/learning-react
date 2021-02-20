import React from 'react';
import '../Greet.css'
const greet = (props) => {
    return (<div className="Greet" >
        <h1 onClick={props.click}> I am {props.name} {props.children}, {props.age} years old.</h1>
          <input type="text" onChange={props.setValue} value={props.name} />
          </div>);
}

export default greet;