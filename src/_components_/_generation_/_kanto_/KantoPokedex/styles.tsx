import styled from "styled-components";

const StyledKantoPokedex = styled.section`
  transform-style: preserve-3d;
  transform: translateZ(0px) rotate3d(0, 1, 0, 0deg);
  position: relative;
  background: orange;
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 400px;
  * {
    position: absolute;
  }
`;

const StyledKantoPokedexRight = styled.section``;

const StyledKantoPokedexBack = styled.div`
  width: 100%;
  height: 100%;
  background: yellow;
  transform: translateZ(-10px);
`;

export { StyledKantoPokedex, StyledKantoPokedexRight, StyledKantoPokedexBack };
