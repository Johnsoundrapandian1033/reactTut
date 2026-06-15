import { useEffect , useState } from "react";
import { EditableText,InputGroup } from "@blueprintjs/core";
import './style.css';

// const AppToaster = Toast.create({
//     position:"top"
// });
function HttpTrail(){
    const [user,setUser] = useState([]);
    let [name , setName] = useState("");
    let [email, setEmail] = useState("");
    let [website,setWebsite] = useState("");
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users").
        then(response => response.json()).
        then(response => setUser(response))
    },[]);
    console.log(user)
    function addOne(){
        name = name.trim();
        email = email.trim();
        website = website.trim();
        if(name && email && website){
            fetch("https://jsonplaceholder.typicode.com/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    website
                })
            })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setUser([...user, response]);
            })
            .catch(error => {
                console.error(error);
            });
            setName("");
            setEmail("");
            setWebsite("");
        }
    }
    function onChangeHandler(id,key,value){
            setUser(temp(id,key,value));
           
    }
    function temp(id,key,value){
        return user.map( user => {
               return user.id === id ? {...user,[key] : value} : user; 
            })
    }
    function userUpdate(id){
        const users =user.find((user) => user.id === id);
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(users)
            })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setUser([...user, response]);
            })
            .catch(error => {
                console.error(error);
            });
    }

    function userDelete(id){
        const users =user.find((user) => user.id === id);
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: "DELETE",
            })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setUser((users) => {
                    return users.filter(user => user.id != id);
                });
            })
            .catch(error => {
                console.error(error);
            });
    }
    return (
        <div className = "HttpTrail">
            <h1>Http Trail</h1>
            <table className ="bp4-html-table modifier">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Action</th>
                </tr>
                <tbody>
                    {user.map(user => 
                        <tr key = {user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td><EditableText value={user.email} onChange= {value => onChangeHandler(user.id,'email',value)} /></td>
                            <td><EditableText onChange = {value => onChangeHandler(user.id, 'website',value)} value = {user.website}></EditableText></td>
                            <td>
                                <button style= {{color: "blue"}} onClick= {() => userUpdate(user.id)}>Update</button>
                                <button  style= {{color: "red"}} onClick= {() => userDelete(user.id)}> Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td><InputGroup value ={name}
                                        onChange = {(e) => setName(e.target.value)}>
                            </InputGroup> </td>
                        <td><InputGroup value ={email}
                                        onChange = {(e) => setEmail(e.target.value)}>
                            </InputGroup> </td>
                        <td><InputGroup value ={website}
                                        onChange = {(e) => setWebsite(e.target.value)}>
                            </InputGroup> </td>
                        <td><button style = {{color:"green"}} onClick={addOne}>Add One</button></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );

}
export default HttpTrail;