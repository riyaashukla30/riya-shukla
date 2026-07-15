import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { SERVICES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import profilePhoto from "../assets/profile/riya-photo.jpg";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

// Service Card
const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          
          <motion.img
            whileHover={{ scale: 1.15, rotate: 6 }}
            transition={{ type: "spring", stiffness: 300 }}
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>

        </div>
      </motion.div>
    </Tilt>
  );
};


// About Section
export const About = () => {
  return (
    <SectionWrapper idName="about">
      <>

        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            Introduction
          </p>

          <h2 className={styles.sectionHeadText}>
            Overview.
          </h2>
        </motion.div>



        {/* Body */}
        <div className="mt-4 flex lg:flex-row flex-col-reverse items-center gap-10">

          <motion.p
            variants={fadeIn(undefined, undefined, 0.1, 1)}
            className="flex-1 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I'm a detail-oriented Computer Science Engineering student at VIT
            Bhopal with strong foundations in Data Structures, Software
            Development, and Cloud Computing. I've built scalable
            applications and AI/ML solutions through hands-on projects and
            internships, working with Python, Java, React, and AWS. I'm a
            quick learner who enjoys turning real-world problems into
            efficient, user-friendly solutions. Let's build something great
            together!
          </motion.p>



          {/* Profile Photo */}
          <motion.div
            variants={fadeIn("left", "spring", 0.2, 1)}
            className="relative shrink-0"
          >

            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px 2px rgba(145,94,255,0.35)",
                  "0 0 40px 6px rgba(145,94,255,0.6)",
                  "0 0 20px 2px rgba(145,94,255,0.35)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-full p-[3px] bg-gradient-to-br from-[#915eff] to-[#7c3aed]"
            >

              <motion.img
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={profilePhoto}
                alt="Riya Shukla"
                className="w-full h-full object-cover rounded-full border-4 border-tertiary"
              />

            </motion.div>

          </motion.div>

        </div>



        {/* Services */}
        <div className="mt-20 flex flex-wrap gap-10">

          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              index={i}
              {...service}
            />
          ))}

        </div>


      </>
    </SectionWrapper>
  );
};