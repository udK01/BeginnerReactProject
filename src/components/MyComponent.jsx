import { useEffect, useState, useRef } from "react";

export default function MyComponent() {
  return <></>;
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

// import Button from "./Button";

// const [cars, setCars] = useState([]);
// const [carYear, setCarYear] = useState(new Date().getFullYear());
// const [carMake, setCarMake] = useState("");
// const [carModel, setCarModel] = useState("");

// function handleAddCar() {
//   const newCar = { year: carYear, make: carMake, model: carModel };
//   setCars((prevCars) => [...prevCars, newCar]);

//   setCarYear(new Date().getFullYear());
//   setCarMake("");
//   setCarModel("");
// }

// function handleRemoveCar(index) {
//   setCars((prevCars) => prevCars.filter((_, i) => i !== index));
// }

// function handleYearChange(e) {
//   setCarYear(e.target.value);
// }

// function handleMakeChange(e) {
//   setCarMake(e.target.value);
// }

// function handleModelChange(e) {
//   setCarModel(e.target.value);
// }

// <div>
//   <h2>List of Car Objects:</h2>
//   <ul>
//     {cars.map((car, index) => (
//       <li key={index} onClick={() => handleRemoveCar(index)}>
//         {car.year} {car.make} {car.model}
//       </li>
//     ))}
//   </ul>
//   <br />
//   <input type="number" value={carYear} onChange={(e) => handleYearChange(e)} />
//   <br />
//   <input type="text" value={carMake} onChange={(e) => handleMakeChange(e)} />
//   <br />
//   <input type="text" value={carModel} onChange={(e) => handleModelChange(e)} />
//   <br />
//   <Button btnText={"Add Car"} function={handleAddCar} />
// </div>;

/////////////////////////////////////////////////////////////////////////

// Example 6.

// import Button from "./Button";

// const [count, setCount] = useState(0);
// const [color, setColor] = useState("green");

// useEffect(() => {
//   document.title = `Count ${count} ${color}`;
// }, [count, color]);

// function addCount() {
//   setCount((prevCount) => prevCount + 1);
// }

// function subtractCount() {
//   setCount((prevCount) => prevCount - 1);
// }

// function changeColor() {
//   setColor((prevColor) => (prevColor === "green" ? "red" : "green"));
// }

// <p style={{ color: color }}>Count: {count}</p>
// <Button btnText={"Add"} function={addCount} />
// <Button btnText={"Subtract"} function={subtractCount} />
// <br />
// <Button btnText={"Change Color"} function={changeColor} />

/////////////////////////////////////////////////////////////////////////

// Example 7.

// const [width, setWidth] = useState(window.innerWidth);
// const [height, setHeight] = useState(window.innerHeight);

// useEffect(() => {
//   window.addEventListener("resize", handleResize);
//   console.log("EVENT LISTENER ADDED");

//   return () => {
//     window.removeEventListener("resize", handleResize);
//     console.log("EVENT LISTENER REMOVED");
//   };
// }, []);

// useEffect(() => {
//   document.title = `Size: ${width} x ${height}`;
// }, [width, height]);

// function handleResize() {
//   setWidth(window.innerWidth);
//   setHeight(window.innerHeight);
// }

// <p>Window Width {width}px</p>
// <p>Window Height {height}px</p>

/////////////////////////////////////////////////////////////////////////

// Example 7.

// import Button from "./Button";

// const inputRef1 = useRef(null);
// const inputRef2 = useRef(null);
// const inputRef3 = useRef(null);

// useEffect(() => {
//   console.log("COMPONENT RENDERED");
// });

// function handleClick1() {
//   inputRef1.current.focus();
//   inputRef1.current.style.backgroundColor = "yellow";
//   inputRef2.current.style.backgroundColor = "";
//   inputRef3.current.style.backgroundColor = "";
// }

// function handleClick2() {
//   inputRef2.current.focus();
//   inputRef1.current.style.backgroundColor = "";
//   inputRef2.current.style.backgroundColor = "yellow";
//   inputRef3.current.style.backgroundColor = "";
// }

// function handleClick3() {
//   inputRef3.current.focus();
//   inputRef1.current.style.backgroundColor = "";
//   inputRef2.current.style.backgroundColor = "";
//   inputRef3.current.style.backgroundColor = "yellow";
// }

// <Button btnText={"Click Me 1!"} function={handleClick1} />
// <input ref={inputRef1} />
// <Button btnText={"Click Me 2!"} function={handleClick2} />
// <input ref={inputRef2} />
// <Button btnText={"Click Me 3!"} function={handleClick3} />
// <input ref={inputRef3} />

/////////////////////////////////////////////////////////////////////////

// Example 8.

/////////////////////////////////////////////////////////////////////////
