"use client";

import { Partners } from "@/components/home-partner/Partners";
import { PresentationSection } from "@/components/home-presentation/PresentationSection";
import { TestimonialsSection } from "@/components/home-testimonials/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <PresentationSection />
      <TestimonialsSection />
      <Partners />
    </div>
  );
}
