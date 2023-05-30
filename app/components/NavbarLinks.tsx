"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import AnimateLine from "./AnimateLine";

// const MotionLink = motion(Link);

interface CustumLinkProps {
  href: string;
  title: string;
  className?: string;
}

const CustumLink = ({ href, title, className = "" }: CustumLinkProps) => {
  return (
    <Link href={href} className={`${className}`}>
      {title}
    </Link>
  );
};

const NavbarLinks = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-between">
      <CustumLink
        href={"/"}
        className={`mr-2 ${pathname === "/" ? "active" : ""}`}
        title="Home"
      />
      <CustumLink
        href={"/about"}
        className={`mr-2 ${pathname === "/" ? "active" : ""}`}
        title="About"
      />
      <CustumLink
        href={"/projects"}
        className={`mr-2 ${pathname === "/" ? "active" : ""}`}
        title="Projects"
      />
      <CustumLink
        href={"/articles"}
        className={`mr-2 ${pathname === "/" ? "active" : ""}`}
        title="Articles"
      />
    </nav>
  );
};

export default NavbarLinks;
