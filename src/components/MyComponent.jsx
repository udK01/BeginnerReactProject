import Button from "./Button";
import { useState } from "react";

export default function MyComponent() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCars((prevCars) => [...prevCars, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function handleRemoveCar(index) {
    setCars((prevCars) => prevCars.filter((_, i) => i !== index));
  }

  function handleYearChange(e) {
    setCarYear(e.target.value);
  }

  function handleMakeChange(e) {
    setCarMake(e.target.value);
  }

  function handleModelChange(e) {
    setCarModel(e.target.value);
  }

  return (
    <div>
      <h2>List of Car Objects:</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <br />
      <input
        type="number"
        value={carYear}
        onChange={(e) => handleYearChange(e)}
      />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={(e) => handleMakeChange(e)}
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={(e) => handleModelChange(e)}
      />
      <br />
      <Button btnText={"Add Car"} function={handleAddCar} />
    </div>
  );
}

/////////////////////////////////////////////////////////////////////////

// Example 1.

// const [name, setName] = useState("Guest");
// const [age, setAge] = useState(0);
// const [isEmployed, setIsEmployed] = useState(false);

// const updateName = () => {
//   setName("Spongebob");
// };

// const incrementAge = () => {
//   setAge(age + 1);
// };

// const toggleEmployedStatus = () => {
//   setIsEmployed(!isEmployed);
// };

// <div>
// <p>Name: {name}</p>
// <button onClick={updateName}>Set Name</button>
// <p>Age: {age}</p>
// <button onClick={incrementAge}>Increment Age</button>
// <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
// <button onClick={toggleEmployedStatus}>Toggle Status</button>
// </div>

/////////////////////////////////////////////////////////////////////////

// Example 2.

// const [name, setName] = useState("Guest");
// const [quantity, setQuantity] = useState(1);
// const [comment, setComment] = useState("");
// const [payment, setPayment] = useState("");
// const [shipping, setShipping] = useState("Delivery");

// function handleNameChange(e) {
//   setName(e.target.value);
// }

// function handleQuantityChange(e) {
//   setQuantity(e.target.value);
// }

// function handleCommentChange(e) {
//   setComment(e.target.value);
// }

// function handlePaymentChange(e) {
//   setPayment(e.target.value);
// }

// function handleShippingChange(e) {
//   setShipping(e.target.value);
// }

// <div>
// <input value={name} onChange={handleNameChange} />
// <p>Name: {name}</p>

// <input type="number" value={quantity} onChange={handleQuantityChange} />
// <p>Quantity: {quantity}</p>

// <textarea
//   value={comment}
//   onChange={handleCommentChange}
//   placeholder="Enter delivery instructions"
// />
// <p>Comment: {comment}</p>

// <select value={payment} onChange={handlePaymentChange}>
//   <option value={""}>Select an option:</option>
//   <option value={"Visa"}>Visa</option>
//   <option value={"MasterCard"}>MasterCard</option>
//   <option value={"Gift Card"}>Gift Card</option>
// </select>
// <p>Payment: {payment}</p>

// <label>
//   <input
//     type="radio"
//     value={"Pick Up"}
//     checked={shipping === "Pick Up"}
//     onChange={handleShippingChange}
//   />
//   Pick Up
// </label>
// <br />
// <label>
//   <input
//     type="radio"
//     value={"Delivery"}
//     checked={shipping === "Delivery"}
//     onChange={handleShippingChange}
//   />
//   Delivery
// </label>
// <p>Shipping: {shipping}</p>
// </div>

/////////////////////////////////////////////////////////////////////////

// Example 3.

// const [car, setCar] = useState({ year: 1993, make: "Honda", model: "Civic" });

// function handleYearChange(e) {
//   setCar((prevCar) => ({ ...prevCar, year: e.target.value }));
// }

// function handleMakeChange(e) {
//   setCar((prevCar) => ({ ...prevCar, make: e.target.value }));
// }

// function handleModelChange(e) {
//   setCar((prevCar) => ({ ...prevCar, model: e.target.value }));
// }

// <div>
// <p>
//   Your favourite car is: {car.year} {car.make} {car.model}
//   <br />
//   <input type="number" value={car.year} onChange={handleYearChange} />
//   <br />
//   <input type="text" value={car.make} onChange={handleMakeChange} />
//   <br />
//   <input type="text" value={car.model} onChange={handleModelChange} />
//   <br />
// </p>
// </div>

/////////////////////////////////////////////////////////////////////////

// Example 4.

// import Button from "./Button";

// const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

// function handleAddFood() {
//   const newFood = document.getElementById("foodInput").value;
//   document.getElementById("foodInput").value = "";

//   setFoods((prevFoods) => [...prevFoods, newFood]);
// }

// function handleRemoveFood(index) {
//   setFoods(foods.filter((_, i) => i !== index));
// }

// <div>
// <h2>List of Food</h2>
// <ul>
//   {foods.map((food, index) => (
//     <li key={index} onClick={() => handleRemoveFood(index)}>
//       {food}
//     </li>
//   ))}
//   <input type="text" id="foodInput" placeholder="Enter food name" />
//   <Button btnText={"Add Food"} function={handleAddFood} />
// </ul>
// </div>

/////////////////////////////////////////////////////////////////////////

// Example 5.

/////////////////////////////////////////////////////////////////////////
