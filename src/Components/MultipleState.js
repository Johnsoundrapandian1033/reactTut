import { useState } from "react";

function MultipleState(){
    const [obj, setObj] = useState({name : "John", age : '24', color : 'black', occupation:'developer'});
    // const [age, setAge] = useState("24");
    // const [color, setColor] = useState("Black");
    // const [occupation, setOccupation] = useState("Developer");
    function updateObj(){
        setObj(previous =>{return {...previous, color:'white', age : 25}}
            // {
            //     name:"arun",
            //     age:'25',
            //     color:'Gray',
            //     occupation:'AE'
            // }
        )
    }
    console.log("current state : ", obj);
    return <>
             <p>Name : {obj.name}</p>
             <p>Age : {obj.age}</p>
             <p>Color : {obj.color}</p>
             <p>Occupation : {obj.occupation}</p>
             <button onClick= {updateObj}>click</button>
            </>
}
export default MultipleState;