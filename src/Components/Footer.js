import { Link } from "react-router-dom";
// import Home from './Home';
function Footer(){
    return (
        <footer className="bg-dark text-white mt-5">
         <div className = "row">
         <div className="col-md-4">
                <h4>ABC Groups</h4>
                <p>© 2026 ABC Groups</p>
            </div>
             <div className="col-md-4">
                <a href ="http://localhost:3000/">ABC Groups</a><br/>
                <a href= "https://www.google.com/">Google</a>
            </div>
            </div>
    </footer>
    )
}
export default Footer;