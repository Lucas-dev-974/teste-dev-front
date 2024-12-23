"use client";
import { TestimonialEntity } from "@/entities/Testimonial.entity";

import "./TestimonialList.css";
import { Testimonial } from "./Testimonial";

interface TestimonialListProps {
  testimonials: TestimonialEntity[];
}

export function TestimonialList(props: TestimonialListProps) {
  return (
    <div className="testimonials-list">
      {props.testimonials.map((testimonial, index) => (
        <Testimonial testimonial={testimonial} key={index} />
      ))}
    </div>
  );
}
