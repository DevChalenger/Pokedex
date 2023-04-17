import styled from "styled-components";
import colors from "../../../../_utils_/_colors_/kanto";

const StyledKantoPokedexLeft = styled.section`
  transform-style: preserve-3d;
  width: 100%;
  height: 430px;
  transform: translateZ(10px) translateY(70px);
  background: ${colors.principal};
`;

const StyledKantoPokedexLeftBorderLeft = styled.div`
  background: ${colors.shadow};
  border: 1px solid;
  border-right: 0;
  height: 100%;
  width: 20px;
  transform: rotateY(-90deg) translateZ(10px);
  &:before {
    content: "";
    display: block;
    height: calc(100% - 99px);
    width: 20px;
    top: 99px;
    position: relative;
    border-right: 1px solid;
    box-sizing: border-box;
  }
`;

const StyledKantoPokedexLeftBorderBottom = styled.div`
  background: ${colors.shadow};
  height: 20px;
  width: 100%;
  transform: rotateX(-90deg) translateZ(490px);
`;

const StyledKantoPokedexLeftBorderTop = styled.div`
  background: ${colors.shadow};
  border: 1px solid;
  border-bottom: 0;

  height: 20px;
  width: 100%;
  transform: rotateX(90deg) translateZ(10px);
`;

const StyledKantoPokedexLeftBorderRight = styled.div`
  background: ${colors.shadow};
  height: 100%;
  width: 20px;
  transform: rotateY(90deg) translateZ(390px);
  border: 1px solid;
  border-left: 0;
  &:before {
    content: "";
    display: block;
    height: calc(100% - 69.5px);
    width: 20px;
    top: 69.5px;
    position: relative;
    border-left: 1px solid;
    box-sizing: border-box;
  }
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

export {
  StyledKantoPokedexLeft,
  StyledKantoPokedexLeftBorderLeft,
  StyledKantoPokedexLeftBorderBottom,
  StyledKantoPokedexLeftBorderTop,
  StyledKantoPokedexLeftBorderRight,
  StyledKantoPokedexLeftRotatePillar,
};
