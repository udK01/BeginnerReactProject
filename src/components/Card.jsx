import ProfilePicture from "./ProfilePicture";
import PropTypes from "prop-types";

export default function Card(props) {
  return (
    <div className="card">
      <ProfilePicture className="card-image" imageUrl={props.imageUrl} />
      <h2 className="card-title">{props.name}</h2>
      <p className="card-text">{props.occupation}</p>
    </div>
  );
}
Card.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  occupation: PropTypes.string,
};
Card.defaultProps = {
  imageUrl: "./src/assets/react.svg",
  name: "Guest",
  occupation: "NPC",
};
