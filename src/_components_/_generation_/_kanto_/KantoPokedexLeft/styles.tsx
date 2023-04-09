import styled from "styled-components";
import colors from "../../../../_utils_/_colors_/kanto";

const StyledKantoPokedexLeft = styled.section`
  transform-style: preserve-3d;
  width: 100%;
  height: 425px;
  transform: translateZ(10px) translateY(75px);
  background: ${colors.principal};
`;

const StyledKantoPokedexBorderInside = styled.section`
  transform-style: preserve-3d;
  width: 330px;
  height: 405px;
  transform: translateZ(10px) translateY(82.5px) translateX(14px);
  background: ${colors.shadow};
  clip-path: polygon(0 100%, 0 7.5%, 42.5% 7.5%, 55% 0%, 100% 0, 100% 100%);
  &:before {
    content: "";
    display: block;
    width: 320px;
    height: 395px;
    transform: translateY(5px) translateX(5px);
    clip-path: polygon(0 100%, 0 7.5%, 42.5% 7.5%, 55% 0%, 100% 0, 100% 100%);
    background: ${colors.principal};
  }
`;

const StyledKantoPokedexLeftBorderLeft = styled.div`
  background: ${colors.shadow};
  height: 100%;
  width: 20px;
  transform: rotateY(-90deg) translateZ(10px);
`;

const StyledKantoPokedexLeftBorderBottom = styled.div`
  background: ${colors.shadow};
  height: 20px;
  width: 100%;
  transform: rotateX(-90deg) translateZ(490px);
`;

const StyledKantoPokedexLeftBorderTop = styled.div`
  background: ${colors.shadow};
  height: 20px;
  width: 100%;
  transform: rotateX(90deg) translateZ(10px);
`;

const StyledKantoPokedexLeftBorderRight = styled.div`
  background: ${colors.shadow};
  height: 100%;
  width: 20px;
  transform: rotateY(90deg) translateZ(390px);
`;

const StyledKantoPokedexLeftRotatePillar = styled.div`
  width: 40px;
  height: 425px;
  transform: translateY(75px) translateZ(26.5px) translateX(365px);
  transform-style: preserve-3d;
  .face {
    width: 20px;
    height: 100%;
    background: ${colors.principal};
    &:before,
    &:after {
      display: block;
      content: " ";
      height: 1px;
      width: 100%;
      border-top: 2px solid ${colors.shadow};
      border-bottom: 2px solid ${colors.shadow};
    }
    &:before {
      transform: translateY(25px);
    }
    &:after {
      transform: translateY(390px);
    }
    &:nth-child(1) {
      transform: translateZ(12px) translateX(0px);
    }
    &:nth-child(2) {
      transform: translateZ(5px) translateX(-16.5px) rotateY(-45deg);
    }
    &:nth-child(3) {
      transform: translateZ(5px) translateX(16.5px) rotateY(45deg);
    }

    &:nth-child(4) {
      transform: translateZ(-12px) translateX(23.5px) rotateY(90deg);
    }

    &:nth-child(5) {
      transform: translateZ(-12px) translateX(-23.5px) rotateY(-90deg);
    }

    &:nth-child(6) {
      transform: translateZ(-29px) translateX(-16.5px) rotateY(-135deg);
    }

    &:nth-child(7) {
      transform: translateZ(-29px) translateX(16.5px) rotateY(135deg);
    }

    &:nth-child(8) {
      transform: translateZ(-36px) translateX(0px) rotateY(180deg);
    }
  }
  .rounded {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background: ${colors.shadow};
    &:nth-child(9) {
      transform: rotateX(90deg) translateZ(25px) translateX(-15px)
        translateY(-12px);
    }
    &:nth-child(10) {
      transform: rotateX(90deg) translateZ(-400px) translateX(-15px)
        translateY(-12px);
    }
  }
  .side {
    z-index: 10;
    &:nth-child(11) {
      transform: rotateX(90deg) translateZ(-350px) translateX(-15px)
        translateY(-12px);
    }
    &:nth-child(12) {
      transform: rotateX(90deg) translateZ(-349px) translateX(-15px)
        translateY(-12px);
    }
    &:nth-child(13) {
      transform: rotateX(90deg) translateZ(-351px) translateX(-15px)
        translateY(-12px);
    }
    &:nth-child(14) {
      transform: rotateX(90deg) translateZ(-348px) translateX(-15px)
        translateY(-12px);
    }
    &:nth-child(15) {
      transform: rotateX(90deg) translateZ(-347px) translateX(-15px)
        translateY(-12px);
    }

    &:nth-child(16) {
      transform: rotateX(90deg) translateZ(-25px) translateX(-15px)
        translateY(-12px);
    }
    &:nth-child(17) {
      transform: rotateX(90deg) translateZ(-24px) translateX(-15px)
        translateY(-12px);
    }
    &:nth-child(18) {
      transform: rotateX(90deg) translateZ(-26px) translateX(-15px)
        translateY(-12px);
    }
    &:nth-child(19) {
      transform: rotateX(90deg) translateZ(-23px) translateX(-15px)
        translateY(-12px);
    }
    &:nth-child(20) {
      transform: rotateX(90deg) translateZ(-22px) translateX(-15px)
        translateY(-12px);
    }
  }
`;

const StyledKantoPokedexLeftScreen = styled.div``;

export {
  StyledKantoPokedexLeft,
  StyledKantoPokedexLeftBorderLeft,
  StyledKantoPokedexLeftBorderBottom,
  StyledKantoPokedexLeftBorderTop,
  StyledKantoPokedexLeftBorderRight,
  StyledKantoPokedexBorderInside,
  StyledKantoPokedexLeftRotatePillar,
};
