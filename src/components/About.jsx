import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="Web Development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] text-justify max-w-3xl leading-[30px]"
      >
        Hello, and welcome to my portfolio! I am an efficient full-stack web
        developer currently on the journey to master dynamic and responsive web
        applications. Having experience in Python and JavaScript, with expertise
        in frameworks like React JS, Node.js, Express.js, and databases like
        MongoDB, I continuously learn and explore new technologies and tools to
        enhance my skills and performance more and more. I always look out for
        different and more challenging projects to work on. In a way, it's fun
        to enjoy the process of learning something new. My aim is to build
        intuitive, user-friendly applications that solve real problems. As I
        grow in this industry, I'm excited to be part of new challenges,
        collaboration, and contributions to innovative projects. Being a fast
        learner, I closely collaborate with clients to develop efficient,
        scalable, and user-friendly solutions to solve real-world problems.
        Let's get your ideas on board!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
