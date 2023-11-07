import { motion, useAnimation, useInView } from "framer-motion";
import { use, useEffect, useRef } from "react";

// from: left, right, top, bottom
// once: true, false

export default function Reveal({ children, from = "left", once = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: once, amount: 0.2 });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);

  return (
    <>
      <div className="relative w-full h-full" ref={ref} asChild>
        {from === "left" || from === "right" ? (
          <motion.div
            animate={mainControls}
            initial="hidden"
            transition={{ duration: 1 }}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
              },
              hidden: {
                opacity: 0,
                x: from === "left" ? 80 : -80,
              },
            }}
          >
            {children}
          </motion.div>
        ) : (
          <motion.div
            animate={mainControls}
            initial="hidden"
            transition={{ duration: 1 }}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
              },
              hidden: {
                opacity: 0,
                y: from === "top" ? 80 : -80,
              },
            }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </>
  );
}
