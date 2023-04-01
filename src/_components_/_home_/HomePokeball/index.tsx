import React, { useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";

import {
  StyledHomePokeball,
  StyledHomePokeballButton,
  StyledHomePokeballCenter,
} from "./styles";

const HomePokeball = () => {
  const audioHover = useRef(new Audio(require("../../../_song_/Growing.mp3")));
  const audioClick = useRef(new Audio(require("../../../_song_/Out.mp3")));

  const hoverSound = () => {
    audioHover.current.currentTime = 0;
    audioHover.current.play();
  };
  const navigate = useNavigate();

  const clickSound = () => {
    audioClick.current.play();
    setTimeout(() => {
      navigate("/pokedex");
    }, 1000);
  };

  useEffect(() => {
    audioClick.current.pause();
    audioHover.current.pause();
  }, []);

  return (
    <StyledHomePokeball onMouseEnter={hoverSound}>
      <StyledHomePokeballCenter>
        <StyledHomePokeballButton onClick={clickSound} />
      </StyledHomePokeballCenter>
    </StyledHomePokeball>
  );
};

export default HomePokeball;
