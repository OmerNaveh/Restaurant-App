import styled from "styled-components";
import { colors } from "../../constants/strings";
export const StyledButton = styled.button`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 1em;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: ${colors.Secondary};
    opacity: 0;
    transform: scale(0);
    transition: transform 300ms;
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
