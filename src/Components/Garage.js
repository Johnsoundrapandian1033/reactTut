import Car from './Car';
import Apple from './Apple';

function Garage(){
   // const brand = "Hundai";
   // const color = "black";
   const car = {
       brand : "Hundai",
       color : "black"
   };
const carList = [
    {brand : "BMW", color : "black"},
    {brand :"AUDI", color : "red"},
    {brand : "TOYATA", color : "whiite"}
]
const numList = [1,2,3,4,5,6,6];
   //const car = {};
   const appleinfo = {
      type : "fuji",
      color: "red"
   }
  return (
    <>
      <h2> who live inside my Garage?</h2>
      {/* <Car brand={brand} color = "black" /> */}
      {car.brand !== undefined && car.color !== undefined ?
      <Car car={car} />: null}
      <Apple appleinfo ={appleinfo}/>
      <ul>{carList.map((car) => <li key ={car.brand}>< Car car={car} /></li>) }</ul>
      <ul>{numList.map((num,index) => <p key = {index} >{num}</p>) }</ul>

    </>
    
    
  );
}

export default Garage;