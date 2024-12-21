import "./Description.css";

export function Description(props: { text: string }) {
  return <p className="description">{props.text}</p>;
}
