import styled from "styled-components";
import colors from "../../../../_utils_/_colors_/kanto";

const StyledKantoPokedex = styled.section`
  transform-style: preserve-3d;
  transform: translateX(-00px) rotate3d(0, 1, 0, 0deg);
  position: relative;
  background: ${colors.shadow};
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 400px;

  * {
    position: absolute;
    box-sizing: border-box;
  }
`;

const StyledKantoPokedexBack = styled.div`
  width: 100%;
  height: 100%;
  background: ${colors.shadow};
  transform: translateZ(-10px);
  border: 1px solid;
`;

export { StyledKantoPokedex, StyledKantoPokedexBack };
