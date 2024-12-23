import { JSX } from "react";

import "./ButtonIcon.css";

interface ButtonIconProps {
  icon: JSX.Element;
  onClick: () => void;
}

export function ButtonIcon(props: ButtonIconProps) {
  return (
    <button onClick={props.onClick} className="button-icon">
      {props.icon}
    </button>
  );
}
