import React from "react";
import Child from "./Child";

/*In this example is the way to send data from child to parent class.
Note: Props can only pass down to children, cant pass up
      State is the onlyway to pass data upstream to parent class */

class Parent extends React.Component{
  state ={
    name: "",
  }

  handleCallback = (childData)=> { 
    this.setState({name: childData})
  }

  render(){
    const {name} =this.state;
    
    return(
      <div>
        <Child parentCallback = {this.handleCallback}/>
        {name}
      </div>
    );
  }
}

export default Parent
