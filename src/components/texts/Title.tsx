import "./Title.css";

export function Title(props: { text: string }) {
  return <h1 className="title">{props.text}</h1>;
}
