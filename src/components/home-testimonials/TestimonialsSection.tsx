import { useEffect, useState } from "react";
import { Title2 } from "../texts/Title2";

import "./TestimonialsSection.css";
import { TestimonialEntity } from "@/entities/Testimonial.entity";
import TestimonialService from "@/services/testimonial.service";
import { TestimonialList } from "./TestimonialList";

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<TestimonialEntity[]>([]);

  async function fetchTopTestimonials() {
    const response = await TestimonialService.top3();
    setTestimonials(response);
    console.log(response);
  }

  useEffect(() => {
    fetchTopTestimonials();
  }, []);

  return (
    <section className="testimonials ">
      <Title2 text="Our clients speak" />
      <TestimonialList testimonials={testimonials} />
    </section>
  );
}
