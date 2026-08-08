// import { motion } from "framer-motion";
// import ComparisonCard from "./ComparisonCard";
// import VsDivider from "./VsDivider";

// const oldAgency = {
//   type: "old",
//   title: "Traditional Agency",

//   points: [
//     {
//       title: "Multiple Disjointed Vendors",
//       desc: "Different teams with no unified strategy."
//     },
//     {
//       title: "Slow Turnarounds",
//       desc: "Long approval cycles and delayed execution."
//     },
//     {
//       title: "Guesswork Over Data",
//       desc: "Decisions without clear performance metrics."
//     },
//     {
//       title: "Template-Based Work",
//       desc: "Generic designs with little brand identity."
//     },
//     {
//       title: "Lower ROI",
//       desc: "Higher costs with inconsistent outcomes."
//     }
//   ]
// };

// const growwiq = {
//   type: "new",
//   title: "GROOWiq",

//   badge: "BUILT TO SCALE",

//   points: [
//     {
//       title: "AI-Powered Strategy",
//       desc: "Automation and AI for faster execution."
//     },
//     {
//       title: "Rapid Agile Delivery",
//       desc: "Launch campaigns in days, not weeks."
//     },
//     {
//       title: "Performance Driven",
//       desc: "Every decision backed by real analytics."
//     },
//     {
//       title: "Custom Brand Systems",
//       desc: "Tailored creative for your business."
//     },
//     {
//       title: "Maximum ROI",
//       desc: "Growth-focused marketing with measurable results."
//     }
//   ]
// };

// const ComparisonGrid = () => {

//   return (

// <div className="relative grid gap-14 items-center lg:grid-cols-[1fr_auto_1fr]">

// <motion.div
// initial={{opacity:0,x:-80}}
// whileInView={{opacity:1,x:0}}
// viewport={{once:false,amount:.3}}
// transition={{duration:.8}}
// >

// <ComparisonCard data={oldAgency}/>

// </motion.div>

// <VsDivider/>

// <motion.div
// initial={{opacity:0,x:80}}
// whileInView={{opacity:1,x:0}}
// viewport={{once:false,amount:.3}}
// transition={{duration:.8}}
// >

// <ComparisonCard data={growwiq}/>

// </motion.div>

// </div>

//   );
// };

// export default ComparisonGrid;


import { motion } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
} from "lucide-react";

const comparison = [
  {
    old: "Multiple Vendors",
    oldDesc: "Different teams with no unified strategy.",

    new: "One Dedicated Growth Team",
    newDesc: "Branding, Marketing & Development together."
  },

  {
    old: "Slow Turnarounds",
    oldDesc: "Long approval cycles and delayed execution.",

    new: "Rapid AI Execution",
    newDesc: "Launch faster with AI-powered workflows."
  },

  {
    old: "Guesswork Decisions",
    oldDesc: "No clear performance metrics.",

    new: "Data-Driven Growth",
    newDesc: "Every decision backed by analytics."
  },

  {
    old: "Template Designs",
    oldDesc: "Generic creative with little identity.",

    new: "Custom Brand System",
    newDesc: "Unique design language for every brand."
  },

  {
    old: "Low ROI",
    oldDesc: "High spend with inconsistent outcomes.",

    new: "Maximum ROI",
    newDesc: "Performance-first growth strategy."
  },
];

const ComparisonGrid = () => {
  return (
    <div className="mx-auto max-w-[1000px] px-4">

      {comparison.map((item, index) => (

        <motion.div
          key={index}
          initial={{
            opacity:0,
            y:70
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          viewport={{
            once:false,
            amount:.25
          }}
          transition={{
            delay:index*.12,
            duration:.6
          }}

        className="
group
relative
mb-8
overflow-hidden
rounded-[26px]
border
border-slate-200
dark:border-white/10
bg-white/5
dark:bg-[#0F1039]
backdrop-blur-xl
p-8
transition-all
duration-500
hover:border-[#D5D93B]/50

before:absolute
before:inset-0
before:rounded-[26px]
before:border
before:border-[#D5D93B]/0
hover:before:border-[#D5D93B]/40
before:transition-all
before:duration-500
before:content-['']
"
        >
          <div
  className="
  absolute
  inset-0
  opacity-0
  transition-opacity
  duration-500
  group-hover:opacity-100
  bg-[radial-gradient(circle_at_center,rgba(213,217,59,.12),transparent_70%)]
  "
/>
<div
  className="
  absolute
  -left-full
  top-0
  h-full
  w-[45%]
  rotate-12
  bg-gradient-to-r
  from-transparent
  via-white/20
  to-transparent
  transition-all
  duration-[1200ms]
  group-hover:left-[170%]
  "
/>

          <div className="relative grid lg:grid-cols-[1fr_70px_1fr] gap-4 items-center">

            {/* Center Line */}

<div
  className="
  hidden
  lg:block
  absolute
  left-1/2
  top-0
  -translate-x-1/2
  w-px
  h-full
  bg-gradient-to-b
  from-transparent
  via-[#D5D93B]/30
  to-transparent
  "
/>

            {/* Left */}

            <div>

              <div className="flex gap-4">

                <XCircle
                  size={24}
                  className="text-red-400 shrink-0 mt-1"
                />

                <div>

                  <h3 className="text-xl font-bold text-[#0F1039] dark:text-white">

                    {item.old}

                  </h3>

                  <p className="mt-2 text-slate-600  dark:text-gray-400 leading-7">

                    {item.oldDesc}

                  </p>

                </div>

              </div>

            </div>

            {/* Arrow */}

            <div className="flex justify-center">

              <motion.div

              
  animate={{
    x: [0, 10, 0],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
  whileHover={{
    scale: 1.2,
  }}

                className="
                h-12
                w-12
                rounded-full
                border
                border-[#D5D93B]/30
                bg-[#D5D93B]/10
                flex
                items-center
                justify-center
                shadow-[0_0_35px_rgba(213,217,59,.25)]
                "

              >

                <ArrowRight
                  className="text-[#D5D93B]"
                />

              </motion.div>

            </div>

            {/* Right */}

            <div>

              <div className="flex gap-4">

                <CheckCircle2
                  size={24}
                  className="text-[#D5D93B] shrink-0 mt-1"
                />

                <div>

                  <h3 className="text-xl font-bold text-[#0F1039] dark:text-white">

                    {item.new}

                  </h3>

                  <p className="mt-2 text-slate-600 dark:text-gray-300 leading-7">

                    {item.newDesc}

                  </p>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      ))}

    </div>
  );
};

export default ComparisonGrid;