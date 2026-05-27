import { motion } from "framer-motion";
import Tilt from "react-tilt";

import { styles } from "../styles";
import { certifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const CertificationCard = ({ certification, index }) => {
  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("up", "spring", index * 0.3, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-6 min-h-[120px] flex flex-col justify-between"
        >
          <div>
            <h3 className="text-white text-[16px] font-bold leading-tight">
              {certification.title}
            </h3>
            <p className="text-secondary text-[14px] mt-1">
              {certification.issuer}
            </p>
          </div>
          <p className="text-white-100 text-[12px] mt-2">
            Issued: {certification.date}
          </p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Credentials</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Industry-recognized certifications in networking, cybersecurity, cloud
        computing, agile methodologies, and back-end development from Cisco,
        VMware, Google, Orange Digital Center, ITI, and NTI.
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-7">
        {certifications.map((cert, index) => (
          <CertificationCard key={cert.title} index={index} certification={cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
