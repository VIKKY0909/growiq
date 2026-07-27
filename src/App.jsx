import Navbar from "./components/layout/Navbar/Navbar";
import { useTheme } from "./context/ThemeContext";
import Hero from "./components/hero/Hero"

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
        <Hero />
        
      </main>
    </div>
  );
}

export default App;