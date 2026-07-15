import { motion } from "framer-motion";

import { CERTIFICATIONS, ACHIEVEMENTS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type CardProps = {
  index: number;
  title: string;
  meta: string;
};

const InfoCard = ({ index, title, meta }: CardProps) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.6)}
    whileHover={{ y: -6, borderColor: "#915eff" }}
    className="bg-tertiary border border-transparent rounded-2xl p-5 transition-colors"
  >
    <p className="text-white text-[16px] font-semibold leading-snug">
      {title}
    </p>
    <p className="text-secondary text-[13px] mt-2 tracking-wide">{meta}</p>
  </motion.div>
);

// Certifications & Achievements
export const Certifications = () => {
  return (
    <SectionWrapper idName="certifications">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Recognition</p>
          <h2 className={styles.sectionHeadText}>
            Certifications &amp; Achievements.
          </h2>
        </motion.div>

        {/* Certifications */}
        <div className="mt-14">
          <h3 className="text-white text-[22px] font-bold mb-6">
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTIFICATIONS.map((cert, i) => (
              <InfoCard
                key={cert.title}
                index={i}
                title={cert.title}
                meta={`${cert.issuer} • ${cert.year}`}
              />
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-14">
          <h3 className="text-white text-[22px] font-bold mb-6">
            Achievements &amp; Positions of Responsibility
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ACHIEVEMENTS.map((achievement, i) => (
              <InfoCard
                key={achievement.title}
                index={i}
                title={achievement.title}
                meta={achievement.year}
              />
            ))}
          </div>
        </div>
      </>
    </SectionWrapper>
  );
};
