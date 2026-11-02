"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ImageParallaxProps {
  imageUrl?: string;
  height?: string;
}

export default function ImageParallax({
  imageUrl = "/envelope/imagen_3.webp",
  height = "400px",
}: ImageParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Mantiene un efecto fuerte tipo "fixed"
  const y = useTransform(scrollYProgress, [0, 1], [-120, 120]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-gray-900"
      style={{ height }}
    >
      <motion.div
        style={{
          y,
          backgroundImage: `url('${imageUrl}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="absolute -top-32 -bottom-32 left-0 right-0"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>
    </section>
  );
}