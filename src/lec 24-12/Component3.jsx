import * as React from "react";
class InputTest extends React.Component{
    render(){
        return (
            <div>
        <input type="text" placeholder="Enter Your Name:"/>
        <br/>
            <input type="checkbox"/>
            <label>Checkbox</label>
        <br/>
        <br/>
            <input type="radio"/>
            <label>Radiobutton</label>
        <br/>
        <br/>
            <input type="color"/>
            <label>colour pallete</label>
        <br/>
        <br/>
            <input type="button"/>
            <label>Button</label>
        <br/>
        <br/>
            <input type="file"/>
            <label>File</label>
        <br/>
        </div>
        );
    }

}
export default InputTest;