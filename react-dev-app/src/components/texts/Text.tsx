import "./Text.css";

export function Text(props: {
  text: string;
  color?: "dark" | "gray";
  center?: boolean;
}) {
  let classname = "";
  classname = props.color === "dark" ? "dark" : "";
  classname = props.color === "gray" ? "gray" : "";
  classname = props.center ? "text-center" : "";

  return <p className={"text " + classname}>{props.text}</p>;
}
