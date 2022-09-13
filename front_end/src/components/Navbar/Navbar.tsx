import React from "react";
import { navStrings } from "../../constants/strings";
import NavbarLinks from "../NavbarLinks/NavbarLinks";
import NavLogo from "../NavbarLogo/NavLogo";
import { LinksContainer, NavbarContainer } from "./style";

const Navbar = () => {
  const navigationLinks = () => {
    return navStrings.map((navString, index) => {
      return <NavbarLinks key={index} content={navString} />;
    });
  };
  return (
    <NavbarContainer>
      <>
        <NavLogo />
      </>
      <LinksContainer>{navigationLinks()}</LinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
