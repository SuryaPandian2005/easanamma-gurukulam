import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    const move = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", move);

    const hoverEls = document.querySelectorAll("a, button");

    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.transform += " scale(2)";
      });
      el.addEventListener("mouseleave", () => {
        cursor.style.transform = cursor.style.transform.replace(" scale(2)", "");
      });
    });

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div id="cursor" className="cursor-dot"></div>;
}