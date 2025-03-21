import { motion } from 'framer-motion';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const Links = ({ isOpen }) => {  //  Accept isOpen as a prop
  const items = ['Homepage', 'Contact', 'Services', 'Projects', 'About'];

  return (
    <motion.div className="links" variants={variants} initial="closed" animate={isOpen ? "open" : "closed"}>
      {items.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale: 1.5}} whileTap={{scale: 0.95}}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
