"use client";

import { PhoneMockeup } from "@/assets/PhoneMockeup";
import { Button } from "../buttons/Button";
import { PlayerIcon } from "@/icons/PlayerIcon";
import { Title } from "../texts/Title";

import "./PresentationSection.css";
import { Text } from "../texts/Text";

export function PresentationSection() {
  return (
    <>
      <div className="presentation center-content-app">
        <div className="left-part">
          <Title text="The easiest way to manage projects" />
          <Text
            color="gray-dark"
            size="lg"
            text="From the small stuff to the big picture, organizes the work so teams know what to do, why it matters, and how to get it done."
          />

          <div className="action">
            <Button style="primary" text="Get Started" onClick={() => {}} />
            <Button
              text="Watch Video"
              onClick={() => {}}
              sideIcon={{ icon: <PlayerIcon />, side: "left" }}
            />
          </div>
        </div>

        <div className="right-part">
          <PhoneMockeup />
        </div>
      </div>
    </>
  );
}
