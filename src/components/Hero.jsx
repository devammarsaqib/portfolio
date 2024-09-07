import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useState, useEffect } from "react";
import { bgmobile } from "../assets";
const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 576px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`${
          isMobile && "mt-10"
        } absolute inset-0 top-[120px] max-w-7xl mx-auto ${
          styles.paddingX
        } flex flex-row items-start gap-5
          `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[orangered]" />
          <div className="w-[3px] sm:h-80 h-[180px] bg-gradient-to-b from-red-500 to-yellow-500" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[orangered]">Ammar!</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications, 3D visuals{" "}
            <br className="sm:block hidden" /> and user interfaces.
          </p>
        </div>
      </div>

      {isMobile ? (
        <div className="flex flex-col items-center justify-center h-full">
          <img
            src={bgmobile}
            alt="Placeholder"
            className="mt-[350px] w-[80%] h-auto max-w-[400px] rounded-xl"
          />
          <p className="text-gray-400 sm:text-sm text-xs mt-4 text-center">
            Please use a computer or laptop to view the 3D animation.{" "}
          </p>
        </div>
      ) : (
        <ComputersCanvas />
      )}

      {!isMobile && (
        <div className="absolute xs:bottom-10 bottom-30 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      )}
    </section>
  );
};

export default Hero;
