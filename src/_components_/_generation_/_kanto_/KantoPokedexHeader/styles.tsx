import styled from "styled-components";
import colors from "../../../../_utils_/_colors_/kanto";

const StyledKantoPokedexHeader = styled.header`
  height: 100px;
  width: 100%;
  clip-path: polygon(40% 100%, 50% 70%, 100% 70%, 100% 0, 0 0, 0 100%);
  background: ${colors.principal};
  transform: translateY(0px) translateZ(20px);
  transform-style: preserve-3d;
`;

const StyledKantoPokedexHeaderButtonWrapper = styled.div`
  width: 100%;
  padding: 10px 15px;
  transform: translateY(0px) translateZ(20px);
`;

const StyledKantoPokedexHeaderBorderLeft = styled.div`
  width: 10px;
  height: 100px;
  background: ${colors.shadow};
  transform: rotateY(-90deg) translateZ(5px) translateX(15px);
`;

const StyledKantoPokedexHeaderBorderRight = styled.div`
  width: 10px;
  height: 70px;
  background: ${colors.shadow};
  transform: rotateY(-90deg) translateZ(-394px) translateX(15px);
`;

const StyledKantoPokedexHeaderBorderTop = styled.div`
  width: 100%;
  height: 10px;
  background: ${colors.shadow};
  transform: rotateX(90deg) translateY(15px) translateZ(5px);
`;

const StyledKantoPokedexHeaderBorderBottom = styled.div`
  width: 40%;
  height: 10px;
  transform: rotateX(-90deg) translateZ(94.5px) translateY(-15px);
  background: ${colors.shadow};
`;

const StyledKantoPokedexHeaderBorderBottomDiagonnale = styled.div`
  width: 12.5%;
  height: 10px;
  transform: rotateX(90deg) rotateY(-37.5deg) translateZ(-158px)
    translateX(75px) translateY(15px);
  background: ${colors.shadow};
`;

const StyledKantoPokedexHeaderBorderBottomRight = styled.div`
  width: 40%;
  height: 10px;
  transform: rotateX(-90deg) translateZ(65px) translateY(-15px)
    translateX(240px);
  background: ${colors.shadow};
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
