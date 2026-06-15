import './Header.css';
import styles from  './Header.module.css';
function Header(){
    // const myStyle = {
    //     color : "red",
    //     backgroundColor:"lightblue",
    //     padding : "10px"
    // }
    return <>
                {/* <h1 style={{color:"red", backgroundColor:"lightblue"}}> Hello Styling </h1> */}
                {/* <h1 style={myStyle}> Hello Styling </h1> */}
                <h1 className = {styles.bigblue}> Hello Styling </h1>
                <p> add a little style </p>
            </>
}
export default Header;