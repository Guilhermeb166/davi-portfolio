"use client";

import { useMotionTemplate, useMotionValue } from "framer-motion";
import type { MouseEvent } from "react";

export function useSpotlight(size = 260) {
  const x = useMotionValue(-size);
  const y = useMotionValue(-size);

  const background = useMotionTemplate`radial-gradient(${size}px circle at ${x}px ${y}px, var(--glow), transparent 70%)`;

  const onMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent<HTMLElement>) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    x.set(clientX - left);
    y.set(clientY - top);
  };

  const onMouseLeave = () => {
    x.set(-size);
    y.set(-size);
  };

  return { background, onMouseMove, onMouseLeave };
}
