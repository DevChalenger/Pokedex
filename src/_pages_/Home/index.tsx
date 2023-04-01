import React from "react";
import Title from "../../_utils_/_title_";

import { StyledHome } from "./styles";

import HomeHeader from "../../_components_/_home_/HomeHeader";
import HomeSection from "../../_components_/_home_/HomeSection";
import HomeConfirm from "../../_components_/_home_/HomeConfirm";

const Home = () => {
  return (
    <StyledHome>
      <Title title={"Home"} />
      <HomeConfirm />
      <HomeHeader />
      <HomeSection />
    </StyledHome>
  );
};

export default Home;
