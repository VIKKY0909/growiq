import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-11 h-11 rounded-full bg-[#D5D93B] text-[#0F1039] flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;