//import logo from './logo.svg';
import './App.css';
import Garage from './Components/Garage';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Apple from './Components/Apple';
import FavoriteColor from './Components/FavoriteColor';
import User from './Components/User';
import FormFunction from './Components/FormFunction';
import HttpTrail from './HttpUse/HttpTrail';
import Home from './Components/Home';
import logo from '../src/GM-Group2.png';
function App() {
  const appleinfo = {type : "kashmir", color : "Red"};
  return (
    <div className="App">
  <BrowserRouter>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <img
      src={logo}
      alt="GM Groups"
      style={{
        width: "140px",
        height: "70px"
      }}
    />
        <ul className="navbar-nav">

          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          {/* Dropdown */}
          <li className="nav-item dropdown">

            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Our Work
            </a>

            <ul className="dropdown-menu">

              <li>
                <Link
                  className="dropdown-item"
                  to="/component/garbage"
                >
                  Project 1
                </Link>
              </li>

              <li>
                <Link
                  className="dropdown-item"
                  to="/component/apple"
                >
                  Project 2
                </Link>
              </li>

            </ul>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/component/apple">
              Apple
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/component/favColor">
              Favorite Color
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/user/1">
              User 1
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/user/2">
              User 2
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/component/formFunction">
              Form Function
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/httpTrail">
              Http Trail
            </Link>
          </li>

        </ul>

      </div>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<User />} />

      <Route path="/component">
        <Route path="garbage" element={<Garage />} />
        <Route path="apple" element={<Apple appleinfo={appleinfo} />} />
        <Route path="favColor" element={<FavoriteColor />} />
        <Route path="formFunction" element={<FormFunction />} />
      </Route>

      <Route path="/httpTrail" element={<HttpTrail />} />
    </Routes>

  </BrowserRouter>
</div>
  );
}

export default App;
