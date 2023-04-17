import styled from "styled-components";
import colors from "../../../../_utils_/_colors_/kanto";

const StyledKantoPokedexHeader = styled.header`
  height: 100px;
  width: 100%;
  clip-path: polygon(50% 0%, 100% 0, 100% 70%, 65% 70%, 50% 100%, 0 100%, 0 0);
  background: black;
  transform: translateY(0px) translateZ(20px);
  transform-style: preserve-3d;
  &:before {
    content: " ";
    display: block;
    height: calc(100px - 2px);
    width: calc(100% - 2px);
    top: 1px;
    left: 1px;
    background: ${colors.principal};
    position: relative;
    clip-path: polygon(
      50% 0%,
      100% 0,
      100% 70%,
      65% 70%,
      50% 100%,
      0 100%,
      0 0
    );
  }
`;

const StyledKantoPokedexHeaderButtonWrapper = styled.div`
  width: 100%;
  padding: 10px 15px;
  transform: translateY(0px) translateZ(20px);
  border: 1px solid;
`;

const StyledKantoPokedexHeaderBorderLeft = styled.div`
  width: 10px;
  height: 100px;
  background: ${colors.shadow};
  border: 1px solid;
  border-left: 0;
  transform: rotateY(-90deg) translateZ(5px) translateX(15px);
`;

const StyledKantoPokedexHeaderBorderRight = styled.div`
  width: 10px;
  height: 70px;
  background: ${colors.shadow};
  border: 1px solid;
  border-left: 0;
  transform: rotateY(-90deg) translateZ(-394px) translateX(15px);
`;

const StyledKantoPokedexHeaderBorderTop = styled.div`
  width: 100%;
  height: 10px;
  background: ${colors.shadow};
  border: 1px solid;
  border-top: 0;
  transform: rotateX(90deg) translateY(15px) translateZ(5px);
`;

const StyledKantoPokedexHeaderBorderBottom = styled.div`
  width: 50%;
  height: 10px;
  transform: rotateX(-90deg) translateZ(94.5px) translateY(-15px);
  background: ${colors.shadow};
  border: 1px solid;
`;

const StyledKantoPokedexHeaderBorderBottomDiagonnale = styled.div`
  width: 17%;
  height: 10px;
  transform: rotateX(-90deg) rotateY(27deg) translateZ(159.5px)
    translateY(-15px) translateX(138.5px);
  background: ${colors.shadow};
  border: 1px solid;
`;

const StyledKantoPokedexHeaderBorderBottomRight = styled.div`
  width: 34%;
  height: 10px;
  transform: rotateY(0deg) rotateX(-90deg) translateZ(65px) translateY(-15px)
    translateX(260px);
  background: ${colors.shadow};
  border: 1px solid;
  border-left: 0;
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
