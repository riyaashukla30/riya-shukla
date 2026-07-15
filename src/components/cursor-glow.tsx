import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

// A soft purple glow that trails the mouse cursor on desktop.
// Hidden on touch devices since there's no cursor to follow there.
export const CursorGlow = () => {
  const [isTouch, setIsTouch] = useState(true);
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const springX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  if (isTouch) return null;

  return (
    <motion.div
      style={{
        translateX: springX,
        translateY: springY,
      }}
      className="pointer-events-none fixed top-0 left-0 z-[55] -ml-[150px] -mt-[150px] w-[300px] h-[300px] rounded-full opacity-30 mix-blend-screen"
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(145,94,255,0.55) 0%, rgba(145,94,255,0) 70%)",
        }}
      />
    </motion.div>
  );
};
