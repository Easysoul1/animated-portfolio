import Sidebar from "../Sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const socialLinks = [
  { src: "/facebook.png", alt: "facebook logo" },
  { src: "/instagram.png", alt: "instagram logo" },
  { src: "/youtube.png", alt: "youtube logo" },
  { src: "/x-logo.png", alt: "x logo", width: "70px" },
  { src: "/linkedin-logo.png", alt: "linkedin logo" },
];

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ color: "darkgoldenrod" }}
        >
          Easy Dev
        </motion.span>

        {/* Staggered social icons */}
        <div className="social">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href="#"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }} // Stagger effect
            >
              <img src={social.src} alt={social.alt} style={{ width: social.width || "30px" }} />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
