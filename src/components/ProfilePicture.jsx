export default function ProfilePicture(props) {
  const imageUrl = props.imageUrl;

  return <img src={imageUrl} className={props.className}></img>;
}
