
"use client";

import { useRef } from "react";

export default function InteractiveBackground() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = x / rect.width;
    const py = y / rect.height;

    el.style.setProperty("--x", `${px * 100}%`);
    el.style.setProperty("--y", `${py * 100}%`);
    el.style.setProperty("--tilt-x", `${(py - 0.5) * -5}deg`);
    el.style.setProperty("--tilt-y", `${(px - 0.5) * 5}deg`);
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;

    el.style.setProperty("--x", "50%");
    el.style.setProperty("--y", "50%");
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Interactive glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              350px circle at var(--x, 50%) var(--y, 50%),
              rgba(255, 205, 78, 0.30),
              transparent 70%
            ),
            radial-gradient(
              450px circle at 75% 70%,
              rgba(119, 183, 220, 0.16),
              transparent 70%
            )
          `,
        }}
      />

      {/* Perspective grid */}
      <div
        className="absolute -inset-[15%] opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30,30,30,.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30,30,30,.07) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
          transform: `
            perspective(850px)
            rotateX(calc(5deg + var(--tilt-x, 0deg)))
            rotateY(var(--tilt-y, 0deg))
          `,
          transition: "transform 200ms ease-out",
        }}
      />

      {/* Soft ambient light */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f5f3ec]/40" />
    </div>
  );
}
