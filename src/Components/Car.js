function Car(props){
   //const { brand, color } = props ;
   // const { color } = props;
    const { car } = props;
    //const { brand, color } = car ;
    const text =`Hi, Im a ${car.brand} ${car.color} car `; // Template String
  return (
    <h2> {text}</h2>
  );
}

export default Car;