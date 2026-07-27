import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >
      <div className="relative w-[300px] h-[620px] rounded-[50px] border-4 border-pink-500 bg-[#111] shadow-[0_0_50px_rgba(236,72,153,.4)]">
        <div className="absolute top-6 left-1/2 -translate-x-1/2 text-xs text-white">
          ● Live Results
        </div>

        <div className="flex flex-col justify-center items-center h-full">
          <h2 className="text-6xl font-black">WE</h2>

          <h2 className="text-6xl font-black text-orange-500 mt-4">
            ARE
          </h2>

          <h2 className="text-5xl font-black mt-4">
            READYYY!
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroImage;