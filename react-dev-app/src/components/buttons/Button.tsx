"use client";

import "./Button.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  sideIcon?: {
    icon: React.ReactNode;
    side: "left" | "right";
  };
  style?: "primary" | "dark";
  fullWidth?: boolean;
  active?: boolean;
}

export function Button(props: ButtonProps) {
  let classname = "button ";
  classname += props.style === "primary" ? "primary" : "";
  classname += props.style === "dark" ? "dark" : "";
  classname += props.fullWidth ? " w-full" : "";

  return (
    <button onClick={props.onClick} className={classname}>
      {props.sideIcon?.side === "left" && (
        <IconContainer icon={props.sideIcon.icon} />
      )}

      {props.text}

      {props.sideIcon?.side === "right" && (
        <IconContainer icon={props.sideIcon.icon} />
      )}
    </button>
  );
}

function IconContainer(props: { icon: React.ReactNode }) {
  return <span className="side-icon">{props.icon}</span>;
}
