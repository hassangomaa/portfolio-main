import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="w-28 h-28 rounded-full flex flex-col items-center justify-center bg-tertiary hover:bg-black-200 transition-colors cursor-default"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-14 h-14 object-contain"
              loading="lazy"
            />
            <p className="text-white text-[11px] mt-1 text-center leading-tight">
              {technology.name}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
