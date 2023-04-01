import styled from "styled-components";

const StyledKantoPokedexLeft = styled.section`
  #border-wrapper {
    #border-left {
      height: 525px;
      position: absolute;
      top: 0;
      width: 10px;
      transform: translateY(0px) translateZ(15px);
    }
  }
`;

const StyledKantoPokedexLeftBorderLeft = styled.div`
  background: blue;
  height: 100%;
  width: 20px;
  transform: rotateY(-90deg) translateZ(10px);
`;

export { StyledKantoPokedexLeft, StyledKantoPokedexLeftBorderLeft };
