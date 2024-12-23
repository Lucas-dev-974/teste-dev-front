import "./Text.css";

export function Text(props: { text: string; color?: "dark" | "gray" }) {
  const color = props.color === "dark" ? "dark" : "gray";

  return <p className={"text " + color}>{props.text}</p>;
}
