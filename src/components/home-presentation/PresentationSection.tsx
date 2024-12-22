"use client";

import { PhoneMockeup } from "@/assets/PhoneMockeup";
import { Button } from "../buttons/Button";
import { PlayerIcon } from "@/icons/PlayerIcon";

import "./PresentationSection.css";
import { Title } from "../texts/Title";
import { Description } from "../texts/Description";

export function PresentationSection() {
  return (
    <>
      <div className="home-content"></div>
      <div className="presentation">
        <div className="left-part">
          <Title text="The easiest way to manage projects" />
          <Description text="From the small stuff to the big picture, organizes the work so teams know what to do, why it matters, and how to get it done." />

          <div className="action flex gap-4">
            <Button active text="Get Started" onClick={() => {}} />
            <Button
              text="Watch Video"
              onClick={() => {}}
              sideIcon={{ icon: <PlayerIcon />, side: "left" }}
            />
          </div>
        </div>

        <div className="right-part flex justify-center">
          <PhoneMockeup />
        </div>
      </div>
    </>
  );
}
