import { useState } from "react";

function FavoriteColor(){
   // let color =  "Blue";
    const [color,setColor] = useState('Blue') ;
    return <><h1>My favorite Color is {color}</h1>
         <button onClick= {() => {setColor('Red')}}>change color</button></>
}
export default FavoriteColor;