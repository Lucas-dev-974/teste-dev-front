import { JSX } from "react";

import "./ButtonIcon.css";

interface ButtonIconProps {
  icon: JSX.Element;
  style?: "bg-less" | "primary";
  size?: "xs" | "md" | "lg";
  onClick: () => void;
}

export function ButtonIcon(props: ButtonIconProps) {
  let classname = "";

  if (!props.style) classname += "bg-less ";
  classname += props.style === "primary" ? "primary " : "";
  classname += props.style === "bg-less" ? "bg-less " : "";

  if (!props.size) classname += "md ";
  classname += props.size === "xs" ? "xs " : "";
  classname += props.size === "md" ? "md " : "";
  classname += props.size === "lg" ? "lg " : "";

  return (
    <button onClick={props.onClick} className={"button-icon " + classname}>
      {props.icon}
    </button>
  );
}
