import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const services = [
  "🌐 Website Development",
  "🎨 Branding",
  "📈 SEO",
  "📣 Performance Marketing",
  "🤖 AI Automation",
  "✨ Other",
];

const ServiceDropdown = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const close = (e) => {
      if (!ref.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", close);

    return () =>
      document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full rounded-xl border border-white/10 bg-[#111827] px-4 py-3 text-left text-white flex justify-between items-center"
      >
        <span>{value || "Select Service"}</span>

        <ChevronDown
          className={`duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute left-0 right-0 z-50 mt-2 rounded-xl border border-white/10 bg-[#111827] shadow-2xl overflow-hidden"
          >
            {services.map((service) => (
              <button
                key={service}
                type="button"
                onClick={() => {
                  onChange(service);
                  setOpen(false);
                }}
                className="w-full px-4 py-3 text-left text-white hover:bg-[#D5D93B] hover:text-black transition"
              >
                {service}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceDropdown;