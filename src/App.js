//import logo from './logo.svg';
import './App.css';
import Garage from './Components/Garage';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Apple from './Components/Apple';
import FavoriteColor from './Components/FavoriteColor';
import User from './Components/User';
import FormFunction from './Components/FormFunction';
import HttpTrail from './HttpUse/HttpTrail';
function App() {
  const appleinfo = {type : "kashmir", color : "Red"};
  return (
    <div className="App">
        <BrowserRouter>
          <ul>
            <li><Link to = '/'>Home</Link></li>
            <li><Link to = '/component/garbage'>Garpage</Link></li>
            <li><Link to = '/component/apple'>Apple</Link></li>
            <li><Link to = '/component/favColor'>Favorite Color</Link></li>
            <li><Link to = '/user/1'>User 1</Link></li>
            <li><Link to = '/user/2'>User 2</Link></li>
            <li><Link to = '/component/formFunction'>Form function</Link></li>
            <li><Link to = '/httpTrail'>Http Trail</Link></li>
          </ul>
          <Routes>
            
            <Route path ='/user/:id' element = {<User/>}></Route>
            <Route path = '/component'>
              <Route path ='garbage' element = {<Garage/>}></Route>
              <Route path ='apple' element = {<Apple appleinfo={appleinfo}/>}></Route>
              <Route path ='favColor' element = {<FavoriteColor/>}></Route>
              <Route path ='formFunction' element = {<FormFunction/>}></Route>
            </Route>
            <Route path='/httpTrail' element = {<HttpTrail/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
