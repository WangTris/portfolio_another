import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.scss";
// motion
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      {/* Navbar */}
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Tri Dev
        </motion.span>
        <div className="social">
          <a href="">
            <img src="/public/facebook.png" alt="" />
          </a>
          <a href="">
            <img src="/public/facebook.png" alt="" />
          </a>
          <a href="">
            <img src="/public/facebook.png" alt="" />
          </a>
          <a href="">
            <img src="/public/facebook.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
