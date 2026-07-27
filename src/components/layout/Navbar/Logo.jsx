import { motion } from "framer-motion";
import { useTheme } from "../../../context/ThemeContext";

const Logo = () => {
  const { darkMode } = useTheme();

  return (
    <motion.a
      href="#home"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center"
    >
      <img
        src={darkMode ? "/logo/logo.png" : "/logo/logo2.png"}
        alt="Groowiq"
        className="w-16 sm:w-20 md:w-18 xl:w-20 lg:w-28 h-auto object-contain"
      />
    </motion.a>
  );
};

export default Logo;