import React from "react";
import { StyledButton } from "./style";

interface buttonProps {
  content: string;
}
const PrimaryButton = ({ content }: buttonProps) => {
  return <StyledButton>{content}</StyledButton>;
};

export default PrimaryButton;
