import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Languages and Frameworks
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {technologies.map((technology) => (
          <div className="flex items-center gap-4" key={technology.name}>
            <div className="flex-shrink-0 w-28 h-28">
              <BallCanvas icon={technology.icon} />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-center mb-2">
                <span>{technology.name}</span>
                <span>{technology.progress}%</span>
              </div>
              <div className="w-full bg-white rounded h-3 border-white border-[0.5px] overflow-hidden">
                <div
                  className="h-full rounded"
                  style={{
                    width: `${technology.progress}%`,
                    backgroundColor:
                      technology.progress >= 90
                        ? "darkgreen"
                        : technology.progress >= 80
                        ? " gold"
                        : "red",
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
