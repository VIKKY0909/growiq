import { motion } from "framer-motion";
import {useTheme} from "../../../context/ThemeContext"


const Logo = () => {
    const {darkMode} = useTheme()
  return (
    <motion.a
      href="#home"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-3"
    >
         <h1> {darkMode ? "dark" : "light"}</h1>
      <img
     
        src={darkMode ? "/logo/logo.png" : "/logo/logo2.png"}
        alt="Groowiq"
        className="h-20 lg:h-24 max-w[240px]  object-contain"
      />
    </motion.a>
  );
};

export default Logo;


/**
 * transition-all duration-300
 */