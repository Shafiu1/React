import { getImageUrl } from "./Utils.jsx";
export default function Avatar(props) {
  return (
    <>
      <p>{props.person.name}</p>
      <img
        className="rounded-2xl"
        src={getImageUrl(props.person)}
        alt={props.person.name}
        width={props.size}
        height={props.size}
      />
    </>
  );
}