import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, menu } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src="/name-logo.png"
            alt="name logo"
            className="w-8 h-8 object-contain mb-5"
          />
          <div className="text-white text-[16] font-bold cursor-pointer flex mb-5">
            &nbsp; Ammar &nbsp;
          </div>

          <div className="flex flex-col justify-center items-center mt-1">
            <div className="w-0.5 sm:h-14 h-14 bg-gradient-to-b from-red-500 to-yellow-500" />
          </div>

          <div className="text-white text-[16] font-bold cursor-pointer flex mt-8 ">
            &nbsp; Web Developer &nbsp;
          </div>
          <img
            src="/laptop-logo.png"
            alt="laptop logo"
            className="w-8 h-8 object-contain mt-5"
          />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title
                  ? "text-white bg-black-200"
                  : "text-secondary bg-black-100"
              } focus-within:text-white focus-within:bg-black-200 hover:text-white hover:bg-black-200 bg-black-100 text-[16px] font-medium cursor-pointer p-2 rounded-[5px]`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[25px] h-[25px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gradient-to-r from-black-200 to-black-100 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl border-[1px]`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
