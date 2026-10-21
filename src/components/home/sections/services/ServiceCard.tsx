"use client";

import { motion } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";
import type { Service } from "@/data/services";
import { useSpotlight } from "@/hooks/useSpotlight";

type ServiceCardProps = {
  service: Service;
  delay: number;
};

export function ServiceCard({ service, delay }: ServiceCardProps) {
  const { background, onMouseMove, onMouseLeave } = useSpotlight();
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay }}
      whileHover={{ y: -6 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-7 shadow-card"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      <div className="relative">
        <span className="grid size-14 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-on-primary">
          <Icon size={24} />
        </span>
        <h3 className="mt-6 font-display text-xl font-bold">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {service.description}
        </p>
        <ul className="mt-5 space-y-2.5">
          {service.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.5 text-sm font-medium"
            >
              <FaCircleCheck className="shrink-0 text-accent" size={14} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
