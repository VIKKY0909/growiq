import { motion, useMotionValue, useSpring } from "framer-motion";
import { Cpu, BarChart3, BadgeCheck } from "lucide-react";
import heroVideo from "../../assets/hero-video.mp4";

const floating = {
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut",
};

const AboutVisual = () => {
    const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

const rotateX = useSpring(mouseY, {
  stiffness: 120,
  damping: 20,
});

const rotateY = useSpring(mouseX, {
  stiffness: 120,
  damping: 20,
});

const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  mouseX.set((x - rect.width / 2) / 20);
  mouseY.set(-(y - rect.height / 2) / 20);
};

const reset = () => {
  mouseX.set(0);
  mouseY.set(0);
};
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center items-center"
    >
      {/* Glow */}

      <div className="absolute w-[430px] h-[430px] rounded-full bg-[#D5D93B]/10 blur-[120px]" />

      {/* Floating Card 1 */}

      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={floating}
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

      {/* Floating Card 2 */}

      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={floating}
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

      {/* Floating Card 3 */}

      <motion.div
        animate={{ y: [-6, 6, -6] }}
    
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        
        }}
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

      {/* Poster */}

      <div className="absolute w-[320px] h-[560px] lg:w-[380px] lg:h-[640px] rounded-[42px] bg-[#D5D93B]/15 blur-3xl -z-10"/>
   

       <motion.div
       onMouseMove={handleMouseMove}
        onMouseLeave={reset}
       style={{
         rotateX,
         rotateY,
         transformPerspective: 1200,
       }}
       whileHover={{
        scale: 1.02,
       }}
        transition={{ duration: 0.3 }}
        className="
        relative
        overflow-hidden
        w-[300px]
        h-[540px]
        lg:w-[360px]
        lg:h-[620px]
        overflow-hidden
        rounded-[38px]
        border
        border-[#D5D93B]/20
        bg-[#0B1023]
        shadow-[0_25px_70px_rgba(213,217,59,.18)]
        "
      >
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

        {/* Overlay */}
        <div className="absolute inset-[1px] rounded-[36px] bg-[#0B1023]" />

        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#0B1023]/20 to-[#0B1023]" /> */}
        <div
  className="
    absolute
    inset-0
    rounded-[38px]
    bg-gradient-to-b
    from-black/20
    via-transparent
    to-[#0B1023]
  "
/>

        {/* Content */}

        <div className="relative z-10 flex h-full flex-col justify-between p-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-black leading-tight text-white"
            >
              WE BUILD
            </motion.h2>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-5xl font-black leading-tight text-[#D5D93B]"
            >
              BRANDS
            </motion.h2>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl font-black leading-tight text-white"
            >
              THAT
            </motion.h2>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="text-5xl font-black leading-tight text-white"
            >
              WIN.
            </motion.h2>
          </div>

          <div>
            <div className="mb-5 h-px bg-white/10" />

            <p className="font-semibold text-[#D5D93B]">
              AI Powered
            </p>

            <p className="text-white/80">
              Growth Studio
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutVisual;