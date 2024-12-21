import { AppleStoreLogo } from "@/assets/AppleStoreLogo";
import { PlayStoreLogo } from "@/assets/PlayStoreLogo";
import { CSSProperties } from "react";

export function DownloadLinks(props: { vertical?: boolean }) {
  const style = props.vertical
    ? ({ display: "flex", flexDirection: "column" } as CSSProperties)
    : {};

  return (
    <div className="download" style={style}>
      <a href="#" className="min-h-10">
        <PlayStoreLogo />
      </a>
      <a href="#">
        <AppleStoreLogo />
      </a>
    </div>
  );
}
