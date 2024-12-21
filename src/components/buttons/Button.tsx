"use client";

import "./Button.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  sideIcon?: {
    icon: React.ReactNode;
    side: "left" | "right";
  };
  active?: boolean;
}

export function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={"button " + (props.active ? " active" : "")}
    >
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
  return <span className="w-5">{props.icon}</span>;
}
