import { motion } from "framer-motion";
const variants = {
  initial: { y: 100 },
  animate: { y: 0 },
  exit: { y: 100 },
};
const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
export default PageTransition;
