import { useState } from "react";

function ReactList(){
    const [list, setList] = useState(["Apple","Banana","Coconut"]);
    const [count,setCount] = useState(4);
    function addOne(){
        const item = 'item'+count;
        setList((previous) => { return [...previous,item]});
        setCount((previous) => {return previous+1});
        console.log(list);
    }
    return <>
               <button onClick={addOne}> add Item</button>
                <ul>
                    {list.map ((val,index) => <li key = {index}>{val}</li>)}
                </ul>
            </>
}
export default ReactList;