import styled from "styled-components";
import colors from "../../../../_utils_/_colors_/kanto";
import { RoundedColumnStyle } from "../../../../_utils_/_styles_";

const StyledKantoPokedexLeft = styled.section`
  transform-style: preserve-3d;
  height: 500px;
  width: 400px;
  transform: translateZ(0px) translateY(0px) translateX(-00%)
    rotate3d(0, 1, 0, 15deg);
`;

const StyledKantoPokedexLeftBack = styled.div`
  width: 350px;
  height: 100%;
  background: ${colors.shadow};
  transform: translateZ(-20px);
  border: 1px solid;
  border-right: 0;
`;

const StyledKantoPokedexLeftFront = styled.div`
  height: 100%;
  width: 350px;
  background: ${colors.principal};
  border: 1px solid;
  transform: translateZ(10px);
`;

const StyledKantoPokedexLeftBorderLeft = styled.div`
  background: ${colors.shadow};
  border: 1px solid;
  border-right: 0;
  height: 100%;
  width: 30px;
  transform: rotateY(-90deg) translateZ(15px) translateX(-5px);
  &:before {
    content: "";
    display: block;
    height: calc(100% - 99px);
    width: 100%;
    top: 99px;
    position: relative;
    border-right: 1px solid;
    box-sizing: border-box;
  }
`;

const StyledKantoPokedexLeftBorderBottom = styled.div`
  background: ${colors.shadow};
  height: 30px;
  width: 350px;
  border: 1px solid;
  transform: rotateX(-90deg) translateZ(485px) translateY(5px);
`;

const StyledKantoPokedexLeftBorderRight = styled.div`
  height: 430px;
  width: 31px;
  transform: rotateY(90deg) translateZ(335px) translateX(6px) translateY(70px);
  border: 1px solid;
  background: ${colors.shadow};
  border-left: 0;
`;

const widthRotatePillar = 175;

const StyledKantoPokedexLeftRotatePillar = styled.div`
  height: 430px;
  transform: translateY(70px) translateZ(5px) translateX(372px);
  transform-style: preserve-3d;
  .face {
    width: 4px;
    height: 100%;
    background: ${colors.principal};

    /*    &:nth-child(n + 12) {
      background: ${colors.shadow};
    }

    &:nth-last-child(-n + 12) {
      background: ${colors.principal};
    } */

    &:before,
    &:after {
      content: " ";
      height: 1px;
      width: 100%;
      border-top: 2px solid ${colors.shadow};
      border-bottom: 2px solid ${colors.shadow};
      box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.5);
    }
    &:before {
      transform: translateY(25px);
    }
    &:after {
      transform: translateY(390px);
    }

    ${RoundedColumnStyle({ width: widthRotatePillar, count: 50 })}
  }
  .rounded {
    width: 56px;
    height: 56px;
    border-radius: 100%;
    background: ${colors.shadow};
    background: radial-gradient(
      circle,
      ${colors.shadow} 5%,
      ${colors.principal} 100%
    );
    border: 1px solid;

    &.top {
      transform: rotateX(90deg) translateX(-26px) translateZ(28px);
    }
    &.bottom {
      transform: rotateX(90deg) translateX(-26px) translateZ(-402px);
    }
  }
`;

export {
  StyledKantoPokedexLeft,
  StyledKantoPokedexLeftFront,
  StyledKantoPokedexLeftBorderLeft,
  StyledKantoPokedexLeftBorderBottom,
  StyledKantoPokedexLeftBorderRight,
  StyledKantoPokedexLeftRotatePillar,
  StyledKantoPokedexLeftBack,
};
