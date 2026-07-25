import Button from "./components/common/Button.jsx"
import Container from "./components/common/Container.jsx";
import ThemeToggle from "./components/common/ThemeToggle.jsx";

import Navbar from "./components/layout/Navbar/Navbar";
import { useTheme } from "./context/ThemeContext";

function App() {

  const { darkMode } = useTheme();

  return (

    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode
          ? "bg-[#0F1039] text-white"
          : "bg-white text-[#0F1039]"
      }`}
    >

      <Navbar />

      <main className="pt-32">

        {/* Hero Section */}

      </main>

    </div>

  );

}

export default App;