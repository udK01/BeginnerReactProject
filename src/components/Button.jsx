import PropTypes from "prop-types";

export default function Button(props) {
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

  // const handleClick = (e) => {
  //   e.target.textContent = `Ouch!`;
  // };

  return (
    <button className={props.className} onClick={(e) => props.function(e)}>
      {props.btnText}
    </button>
  );
}
Button.propTypes = {
  btnText: PropTypes.string,
  className: PropTypes.string,
  function: PropTypes.func,
};
Button.defaultProps = {
  btnText: "Click Me.",
  className: "button",
  function: () => {
    console.log("Default function executed.");
  },
};
