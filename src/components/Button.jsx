export default function Button() {
  // const styles = {
  //   backgroundColor: "hsl(200, 100%, 50%)",
  //   color: "white",
  //   padding: "10px 20px",
  //   borderRadius: "5px",
  //   border: "none",
  //   cursor: "pointer",
  // };

  // let count = 0;

  // const handleClick = (name) => {
  //   if (count < 3) {
  //     count++;
  //     console.log(`${name} clicked me ${count} times!`);
  //   } else {
  //     console.log(`${name} stop clicking me!`);
  //   }
  // };

  const handleClick = (e) => {
    e.target.textContent = `Ouch!`;
  };

  return (
    <button className="button" onClick={(e) => handleClick(e)}>
      Click Me
    </button>
  );
}
