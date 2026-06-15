import { useState  } from "react";
import { useNavigate } from "react-router-dom";
function FormFunction(){
    // const [name, setName] = useState("");
    // const [age, setAge] = useState("");
    // const [mail, setMail] = useState("");
    const navigate = useNavigate();

    const [person, setPerson] = useState({});
    // function changeName(val){
    //     console.log(val);
    //     person.name = val;
    //     //setName(val);
        
    // }
    // function changeAge(val){
    //     console.log(val);
    //     person.age = val
    //    // setAge(val);
        
    // }
    // function changeMail(val){
    //     console.log(val);
    //     person.mail = val;
    //     //setMail(val);
        
    // }

    function simplyfy(e){
        const name = e.target.name;
        const value  = e.target.value;
        setPerson((previous) => {return {...previous, [name]:value }});
    }
    function submited(e){
        e.preventDefault();
       
        console.log(person);
         setPerson(person);
         navigate('/');
    }
    return <form onSubmit = {submited}>
        {/* <label>Enter Your Name : <input type = "text" id = "name" onChange = {(e) => {setPerson ((previous)=>{ return {...previous,name:e.target.value}})}} /></label>
        <label>Enter Your Age : <input type = "text" id = "age" onChange = {(e) => {setPerson((previous) => {return {...previous,age:e.target.value}})}} /></label>
        <label>Enter Your Gmail : <input type = "text" id = "mail" onChange = {(e) => {setPerson((previous) => {return {...previous,mail:e.target.value}})}} /></label> */}
        <label>Enter Your Name : <input type = "text" name="name" onChange = {simplyfy} /></label>
        <label>Enter Your Age : <input type = "text"  name= "age" onChange = {simplyfy} /></label>
        <label>Enter Your Gmail : <input type = "text" name= "mail"  onChange = {simplyfy} /></label>
        <input type="submit" value ="submit form"/>
    </form>
}
export default FormFunction;