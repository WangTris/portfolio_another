// motion
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: { staggerChildren: 0.1 },
  },
  close: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemsVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  close: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const pages = ["Homepage", "Services", "Portfolio", "Contact", "About"];
  return (
    <motion.div className="links" variants={variants}>
      {pages.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={itemsVariants}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
