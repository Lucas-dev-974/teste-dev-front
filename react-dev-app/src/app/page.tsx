"use client";

import { Partners } from "@/components/home-partner/Partners";
import { PresentationSection } from "@/components/home-presentation/PresentationSection";
import { TestimonialsSection } from "@/components/home-testimonials/TestimonialsSection";
import { ModalClosePopup } from "@/components/modal-popup/ModalClosePopup";
import { useEffect, useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  // Manage  modal popup when cursor is at the top right corner
  useEffect(() => {
    document.addEventListener("mousemove", function (event) {
      const screenWidth = window.innerWidth;
      const cursorX = event.clientX;
      const cursorY = event.clientY;

      const zoneWidth = 100;
      const zoneHeight = 100;

      if (
        cursorX > screenWidth - zoneWidth &&
        cursorY < zoneHeight &&
        screenWidth > 640
      ) {
        setIsOpen(true);
      }
    });
  });
  return (
    <div>
      <ModalClosePopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <PresentationSection />
      <TestimonialsSection />
      <Partners />
    </div>
  );
}
