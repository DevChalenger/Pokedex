import styled from "styled-components";
import colors from "../../../../_utils_/_colors_/kanto";
import { RoundedColumnStyle } from "../../../../_utils_/_styles_";

const StyledKantoPokedexLeft = styled.section`
  transform-style: preserve-3d;
  width: 350px;
  height: 430px;
  transform: translateZ(10px) translateY(70px);
  background: ${colors.principal};
  border: 1px solid;
  border-top: 0;
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
  width: 350px;
  border: 1px solid;
  transform: rotateX(-90deg) translateZ(489px);
`;

const StyledKantoPokedexLeftBorderRight = styled.div`
  height: 430px;
  width: 21px;
  transform: rotateY(90deg) translateZ(340px) translateX(0px) translateY(70px);
  border: 1px solid;
  background: ${colors.shadow};
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
  height: 430px;
  transform: translateY(70px) translateZ(10px) translateX(372px);
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

    ${RoundedColumnStyle({ width: 160, count: 50 })}
  }
  .rounded {
    width: 48px;
    height: 48px;
    border-radius: 100%;
    background: ${colors.shadow};
    background: radial-gradient(
      circle,
      ${colors.shadow} 30%,
      ${colors.principal} 100%
    );
    border: 1px solid;

    &.top {
      transform: rotateX(90deg) translateX(-22px) translateZ(24px);
    }
    &.bottom {
      transform: rotateX(90deg) translateX(-22px) translateZ(-407px);
    }
  }
`;

export {
  StyledKantoPokedexLeft,
  StyledKantoPokedexLeftBorderLeft,
  StyledKantoPokedexLeftBorderBottom,
  StyledKantoPokedexLeftBorderRight,
  StyledKantoPokedexLeftRotatePillar,
};
