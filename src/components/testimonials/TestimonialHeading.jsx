// import { motion } from "framer-motion";

// const TestimonialHeading = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: false, amount: 0.3 }}
//       transition={{
//         duration: 0.8,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className="mx-auto mb-16 max-w-4xl text-center lg:mb-20"
//     >
//       {/* Badge */}
//       <span
//         className="
//           inline-flex
//           items-center
//           rounded-full
//           border
//           border-[#D5D93B]/30
//           bg-[#D5D93B]/10
//           px-5
//           py-2
//           text-xs
//           font-semibold
//           uppercase
//           tracking-[0.28em]
//           text-[#D5D93B]
//         "
//       >
//         Client Stories
//       </span>

//       {/* Heading */}
//       <h2
//         className="
//           mt-7
//           text-4xl
//           font-black
//           leading-tight
//           text-[#0F1039]
//           md:text-5xl
//           lg:text-6xl
//           dark:text-white
//         "
//       >
//         Real People.
//         <br />

//         <span className="text-[#D5D93B]">
//           Real Growth.
//         </span>
//       </h2>

//       {/* Description */}
//       <p
//         className="
//           mx-auto
//           mt-7
//           max-w-3xl
//           text-base
//           leading-8
//           text-[#0F1039]/65
//           md:text-lg
//           dark:text-gray-300
//         "
//       >
//         We don't just deliver campaigns. We build partnerships that create
//         stronger brands, meaningful visibility and measurable business growth.
//       </p>
//     </motion.div>
//   );
// };

// export default TestimonialHeading;


import { motion } from "framer-motion";

const TestimonialsHeading = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
      }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      {/* Eyebrow */}

      <span
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-[#D5D93B]/25
          bg-[#D5D93B]/10
          px-4
          py-2
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.22em]
          text-[#D5D93B]
        "
      >
        Client Stories
      </span>

      {/* Heading */}

      <h2
        className="
          mt-6
          text-4xl
          font-black
          leading-[1.05]
          tracking-tight
          text-[#0F1039]

          sm:text-5xl
          lg:text-6xl

          dark:text-white
        "
      >
        Growth that
        <br />
        <span className="text-[#D5D93B]">
          speaks for itself.
        </span>
      </h2>

      {/* Description */}

      <p
        className="
          mx-auto
          mt-5
          max-w-2xl
          text-sm
          leading-7
          text-[#0F1039]/60

          sm:text-base

          dark:text-gray-400
        "
      >
        Real partnerships. Real momentum. See how brands and creators are
        growing with Groowiq.
      </p>
    </motion.div>
  );
};

export default TestimonialsHeading;