import { motion } from "framer-motion";

const SlideIn = ({
  children,
  direction = "left",
  delay = 0,
  distance = 50,
  duration = 0.6,
  once = true,
  className = "",
}) => {
  const x =
    direction === "left" ? -distance : direction === "right" ? distance : 0;

  return (
    <motion.div
      initial={{ x, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once }}
      transition={{ duration, delay, ease: [0.5, 0, 0.5, 1] }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
