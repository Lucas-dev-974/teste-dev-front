"use client";

import { PresentationSection } from "@/components/home-presentation/PresentationSection";
import { TestimonialsSection } from "@/components/home-testimonials/TestimonialsSection";

export default function Home() {
  return (
    <div className="home-content">
      <PresentationSection />
      <TestimonialsSection />
    </div>
  );
}
