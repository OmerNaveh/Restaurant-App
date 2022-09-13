import React from "react";
import { WelcomeImageSrc } from "../../constants/strings";
import { StyledHomeContainer, WelcomeImage } from "./style";

const HomePage = () => {
  return (
    <StyledHomeContainer>
      <></>
      <WelcomeImage src={WelcomeImageSrc} />
      HomePage
    </StyledHomeContainer>
  );
};

export default HomePage;
