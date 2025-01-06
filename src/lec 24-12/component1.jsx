import * as React from "react";
class Component2 extends React.Component{
    render(){
        return(
        <div>
            <h1>Welcome to The First React Code</h1>
            <h2>Ayushi Babariya</h2>
        </div>
        );
    }
}
class Component1 extends React.Component{
    render() {
        return(
            <div>
                <h1>Component2</h1>
                <h2>Hello world</h2>
                <Component2/>
            </div>
        );
    }
}

export default Component1;