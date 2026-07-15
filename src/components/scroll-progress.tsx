import { motion, useScroll, useSpring } from "framer-motion";

// A slim gradient bar pinned to the top of the viewport that fills
// as the user scrolls through the page.
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-gradient-to-r from-[#915eff] via-[#7c3aed] to-[#915eff]"
    />
  );
};
