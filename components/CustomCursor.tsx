"use client";

import { useEffect, useState } from "react";

type CursorState = {
  x: number;
  y: number;
  hovering: boolean;
  visible: boolean;
};

export default function CustomCursor() {
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    hovering: false,
    visible: false,
  });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setCursor((prev) => ({
        ...prev,
        x: event.clientX,
        y: event.clientY,
        visible: true,
      }));
    };

    const handleLeave = () => {
      setCursor((prev) => ({ ...prev, visible: false }));
    };

    const handleOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest("a, button, [data-interactive]");
      setCursor((prev) => ({ ...prev, hovering: Boolean(interactive) }));
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOver);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOver);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden md:block">
      <div
        className="cursor-glow"
        style={{
          transform: `translate(${cursor.x}px, ${cursor.y}px)`,
          opacity: cursor.visible ? 0.6 : 0,
        }}
      />
      <div
        className={`cursor-dot ${cursor.hovering ? "cursor-dot--active" : ""}`}
        style={{
          transform: `translate(${cursor.x}px, ${cursor.y}px)`,
          opacity: cursor.visible ? 1 : 0,
        }}
      />
    </div>
  );
}
