import { TestimonialEntity } from "@/entities/Testimonial.entity";
import { TestimonialPersonInformation } from "./TestimonialPersonInformation";
import { TestimonialBubble } from "./TestimonialBubble";

import "./Testimonial.css";

interface TestimonialProps {
  testimonial: TestimonialEntity;
}

export function Testimonial(props: TestimonialProps) {
  return (
    <div className="testimonial">
      <TestimonialBubble testimonial={props.testimonial} />
      <TestimonialPersonInformation testimonial={props.testimonial} />
    </div>
  );
}
