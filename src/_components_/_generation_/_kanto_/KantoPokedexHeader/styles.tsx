import styled from "styled-components";

const StyledKantoPokedexHeader = styled.header`
  height: 100px;
  width: 100%;
  clip-path: polygon(50% 100%, 60% 70%, 100% 70%, 100% 0, 0 0, 0 100%);
  background: red;
  transform: translateY(0px) translateZ(20px);
  transform-style: preserve-3d;
`;

const StyledKantoPokedexHeaderButtonWrapper = styled.div`
  width: 100%;
  padding: 10px 15px;
  transform: translateY(0px) translateZ(20px);
  #button-glasss {
    width: 70px;
    height: 70px;
    border-radius: 100%;
    background: #dedede;
    position: relative;
    #center {
      width: 90%;
      height: 90%;
      margin-left: auto;
      border-radius: 50%;
      background: cyan;
      transform: translateZ(5px);
    }
  }
`;

const StyledKantoPokedexHeaderBorderLeft = styled.div`
  width: 10px;
  height: 100px;
  background: yellow;
  transform: rotateY(-90deg) translateZ(5px) translateX(15px);
`;

const StyledKantoPokedexHeaderBorderRight = styled.div`
  width: 10px;
  height: 70px;
  background: yellow;
  transform: rotateY(-90deg) translateZ(-394px) translateX(15px);
`;

const StyledKantoPokedexHeaderBorderTop = styled.div`
  width: 100%;
  height: 10px;
  background: white;
  transform: rotateX(90deg) translateY(15px) translateZ(5px);
`;

const StyledKantoPokedexHeaderBorderBottom = styled.div`
  width: 50%;
  height: 10px;
  transform: rotateX(-90deg) translateZ(94.5px) translateY(-15px);
  background: black;
`;

const StyledKantoPokedexHeaderBorderBottomDiagonnale = styled.div`
  width: 12.5%;
  height: 10px;
  transform: rotateX(90deg) rotateY(-37.5deg) translateZ(-181.5px)
    translateX(107px) translateY(15px);
  background: white;
`;

const StyledKantoPokedexHeaderBorderBottomRight = styled.div`
  width: 40%;
  height: 10px;
  transform: rotateX(-90deg) translateZ(65px) translateY(-15px)
    translateX(240px);
  background: gray;
`;
export {
  StyledKantoPokedexHeader,
  StyledKantoPokedexHeaderButtonWrapper,
  StyledKantoPokedexHeaderBorderRight,
  StyledKantoPokedexHeaderBorderLeft,
  StyledKantoPokedexHeaderBorderBottom,
  StyledKantoPokedexHeaderBorderBottomDiagonnale,
  StyledKantoPokedexHeaderBorderBottomRight,
  StyledKantoPokedexHeaderBorderTop,
};
