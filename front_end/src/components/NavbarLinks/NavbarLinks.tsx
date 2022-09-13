import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { WelcomeStr } from "../../constants/strings";
import { StyledNavLink } from "./style";
interface navProps {
  content: string;
}
const NavbarLinks = ({ content }: navProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <StyledNavLink
      isActive={
        `/${content.toLowerCase()}` === location.pathname ||
        (location.pathname === "/" && content === WelcomeStr)
      }
      onClick={() => {
        navigate(`/${content.toLowerCase()}`);
      }}
    >
      {content}
    </StyledNavLink>
  );
};

export default NavbarLinks;
