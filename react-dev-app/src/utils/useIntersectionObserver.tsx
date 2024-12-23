import { useEffect, useState, useRef } from "react";

interface UseIntersectionObserverOptions {
  once?: boolean;
}

export function useIntersectionObserver({
  once = false,
}: UseIntersectionObserverOptions = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else {
          setIsIntersecting(false);
        }
      },
      {
        threshold: 0.1, // Ajustez ce seuil selon vos besoins
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [once]);

  return [ref, isIntersecting] as const;
}
