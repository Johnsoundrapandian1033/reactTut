import { useEffect, useState } from "react"

function UseEffect(){
    const [count, setCount] = useState(1);
    // useEffect(() => {
    //    console.log("I am Ready! ");
    //  //  addCondition();
    //    setTimeout(()=>{
    //      setCount(previous => {return previous+1});
    //    },(1000))
    // },[count])
   
    function addCondition(){
        if(count > 10){
            setCount(1);
        }
    }

    function addCount(){
        setCount(previous => {return previous+1});
    }
    return <>
             <h1> I have count {count} times</h1>
             <button onClick={addCount}>addCount</button>
          </>
}

export default UseEffect;