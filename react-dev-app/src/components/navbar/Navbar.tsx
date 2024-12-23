"use client";

import React from "react";

import "./Navbar.css";
import { NavbarMobileMenu } from "./NavbarMobileMenu";
import { DownloadLinks } from "./DownloadLinks";
import { LeftNavigation } from "./LeftNav";

export function Navbar() {
  return (
    <nav className="navbar">
      <LeftNavigation />
      <DownloadLinks />
      <NavbarMobileMenu />
    </nav>
  );
}
