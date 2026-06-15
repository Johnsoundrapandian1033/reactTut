import React from "react";
//import { useState } from "react";
class FavoriteClass extends React.Component{
    constructor(){
        super();
        this.state = {color:"Green", obj:"Forest"};
    }
    render(){
        //const [color, setColor] = useState("green");
        return <>
                 <h1> I like this {this.state.color} color {this.state.obj}</h1>
                 <button onClick={()=>{this.setState(previous => {return {...previous,color:"Black"}})}}>Click</button>
               </>
    }
}
export default FavoriteClass;