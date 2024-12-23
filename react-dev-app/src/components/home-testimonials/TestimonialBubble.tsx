import { TestimonialEntity } from "@/entities/Testimonial.entity";
import { Title5 } from "../texts/Title5";
import { Text } from "../texts/Text";
import { TriangleIcon } from "@/icons/TriangleIcon";
import { useIntersectionObserver } from "@/utils/useIntersectionObserver";
import { RefObject } from "react";

import "./TestimonialBubble.css";

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
      <Text text={props.testimonial.body} center />

      <span className="relative top-[49%]">
        <TriangleIcon />
      </span>
    </div>
  );
}
