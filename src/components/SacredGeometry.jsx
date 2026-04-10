import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function SacredGeometry() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ x: smoothX, y: smoothY }}
    >
      <div className="relative w-64 h-64">

        {/* Outer */}
        <motion.div
          className="hero-geometry absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        />

        {/* Middle */}
        <motion.div
          className="hero-geometry absolute inset-6 opacity-60"
          animate={{ rotate: -360 }}
          transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner */}
        <motion.div
          className="hero-geometry absolute inset-12 opacity-40"
          animate={{ rotate: 360 }}
          transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        />

        {/* Center pulse */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            className="w-2 h-2 bg-gold-500 rounded-full"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
          />
        </motion.div>

      </div>
    </motion.div>
  );
}