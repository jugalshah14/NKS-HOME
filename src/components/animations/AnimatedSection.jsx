import { motion } from "framer-motion";

const AnimatedSection = ({ children, delay = 0, className = "", ...props }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px 0px" }}
    transition={{ duration: 0.8, delay, ease: [0.5, 0, 0.5, 1] }}
    className={`overflow-hidden ${className}`}
    {...props}
  >
    {children}
  </motion.section>
);

export default AnimatedSection;
