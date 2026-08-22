import { motion } from "framer-motion";
import { Cpu, BarChart3, BadgeCheck } from "lucide-react";
import heroVideo from "../../assets/hero-video.mp4";

const floating1 = { duration: 7, repeat: Infinity, ease: "easeInOut" };
const floating2 = { duration: 9, repeat: Infinity, ease: "easeInOut" };
const floating3 = { duration: 8, repeat: Infinity, ease: "easeInOut" };

const AboutVisual = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative flex justify-center items-center"
    >
      {/* Glow */}
      <div className="absolute w-[430px] h-[430px] rounded-full bg-[#D5D93B]/10 blur-[120px]" />

      {/* Floating Card 1 — desktop only */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={floating1}
        className="hidden md:block absolute top-10 -left-6 z-20"
      >
        <div className="rounded-2xl border border-white/10 bg-white dark:bg-[#0F1039] shadow-xl backdrop-blur-xl px-5 py-4">
          <Cpu className="text-[#D5D93B] mb-2" size={24} />
          <h3 className="font-bold text-[#0F1039] dark:text-white">
            AI Powered
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            24/7 Automation
          </p>
        </div>
      </motion.div>

      {/* Floating Card 2 — desktop only */}
      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={floating2}
        className="hidden md:block absolute top-24 -right-10 z-20"
      >
        <div className="rounded-2xl border border-white/10 bg-white dark:bg-[#0F1039] shadow-xl backdrop-blur-xl px-5 py-4">
          <BarChart3 className="text-[#D5D93B] mb-2" size={24} />
          <h3 className="text-3xl font-black text-[#0F1039] dark:text-white">
            500+
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Campaigns Delivered
          </p>
        </div>
      </motion.div>

      {/* Floating Card 3 — desktop only */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={floating3}
        className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="rounded-2xl border border-white/10 bg-white dark:bg-[#0F1039] shadow-xl backdrop-blur-xl px-6 py-4">
          <BadgeCheck className="text-[#D5D93B] mb-2" size={24} />
          <h3 className="text-3xl font-black text-[#0F1039] dark:text-white">
            98%
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Client Satisfaction
          </p>
        </div>
      </motion.div>

      {/* Poster blur */}
      <div className="absolute w-[320px] h-[560px] lg:w-[380px] lg:h-[640px] rounded-[42px] bg-[#D5D93B]/15 blur-3xl -z-10" />

      {/* Card frame — no mouse-tilt on mobile */}
      <div className="relative overflow-hidden w-[280px] h-[500px] sm:w-[300px] sm:h-[540px] lg:w-[360px] lg:h-[620px] rounded-[38px] border border-[#D5D93B]/20 bg-[#0B1023] shadow-[0_25px_70px_rgba(213,217,59,.18)]">
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Overlays */}
        <div className="absolute inset-[1px] rounded-[36px] bg-[#0B1023]" />
        <div className="absolute inset-0 rounded-[38px] bg-gradient-to-b from-black/20 via-transparent to-[#0B1023]" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-between p-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-4xl sm:text-5xl font-black leading-tight text-white"
            >
              WE BUILD
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="text-4xl sm:text-5xl font-black leading-tight text-[#D5D93B]"
            >
              BRANDS
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="text-4xl sm:text-5xl font-black leading-tight text-white"
            >
              THAT
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="text-4xl sm:text-5xl font-black leading-tight text-white"
            >
              WIN.
            </motion.h2>
          </div>

          <div>
            <div className="mb-5 h-px bg-white/10" />
            <p className="font-semibold text-[#D5D93B]">AI Powered</p>
            <p className="text-white/80">Growth Studio</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutVisual;