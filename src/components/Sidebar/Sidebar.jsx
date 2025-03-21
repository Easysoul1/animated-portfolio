import { motion } from 'framer-motion';
import { useState } from 'react';
import './sidebar.scss';
import ToggleButton from './toggleButton/ToggleButton';
import Links from './link/Links';

const variants = {
    open: {
      clipPath: 'circle(1200px at 50px 50px)',
      transition: {
        stiffness: 20,
        type: 'spring',
      },
    },
    closed: {
      clipPath: 'circle(30px at 50px 50px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? 'open' : 'closed'}>
      {/*  Make sure this has initial and animate */}
      <motion.div className="bg" variants={variants} initial="closed" animate={open ? 'open' : 'closed'}>
        <Links isOpen={open} /> {/*  Pass `isOpen` to Links */}
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
