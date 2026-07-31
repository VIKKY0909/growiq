import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 18,
      }}
      className="
      group
      relative
      min-h-[320px]
      lg:min-h-[340px]
      overflow-hidden
      rounded-[26px]
      border
      border-black/10
      dark:border-white/10
      bg-white/70
      dark:bg-white/[0.04]
      backdrop-blur-2xl
      p-6
      lg:p-7
      shadow-xl
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-[#D5D93B]/50
      hover:shadow-[0_0_45px_rgba(213,217,59,0.18)]
      "
    >
      {/* Spotlight */}
      <div
        className="
        absolute
        inset-0
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-100
        bg-[radial-gradient(circle_at_top_left,rgba(213,217,59,.18),transparent_60%)]
      "
      />

      {/* Glass Reflection */}
      <div
        className="
        absolute
        -left-full
        top-0
        h-full
        w-1/2
        rotate-12
        bg-gradient-to-r
        from-transparent
        via-white/20
        to-transparent
        transition-all
        duration-1000
        group-hover:left-[130%]
      "
      />

      {/* Icon */}
      {/* <motion.div
        whileHover={{
          rotate: 360,
          scale: 1.08,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
        relative
        z-10
        flex
        h-14
        w-14
        lg:h-16
        lg:w-16
        items-center
        justify-center
        rounded-2xl
        bg-[#D5D93B]/15
        text-[#D5D93B]
        shadow-[0_0_25px_rgba(213,217,59,.25)]
        "
      >
        <Icon size={26} />
      </motion.div> */}

      {/* Title */}
      {/* <h3
        className="
        relative
        z-10
        mt-5
        text-xl
        lg:text-2xl
        font-bold
        leading-snug
        text-[#0F1039]
        dark:text-white
        "
      >
        {service.title}
      </h3> */}


      <div className="relative z-10 flex items-center gap-4">

  <motion.div
    whileHover={{
      rotate: 360,
      scale: 1.08,
    }}
    transition={{ duration: 0.8 }}
    className="
      flex
      h-14
      w-14
      shrink-0
      items-center
      justify-center
      rounded-2xl
      bg-[#D5D93B]/15
      text-[#D5D93B]
      shadow-[0_0_25px_rgba(213,217,59,.25)]
    "
  >
    <Icon size={26} />
  </motion.div>

  <h3
    className="
      text-[22px]
      font-semibold
      leading-tight
      text-[#0F1039]
      dark:text-white
    "
  >
    {service.title}
  </h3>

</div>

      {/* Description */}
      <p
        className="
        relative
        z-10
        mt-3
        text-[15px]
        leading-6
        text-[#0F1039]/75
        dark:text-gray-300
        "
      >
        {service.description}
      </p>

      {/* Features */}
      <div
        className="
        relative
        z-10
        mt-5
       flex
       flex-wrap
       justify-center
       items-center
        gap-x-5
        gap-y-3
        "
      >
        {service.features.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 whitespace-nowrap"
          >
            <div className="mt-2 h-2 w-2 rounded-full bg-[#D5D93B] shrink-0" />

            <span className="text-[13px] whitespace-nowrap leading-6 text-[#0F1039]/80 dark:text-gray-300">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        whileHover={{
          x: 5,
        }}
        className="
        relative
        z-10
        mt-7
        inline-flex
        items-center
        gap-2
        font-semibold
        text-[#D5D93B]
        "
      >
        Explore Service

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;






//new part start


// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// const themeClasses = {
//   gradient: {
//     card: `
//       bg-gradient-to-br
//       from-[#0F1039]
//       via-[#1B1F66]
//       to-[#1E226E]
//       border border-white/10
//       text-white
//     `,
//     title: "text-white",
//     description: "text-white/75",
//     chip:
//       "bg-[#D5D93B]/12 border border-[#D5D93B]/20 text-[#D5D93B]",
//   },

//   dark: {
//     card: `
//       bg-[#0F1039]
//       border border-white/10
//       text-white
//     `,
//     title: "text-white",
//     description: "text-white/75",
//     chip:
//       "bg-[#D5D93B]/12 border border-[#D5D93B]/20 text-[#D5D93B]",
//   },

//   glass: {
//     card: `
//       bg-white/70
//       backdrop-blur-2xl
//       border border-black/10
//       dark:bg-white/[0.05]
//       dark:border-white/10
//     `,
//     title: "text-[#0F1039] dark:text-white",
//     description: "text-slate-600 dark:text-slate-300",
//     chip:
//       "bg-slate-100 border border-slate-200 text-[#0F1039] dark:bg-[#D5D93B]/10 dark:border-[#D5D93B]/20 dark:text-[#D5D93B]",
//   },

//   light: {
//     card: `
//       bg-white
//       border border-slate-200
//       dark:bg-[#11133f]
//       dark:border-white/10
//     `,
//     title: "text-[#0F1039] dark:text-white",
//     description: "text-slate-600 dark:text-slate-300",
//     chip:
//       "bg-slate-100 border border-slate-200 text-[#0F1039] dark:bg-[#D5D93B]/10 dark:border-[#D5D93B]/20 dark:text-[#D5D93B]",
//   },
// };

// const ServiceCard = ({ service }) => {
//     const Icon = service.icon;
//     const theme = themeClasses[service.theme]
//   const isDarkTheme =
//   service.theme === "dark" || service.theme === "gradient";

//   return (
//   <motion.div
//     whileHover={{
//       y: -8,
//       scale: 1.02,
//     }}
//     transition={{
//       type: "spring",
//       stiffness: 220,
//       damping: 18,
//     }}
//     className={`
//       group
//       relative
//       flex
//       h-full
//       flex-col
//       overflow-hidden
//       rounded-[30px]
//       p-8
//       shadow-[0_20px_60px_rgba(15,16,57,.10)]
//       transition-all
//       duration-500
//       ${theme.card}
//     `}
//   >

//     <div
//   className="
//     absolute
//     -top-24
//     -right-24
//     h-72
//     w-72
//     rounded-full
//     bg-[#D5D93B]/10
//     blur-3xl
//     transition-all
//     duration-700
//     group-hover:bg-[#D5D93B]/20
//   "
// />

// <div
//   className="
//     absolute
//     -left-1/2
//     top-0
//     h-full
//     w-[45%]
//     rotate-[20deg]
//     bg-gradient-to-r
//     from-transparent
//     via-white/40
//     to-transparent
//     transition-all
//     duration-[1400ms]
//     group-hover:left-[160%]
//   "
// />

// <div className="relative z-10 flex items-center gap-5">

//   <motion.div
//     whileHover={{
//       rotate: 360,
//       scale: 1.1,
//     }}
//     transition={{
//       duration: .7,
//     }}
//     className="
//       flex
//       h-16
//       w-16
//       shrink-0
//       items-center
//       justify-center
//       rounded-2xl
//       bg-[#D5D93B]/15
//       text-[#D5D93B]
//       shadow-[0_0_30px_rgba(213,217,59,.15)]
//     "
//   >
//     <Icon size={30}/>
//   </motion.div>

//   <h3
//     className={`
//       text-[26px]
//       font-bold
//       leading-tight
//       ${theme.title}
//     `}
//   >
//     {service.title}
//   </h3>

// </div>




//   </motion.div>
//   )

  





// }

// export default ServiceCard;
