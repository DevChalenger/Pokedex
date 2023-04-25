import styled from "styled-components";
import colors from "../../../../_utils_/_colors_/kanto";

const StyledKantoPokedexHeaderBack = styled.div`
  height: 100px;
  width: 100%;
  clip-path: polygon(50% 0%, 100% 0, 100% 70%, 65% 70%, 50% 100%, 0 100%, 0 0);
  background: ${colors.shadow};
  border: 1px solid;
  border-bottom: 0;
  transform: translateZ(-9.5px);
`;

const StyledKantoPokedexHeader = styled.header`
  height: 100px;
  width: 100%;
  clip-path: polygon(50% 0%, 100% 0, 100% 70%, 65% 70%, 50% 100%, 0 100%, 0 0);
  background: black;
  transform: translateZ(20px);
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
  width: 11px;
  height: 100px;
  background: ${colors.shadow};
  border: 1px solid;
  border-left: 0;
  transform: rotateY(-90deg) translateZ(5px) translateX(15px);
`;

const StyledKantoPokedexHeaderBorderRight = styled.div`
  width: 30px;
  height: 70px;
  background: ${colors.shadow};
  border: 1px solid;

  transform: rotateY(-90deg) translateZ(-384.5px) translateX(5px)
    translateY(-1px);
`;

const StyledKantoPokedexHeaderBorderTop = styled.div`
  width: 100%;
  height: 30px;
  background: ${colors.shadow};
  border: 1px solid;
  border-top: 0;
  transform: rotateX(90deg) translateY(5px) translateZ(15px) translateX(0px);
`;

const StyledKantoPokedexHeaderBorderBottom = styled.div`
  width: 50%;
  height: 30px;
  transform: rotateX(-90deg) translateZ(85px) translateY(-5px);
  background: ${colors.shadow};
  border: 1px solid;
  border-left: 0;
`;

const StyledKantoPokedexHeaderBorderBottomDiagonnale = styled.div`
  width: 70px;
  height: 30px;
  transform: rotateX(-90deg) rotateY(27deg) translateZ(150.5px) translateY(-5px)
    translateX(143px);
  background: ${colors.shadow};
  border: 1px solid;
`;

const StyledKantoPokedexHeaderBorderBottomRight = styled.div`
  width: 140px;
  height: 30px;
  transform: rotateY(0deg) rotateX(-90deg) translateZ(54.5px) translateY(-5px)
    translateX(260px);
  background: ${colors.shadow};
  border: 1px solid;
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
  StyledKantoPokedexHeaderBack,
};
