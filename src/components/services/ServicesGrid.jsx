import { motion } from "framer-motion";
import { services } from "../../data/servicesData";
import ServiceCard from "./ServiceCard";

const positions = [
  { x: -120, y: -60 },
  { x: 0, y: -80 },
  { x: 120, y: -60 },

  { x: -120, y: 0 },
  { x: 0, y: 0 },
  { x: 120, y: 0 },

  { x: -120, y: 60 },
  { x: 0, y: 80 },
  { x: 120, y: 60 },
];

const ServicesGrid = () => {
  return (
    <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{
            opacity: 0,
            scale: 0.75,
            rotate: index % 2 === 0 ? -8 : 8,
            x: positions[index].x,
            y: positions[index].y,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            x: 0,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.75,
            rotate: index % 2 === 0 ? -8 : 8,
            x: positions[index].x,
            y: positions[index].y
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 22,
            delay: (index < 3 ? 0.4 : 0.65) + (index % 3) * 0.1,
          }}
        >
          <ServiceCard service={service} />
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesGrid;

// import { motion } from "framer-motion";
// import { services } from "../../data/servicesData";
// import ServiceCard from "./ServiceCard";

// const sortedServices = [...services].sort(
//   (a, b) => a.order - b.order
// );

// const ServicesGrid = () => {
//   return (
//     <div
//       className="
//         mt-20
//         grid
//         grid-cols-1
//         md:grid-cols-2
//         xl:grid-cols-12
//         auto-rows-[320px]
//         gap-6
//       "
//     >
//       {sortedServices.map((service, index) => (
//         <motion.div
//           key={service.id}
//           className={`${service.col} ${service.row}`}
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{
//             duration: 0.6,
//             delay: index * 0.08,
//           }}
//         >
//           <ServiceCard service={service} />
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default ServicesGrid;