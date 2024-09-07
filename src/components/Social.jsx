import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Social = () => {
  const imgStyle = {
    cursor: "pointer",
    width: "50px",
    height: "50px",
    outline: "none",
    borderRadius: "50%",
    transition: "outline 0.25s linear",
    position: "relative",
  };

  const imgHoverStyle = {
    outline: "1px solid white",
  };

  const tooltipStyle = {
    color: "white",
    fontSize: "0.5rem",
    backgroundColor: "azure",
    position: "absolute",
    top: "-75%",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "5px 10px",
    borderRadius: "5px",
    opacity: 0,
    whiteSpace: "nowrap",
    transition: "all 0.25s linear",
    pointerEvents: "none",
  };

  const imgWrapperStyle = {
    position: "relative",
    display: "inline-block",
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const socialLinks = [
    {
      src: "/social/email.png",
      alt: "Email",
      tooltip: "Email",
      href: "mailto:dev.ammar15@gmail.com",
      bgc: "#389155",
    },
    {
      src: "/social/github.png",
      alt: "GitHub",
      tooltip: "GitHub",
      href: "https://github.com/itsammarsaqib",
      bgc: "#000000",
    },
    {
      src: "/social/linkedin.png",
      alt: "LinkedIn",
      tooltip: "LinkedIn",
      href: "https://www.linkedin.com/in/devammarsaqib/",
      bgc: "#007AB9",
    },
  ];

  return (
    <>
      <div className="mt-5 flex flex-row gap-4 justify-center align-middle">
        {socialLinks.map((link, index) => (
          <div
            key={index}
            style={imgWrapperStyle}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <a href={link.href} target="_blank">
              <img
                src={link.src}
                alt={link.alt}
                style={{
                  ...imgStyle,
                  ...(hoveredIndex === index ? imgHoverStyle : {}),
                }}
              />
            </a>
            <div
              className="tooltip"
              style={{
                ...tooltipStyle,
                opacity: hoveredIndex === index ? 1 : 0,
                top: hoveredIndex === index ? "-75%" : "0",
                fontSize: hoveredIndex === index ? "0.75rem" : "0",
                backgroundColor: link.bgc,
              }}
            >
              {link.tooltip}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Social;
