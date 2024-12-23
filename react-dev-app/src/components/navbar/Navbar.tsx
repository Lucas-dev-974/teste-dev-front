"use client";

import React from "react";
import { NavbarMobileMenu } from "./NavbarMobileMenu";
import { DownloadLinks } from "./DownloadLinks";
import { LeftNavigation } from "./LeftNav";

import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar center-content-app">
      <LeftNavigation />
      <DownloadLinks />
      <NavbarMobileMenu />
    </nav>
  );
}
