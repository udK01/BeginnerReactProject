export default function ProfilePicture(props) {
  const imageUrl = props.imageUrl;

  // const handleClick = (e) => {
  //   e.target.style.display = "none";
  // };

  return <img src={imageUrl} className={props.className}></img>;
}
