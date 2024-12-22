/* eslint-disable @next/next/no-img-element */
import { TestimonialEntity } from "@/entities/Testimonial.entity";

import "./TestimonialPersonInformation.css";

interface TestimonialPersonInformationProps {
  testimonial: TestimonialEntity;
}

export function TestimonialPersonInformation(
  props: TestimonialPersonInformationProps
) {
  return (
    <div key={props.testimonial.id} className="testimonial-item">
      <img
        src={props.testimonial.personPicture.toString()}
        alt="profile-picture"
      />
      <p className="person-name">{props.testimonial.personName}</p>
      <p className="person-company">{props.testimonial.personCompany}</p>
    </div>
  );
}
