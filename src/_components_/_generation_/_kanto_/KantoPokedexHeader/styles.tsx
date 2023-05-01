import styled from "styled-components";
import colors from "../../../../_utils_/_colors_/kanto";

const StyledKantoPokedexHeaderBack = styled.div`
  height: 100px;
  width: 100%;
  clip-path: polygon(50% 0%, 100% 0, 100% 70%, 65% 70%, 50% 100%, 0 100%, 0 0);
  background: ${colors.shadow};
  border: 1px solid;
  border-bottom: 0;
  transform: translateZ(-20.5px);
`;

const StyledKantoPokedexHeader = styled.header`
  height: 100px;
  width: 100%;
  clip-path: polygon(50% 0%, 100% 0, 100% 70%, 65% 70%, 50% 100%, 0 100%, 0 0);
  background: black;
  transform: translateZ(30px);
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
  transform: translateY(0px) translateZ(30px);
  border: 1px solid;
`;

const StyledKantoPokedexHeaderBorderLeft = styled.div`
  width: 22px;
  height: 100px;
  background: ${colors.shadow};
  border: 1px solid;
  border-left: 0;
  transform: rotateY(-90deg) translateZ(11px) translateX(19px);
`;

const StyledKantoPokedexHeaderBorderRight = styled.div`
  width: 51px;
  height: 70px;
  background: ${colors.principal};
  box-shadow: inset 15px 0px 15px 0px ${colors.shadow};
  border: 1px solid;

  transform: rotateY(-90deg) translateZ(-375px) translateX(5px) translateY(0px);
`;

const StyledKantoPokedexHeaderBorderTop = styled.div`
  width: 100%;
  height: 51px;
  background: ${colors.shadow};
  border: 1px solid;
  border-top: 0;
  transform: rotateX(90deg) translateY(5px) translateZ(25.5px) translateX(0px);
`;

const StyledKantoPokedexHeaderBorderBottom = styled.div`
  width: 50%;
  height: 20px;
  transform: rotateX(-90deg) translateZ(90px) translateY(-20px);
  background: ${colors.shadow};
  border: 1px solid;
`;

const StyledKantoPokedexHeaderBorderBottomDiagonnale = styled.div`
  width: 70px;
  height: 20px;
  transform: rotateX(-90deg) rotateY(26.5deg) translateZ(154px)
    translateY(-20px) translateX(142px);
  background: ${colors.shadow};
  border: 1px solid;
`;

const StyledKantoPokedexHeaderBorderBottomRight = styled.div`
  width: 140px;
  height: 50px;
  transform: rotateY(0deg) rotateX(-90deg) translateZ(45px) translateY(-6px)
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
