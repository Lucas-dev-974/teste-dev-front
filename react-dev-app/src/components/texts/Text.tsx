import "./Text.css";

export function Text(props: {
  text: string;
  color?: "dark" | "gray-light" | "gray-dark";
  center?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
}) {
  let classname = "";

  if (!props.color) classname += "gray-dark ";
  classname += props.color === "dark" ? "dark " : "";
  classname += props.color === "gray-light" ? "gray-light " : "";
  classname += props.center ? "text-center " : "";

  if (!props.size) classname += "text-md ";

  classname += props.size === "sm" ? "text-sm " : "";
  classname += props.size === "md" ? "text-md " : "";
  classname += props.size === "lg" ? "text-lg " : "";
  classname += props.size === "xs" ? "text-xs " : "";

  return <p className={"text " + classname}>{props.text}</p>;
}
