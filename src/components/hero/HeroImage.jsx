
import { motion } from "framer-motion";
import heroVideo from "../../assets/hero-video.mp4";

// Floating card animations — desktop only, slow period to reduce GPU load
const float1 = { duration: 8, repeat: Infinity, ease: "easeInOut" };
const float2 = { duration: 10, repeat: Infinity, ease: "easeInOut" };
const float3 = { duration: 9, repeat: Infinity, ease: "easeInOut" };

const HeroImage = ({ open }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center items-center w-full min-h-[440px] sm:min-h-[540px] lg:min-h-[700px]"
    >
      {/* Brand Glow */}
      <div className="absolute -z-10 rounded-full bg-[#D5D93B]/10 blur-[110px] w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[430px] lg:h-[430px]" />

      {/* ================= RIGHT CARD — desktop only ================= */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={float1}
        className={`absolute top-24 -right-10 z-30 hidden md:block transition-all duration-300
        ${open ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"}
        `}
      >
        <div className="rounded-2xl bg-white px-5 py-4 shadow-2xl">
          <p className="text-xs text-gray-500">Qualified Leads</p>
          <h2 className="text-3xl font-black text-[#0F1039]">128+</h2>
          <p className="text-sm font-semibold text-[#D5D93B]">This Month</p>
        </div>
      </motion.div>

      {/* ================= LEFT CARD — desktop only ================= */}
      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={float2}
        className={`absolute left-[-25px] bottom-36 z-30 hidden md:block transition-all duration-300
         ${open ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"}
         `}
      >
        <div className="rounded-2xl bg-[#D5D93B] px-5 py-4 shadow-xl">
          <p className="text-xs text-[#0F1039]/70">Avg. ROAS</p>
          <h2 className="text-3xl font-black text-[#0F1039]">8.7×</h2>
          <p className="text-xs text-[#0F1039]/70">Campaign Performance</p>
        </div>
      </motion.div>

      {/* ================= BOTTOM CARD — desktop only ================= */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={float3}
        className={`absolute left-1/2 -translate-x-1/2 -bottom-6 z-30 hidden md:block transition-all duration-300
          ${open ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"}
         `}
      >
        <div className="rounded-2xl bg-[#0F1039] px-6 py-4 shadow-xl">
          <p className="text-xs text-gray-300">Conversion Rate</p>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-black text-[#D5D93B]">92%</span>
            <span className="text-xs text-green-400 mb-1">High Intent</span>
          </div>
        </div>
      </motion.div>

      {/* ================= PHONE ================= */}
      <div className="relative overflow-hidden rounded-[36px] sm:rounded-[40px] border border-[#D5D93B]/30 bg-[#0B1023] shadow-[0_0_40px_rgba(213,217,59,.15)] w-[210px] h-[410px] sm:w-[270px] sm:h-[520px] md:w-[290px] md:h-[560px] lg:w-[320px] lg:h-[620px]">
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-black/5 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default HeroImage;