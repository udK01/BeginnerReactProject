import { useState } from "react";

export default function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Delivery");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }

  function handleCommentChange(e) {
    setComment(e.target.value);
  }

  function handlePaymentChange(e) {
    setPayment(e.target.value);
  }

  function handleShippingChange(e) {
    setShipping(e.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <p>Quantity: {quantity}</p>

      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter delivery instructions"
      />
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value={""}>Select an option:</option>
        <option value={"Visa"}>Visa</option>
        <option value={"MasterCard"}>MasterCard</option>
        <option value={"Gift Card"}>Gift Card</option>
      </select>
      <p>Payment: {payment}</p>

      <label>
        <input
          type="radio"
          value={"Pick Up"}
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        Pick Up
      </label>
      <br />
      <label>
        <input
          type="radio"
          value={"Delivery"}
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
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

/////////////////////////////////////////////////////////////////////////
