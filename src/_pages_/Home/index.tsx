import React, { useCallback } from "react";
import Title from "../../_utils_/_title_";
import { ReactComponent as PokemonTitle } from "../../_assets_/pokemon-title.svg";

import {
  StyledHome,
  StyledHomePokeball,
  StyledHomePokeballButton,
  StyledHomePokeballCenter,
  StyledHomeSection,
  StyledHomeTitle,
} from "./styles";

import Confirm from "../../_components_/_home-components_/Confirm";

const Home = () => {
  const hoverSound = () => {
    const sound = new Audio(require("../../_song_/Growing.mp3"));
    sound.currentTime = 0;
    sound.play();
  };

  const clickSound = () => {
    const sound = new Audio(require("../../_song_/Out.mp3"));
    sound.play();
  };

  const PlayingTheme = () => {};

  return (
    <StyledHome onMouseEnter={PlayingTheme}>
      <Title title={"Home"} />
      <Confirm />
      <StyledHomeSection>
        <StyledHomeTitle>
          <PokemonTitle />
        </StyledHomeTitle>
        <StyledHomePokeball onMouseEnter={hoverSound}>
          <StyledHomePokeballCenter>
            <StyledHomePokeballButton onClick={clickSound} />
          </StyledHomePokeballCenter>
        </StyledHomePokeball>
      </StyledHomeSection>
    </StyledHome>
  );
};

export default Home;
