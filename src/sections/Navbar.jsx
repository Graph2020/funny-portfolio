import React, { useState } from "react";
import { motion } from "motion/react";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a href="" className="nav-link">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a href="" className="nav-link">
          About
        </a>
      </li>
      <li className="nav-li">
        <a href="" className="nav-link">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a href="" className="nav-link">
          Contact
        </a>
      </li>
    </ul>
  );
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
            href="/"
          >
            Vlad
          </a>
          <button
            className="flex cursor-pointer focus:outline-none sm:hidden text-neutral-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="size-6"
              alt=""
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
          className="block overflow-hidden text-center sm:hidden"
        >
          <Navigation />
        </motion.div>
      )}
    </div>
  );
};
