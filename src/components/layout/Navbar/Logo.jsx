import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../../../context/ThemeContext";

const Logo = () => {
  const { darkMode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center"
    >
      <Link
        to="/"
        className="flex items-center cursor-pointer"
      >
        <img
          src={darkMode ? "/logo/logo.png" : "/logo/logo2.png"}
          alt="Groowiq"
          className="w-16 sm:w-20 md:w-18 xl:w-20 lg:w-28 h-auto object-contain"
        />
      </Link>
    </motion.div>
  );
};

export default Logo;