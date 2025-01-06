import { useState } from "react";
function StateExample3(){
    const [color,setColor]=useState("green");
    return<div>
        <input type="radio" name="color" onChange={()=>setColor("Purple")} />
        {"Purple"}
        <br/>
        <input type="radio" name="color"onChange={()=>setColor("Red")} />
        {"Red"}
        <br/>
        <input type="radio" name="color" onChange={()=>setColor("Blue")}/>
        {"Blue"}
        <br/>
        <p style={{color:color}}>Hello!!! Ayushi Babariya </p>

    </div>
}
export default StateExample3