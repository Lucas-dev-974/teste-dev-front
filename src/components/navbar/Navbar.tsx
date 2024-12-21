import { AppleStoreLogo } from "@/assets/AppleStoreLogo";
import { Logo } from "@/assets/Logo";
import { PlayStoreLogo } from "@/assets/PlayStoreLogo";
import React from "react";

import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="left-nav ">
        <a href="#">
          <Logo />
        </a>
        <div className="nav-navigation">
          <a href="#" className="font-bold">
            Features
          </a>
          <a href="#" className="font-bold">
            Pricing
          </a>
          <a href="#" className="font-bold">
            Careers
          </a>
          <a href="#" className="font-bold">
            Help
          </a>
        </div>
      </div>

      <div className="download">
        <a href="#">
          <PlayStoreLogo />
        </a>
        <a href="#">
          <AppleStoreLogo />
        </a>
      </div>
    </nav>
  );
}
