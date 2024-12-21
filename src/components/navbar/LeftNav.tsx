import { MenuLinks } from "./MenuLinks";
import { LogoLink } from "../LogoLink";

export function LeftNavigation() {
  return (
    <div className="left-nav ">
      <LogoLink />

      <div className="nav-navigation">
        <MenuLinks />
      </div>
    </div>
  );
}
