import { TestimonialEntity } from "@/entities/Testimonial.entity";
import { Title5 } from "../texts/Title5";
import { Text } from "../texts/Text";
import { TriangleIcon } from "@/icons/TriangleIcon";

import "./TestimonialBubble.css";
import { useIntersectionObserver } from "@/utils/useIntersectionObserver";
import { RefObject } from "react";

interface TestimonialBubbleProps {
  testimonial: TestimonialEntity;
}

export function TestimonialBubble(props: TestimonialBubbleProps) {
  const [ref, isIntersecting] = useIntersectionObserver({ once: true });

  return (
    <div
      ref={ref as RefObject<HTMLDivElement | null>}
      className={`testimonial-bubble ${
        isIntersecting ? "animate-fadeInUp" : ""
      } `}
    >
      <Title5 text={props.testimonial.title} />
      <Text text={props.testimonial.body} />

      <span className="relative top-[49%]">
        <TriangleIcon />
      </span>
    </div>
  );
}
