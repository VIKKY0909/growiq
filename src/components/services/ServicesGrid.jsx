import { motion } from "framer-motion";
import { services } from "../../data/servicesData";
import ServiceCard from "./ServiceCard";

const ServicesGrid = () => {
  return (
    <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: (index % 3) * 0.07,
          }}
        >
          <ServiceCard service={service} />
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesGrid;