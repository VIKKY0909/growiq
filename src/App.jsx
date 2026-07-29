import Navbar from "./components/layout/Navbar/Navbar";
import { useTheme } from "./context/ThemeContext";
import Hero from "./components/hero/Hero"
import { useState } from "react";
import LeadModal from "./components/CTA/LeadModel";
import About from "./components/about/About"

function App() {
  const { darkMode } = useTheme();
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode
          ? "bg-[#0F1039] text-white"
          : "bg-white text-[#0F1039]"
      }`}
    >
      {/* <Navbar /> */}
       <Navbar  open={open} setOpen={setOpen}   />

      <main className="pt-32">
        {/* Hero Section */}
        {/* <Hero /> */}
        <Hero  open={open} setOpen={setOpen}/>
        <About/>
        
      </main>
      <LeadModal open={open}
      onClose={()=> setOpen(false)}
      />
    </div>
  );
}

export default App;