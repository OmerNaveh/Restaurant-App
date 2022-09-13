import styled from "styled-components";
import { colors } from "../../constants/strings";
interface navLinkprops {
  isActive?: boolean;
}
export const StyledNavLink = styled.button<navLinkprops>`
  border: none;
  background: none;
  position: relative;
  padding: 0;
  &::after {
    content: "";
    position: absolute;
    bottom: 1em;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: ${colors.Secondary};
    opacity: ${(props) => (props.isActive ? "1" : "0")};
    transform: ${(props) => (props.isActive ? "scale(1)" : "scale(0)")};
    transition: ${(props) => (props.isActive ? "" : "transform 300ms")};
  }
  &:hover,
  :focus {
    outline: none;
    cursor: pointer;
    &::after {
      opacity: 1;
      transform: scale(1);
      transform-origin: center;
    }
  }
`;
