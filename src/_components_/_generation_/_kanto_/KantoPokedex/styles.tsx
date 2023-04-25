import styled from "styled-components";
import colors from "../../../../_utils_/_colors_/kanto";

const StyledKantoPokedex = styled.section`
  transform-style: preserve-3d;
  transform: translateX(-0%) rotate3d(1, 1, 0, 15deg);
  position: relative;

  display: flex;
  flex-direction: column;
  height: 500px;
  width: 400px;

  * {
    position: absolute;
    box-sizing: border-box;
    &:before,
    &:after {
      display: block;
    }
  }
  /*   @media screen and (max-width: 768px) {
    scale: 0.75;
  }
  @media screen and (max-width: 650px) {
    scale: 0.6;
  }
  @media screen and (max-width: 500px) {
    scale: 0.5;
  }
  @media screen and (max-width: 450px) {
    scale: 0.45;
  } */
`;

const StyledKantoPokedexBack = styled.div`
  width: 350px;
  height: 100%;
  background: ${colors.shadow};
  transform: translateZ(-10.1px);
  border: 1px solid;
  border-right: 0;
`;

export { StyledKantoPokedex, StyledKantoPokedexBack };
