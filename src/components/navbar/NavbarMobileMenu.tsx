import { CloseIcon } from "@/icons/CloseIcon";
import { MenuIcon } from "@/icons/MenuIcon";
import { useRef } from "react";

import "./NavbarMobile.css";
import { MenuLinks } from "./MenuLinks";
import { Footer } from "../Footer";
import { ButtonIcon } from "../buttons/ButtonIcon";
import { LogoLink } from "../LogoLink";
import { DownloadLinks } from "./DownloadLinks";

export function NavbarMobileMenu() {
  const mobileContentRef = useRef<HTMLDivElement>(null);
  const htmlElement = document.querySelector("html");

  function openMobileContentNav() {
    if (mobileContentRef.current?.classList.contains("close")) {
      mobileContentRef.current.classList.remove("close");
      mobileContentRef.current.classList.add("open");
      htmlElement?.classList.add("overflow-hidden");
    } else if (mobileContentRef.current?.classList.contains("open")) {
      mobileContentRef.current.classList.remove("open");
      mobileContentRef.current.classList.add("close");
      htmlElement?.classList.remove("overflow-hidden");
    }
  }
  return (
    <div className="mobile-menu">
      <ButtonIcon icon={<MenuIcon />} onClick={openMobileContentNav} />

      <div className="mobile-menu-panel close" ref={mobileContentRef}>
        <div className="mobile-menu-header">
          <LogoLink />
          <ButtonIcon icon={<CloseIcon />} onClick={openMobileContentNav} />
        </div>

        <div className="mobile-menu-content">
          <MenuLinks />
          <DownloadLinks vertical />
        </div>

        <Footer fixed />
      </div>
    </div>
  );
}
