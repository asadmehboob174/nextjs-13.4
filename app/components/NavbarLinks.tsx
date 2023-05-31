"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import AnimateLine from "./AnimateLine";

// const MotionLink = motion(Link);

const slideInRight = {
  key: "slideInRight",
  initial: { x: -100 },
  animate: { x: 0 },
  exit: { x: 100 },
  transition: { duration: 0.5 },
};

interface CustumLinkProps {
  href: string;
  title: string;
  className?: string;
}

const CustumLink = ({ href, title, className = "" }: CustumLinkProps) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} mx-4 relative group`}>
      {title}
      {true ? (
        <motion.span
          className="absolute left-0 -bottom-1 
        h-[2px] inline-block w-0 bg-gray-800 group-hover:w-full
         transition-[width] ease duration-300"
        >
          &nbsp;
        </motion.span>
      ) : (
        ""
      )}
    </Link>
  );
};

const NavbarLinks = () => {
  const pathname = usePathname();

  const controls = useAnimation();

  useEffect(() => {
    controls.start;
  }, []);

  return (
    <motion.nav className=" relative">
      <motion.span
        initial={{ x: 0, y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.3, delay: 0 * 0.1 }}
      >
        <CustumLink href={"/"} className={`mr-2`} title="Home" />
      </motion.span>
      <motion.span
        initial={{ x: 0, y: -50, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.3, delay: 1 * 0.1 }}
      >
        <CustumLink
          href={"/about"}
          className={`mr-2 ${pathname === "/" ? "active" : ""}`}
          title="About"
        />
      </motion.span>
      <motion.span
        initial={{ x: 0, y: -50, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.3, delay: 2 * 0.1 }}
      >
        <CustumLink
          href={"/projects"}
          className={`mr-2 ${pathname === "/" ? "active" : ""}`}
          title="Projects"
        />
      </motion.span>
      <motion.span
        initial={{ x: 0, y: -50, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.3, delay: 3 * 0.1 }}
      >
        <CustumLink
          href={"/articles"}
          className={`mr-2 ${pathname === "/" ? "active" : ""}`}
          title="Articles"
        />
      </motion.span>
    </motion.nav>
  );
};

export default NavbarLinks;
