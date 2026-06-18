import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from './Components/Footer';
//import Car from './Components/Car';
//import Garage from './Components/Garage';
//import Header from './Components/Header';
// import FavoriteColor from './Components/FavoriteColor';
// import FavoriteClass from './Components/FavoriteClass';
// import MultipleState from './Components/MultipleState';
// import ReactList from './Components/ReactList';
// import UseEffect from './Components/useEffect';
// import FormFunction from './Components/FormFunction';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Garage/> */}
    {/* <Header/> */}
     <App/> 
     <Footer/>
     {/* <Home/> */}
    {/* <FavoriteColor/>
    <FavoriteClass/>
    <MultipleState/>
    <ReactList/>
    <UseEffect/>
    <FormFunction/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
