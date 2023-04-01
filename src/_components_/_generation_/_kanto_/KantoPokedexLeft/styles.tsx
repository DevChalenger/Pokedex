import styled from "styled-components";

const StyledKantoPokedexLeft = styled.section``;

const StyledKantoPokedexLeftBorderLeft = styled.div`
  background: blue;
  height: 100%;
  width: 20px;
  transform: rotateY(-90deg) translateZ(10px);
`;

const StyledKantoPokedexLeftBorderBottom = styled.div`
  background: green;
  height: 20px;
  width: 100%;
  transform: rotateX(-90deg) translateZ(490px);
`;

const StyledKantoPokedexLeftBorderTop = styled.div`
  background: green;
  height: 20px;
  width: 100%;
  transform: rotateX(90deg) translateZ(10px);
`;

const StyledKantoPokedexLeftBorderRight = styled.div`
  background: blue;
  height: 100%;
  width: 20px;
  transform: rotateY(90deg) translateZ(390px);
`;

export {
  StyledKantoPokedexLeft,
  StyledKantoPokedexLeftBorderLeft,
  StyledKantoPokedexLeftBorderBottom,
  StyledKantoPokedexLeftBorderTop,
  StyledKantoPokedexLeftBorderRight,
};
