"use client";

import { useRef } from "react";
import { useState } from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
};

export default function FancyButton({ children, className, onClick, href }: Props) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveringRef = useRef(false);
  const [ripple, setRipple] = useState<{
    x: number;
    y: number;
    show: boolean;
    key: number;
  }>({ x: 0, y: 0, show: false, key: 0 });

  function handleMouseEnter(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    isHoveringRef.current = true;
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    const rect = btnRef.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple({ x, y, show: false, key: Date.now() });

    // Trigger animation after DOM renders
    timeoutRef.current = setTimeout(() => {
      if (isHoveringRef.current) {
        setRipple((prev) => ({ ...prev, show: true }));
      }
    }, 50);
  }

  function handleMouseLeave() {
    isHoveringRef.current = false;
    
    // Clear any pending timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    setRipple((r) => ({ ...r, show: false }));
  }

  return (
    <a href={href}>
      <button
        ref={btnRef}
        onClick={onClick}
        className={`relative overflow-hidden md:border md:border-teal-500 md:text-teal-500 text-white bg-teal-600 md:bg-transparent md:hover:text-slate-900 transition-all duration-300 p-4 rounded-2xl cursor-pointer z-10 ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span
          key={ripple.key}
          className="pointer-events-none absolute rounded-full bg-teal-500 transition-all duration-300 ease-out"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
            transform: ripple.show ? "scale(15)" : "scale(0)",
            opacity: ripple.show ? 1 : 0,
            zIndex: 5,
          }}
        />
        <span className="relative z-10">{children}</span>
      </button>
    </a>
  );
}
