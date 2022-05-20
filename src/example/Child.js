import React from "react";

/*In this example is the way to send data from child to parent class.
There are two file for this example such as: Parent.js and Child.js
Note: Props can only pass down to children, cant pass up
      State is the onlyway to pass data upstream to parent class */

class Child extends React.Component{

    onTrigger =(event) => {
        this.props.parentCallback(event.target.myname.value);
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit = {
                    this.onTrigger}>
                        <input type = "text"
                        name = "myname" placeholder="Enter Name"/>
                        <br></br>
                        <input type ="submit" value ="Submit"/>
                    </form>
            </div>
        );
    }
}

export default Child
