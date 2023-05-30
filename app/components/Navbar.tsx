import React from "react";
import NavbarLinks from "./NavbarLinks";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 flex items-center justify-between">
      <div>
        <NavbarLinks />
      </div>
      <div>
        <Logo />
      </div>
      <div>
        <SocialIcons />
      </div>
    </header>
  );
};

export default Navbar;
