import { useState } from "react";
import Button from "./Button";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <p className="count-display">{count}</p>
      <Button
        className={"counter-button"}
        btnText={"Decrement"}
        function={decrement}
      />
      <Button className={"counter-button"} btnText={"Reset"} function={reset} />
      <Button
        className={"counter-button"}
        btnText={"Increment"}
        function={increment}
      />
    </div>
  );
}
