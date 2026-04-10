import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveMouse = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", moveMouse);

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      cursor.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;

      requestAnimationFrame(animate);
    };

    animate();

    // 🔥 MAGNETIC BUTTON EFFECT
    const buttons = document.querySelectorAll("a, button");

    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        cursor.classList.add("cursor-hover");
      });

      btn.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-hover");
      });

      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      });

      btn.addEventListener("mouseleave", () => {
        btn.style.transform = `translate(0px, 0px)`;
      });
    });

    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  return <div ref={cursorRef} className="cursor-dot"></div>;
}