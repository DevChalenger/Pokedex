import styled, { keyframes } from "styled-components";
import colors from "../../../../_utils_/_colors_/kanto";
import { ClipPathBody } from "../../../../_utils_/_styles_";

const OpenPokedexAnimation = keyframes`
  0% {
    transform: translateZ(-21px) translateY(72px)
    rotate3d(0, 1, 0, 15deg) rotateY(0deg);
  }
  100% {
    transform:translateZ(-21px) translateY(72px) rotate3d(0, 1, 0, 15deg) rotateY(150deg) translateX(-5px);
  }
`;

const StyledKantoPokedexRight = styled.section`
  width: 350px;
  height: 427.5px;
  transform-origin: 370px 0px -7px;
  transform-style: preserve-3d;
  animation: 1.5s ${OpenPokedexAnimation} ease-in-out 0s forwards;
  transform: translateZ(-21px) translateY(72px) rotate3d(0, 1, 0, 15deg)
    rotateY(150deg) translateX(-20px);
  position: relative;
`;

const StyledKantoPokedexRightBorder = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  .border {
    width: 20px;
    height: 20px;
    background: ${colors.shadow};
    border: 1px solid;
    bottom: 0;
    transform-style: preserve-3d;
    &.left {
      height: 395.5px;
      transform: rotateY(90deg) translate3d(5px, 0px, -10px);
    }
    &.right {
      height: 100%;
      transform: rotateY(-90deg) translate3d(-5px, 0px, -339px);
    }
    &.bottom {
      width: 100%;
      transform: rotateX(90deg) translate3d(0px, -5px, -10px);
    }
    &.top-left {
      width: 58.5%;
      transform: rotateX(-90deg) translate3d(0px, 5px, -385px);
    }

    &.top-diagonale {
      width: 19.5%;
      transform: rotateX(-90deg) rotateY(29deg) translate3d(369px, 5px, -254px);
    }
    &.top-right {
      width: 25%;
      transform: rotateX(-90deg) translate3d(262px, 5px, -417px);
    }
  }
`;

const StyledKantoPokedexRightBack = styled.div`
  height: 100%;
  width: 100%;
  background: black;
  clip-path: polygon(
    58.5% 7.5%,
    76% 0px,
    100% 0px,
    100% 102%,
    0% 100%,
    0px 100%,
    0px 7.5%
  );

  transform: translateZ(5px);

  &:before {
    content: "";
    position: relative;
    height: calc(100% - 2px);
    width: calc(100% - 2px);
    top: 1px;
    left: 1px;
    ${ClipPathBody}
    background: ${colors.principal};
    box-shadow: inset 0px 0px 10px 0px ${colors.shadow};
  }
  .arrow {
    width: 50px;
    height: 50px;
    top: 50%;
    left: 10px;
    background: black;
    clip-path: polygon(50% 100%, 0 50%, 50% 0);
    transform: translateY(-50%);
    &:before {
      content: "";
      position: relative;
      background: yellow;
      width: 46px;
      height: 48px;
      clip-path: polygon(50% 100%, 0 50%, 50% 0);
      top: 1px;
      left: 1px;
    }
  }
`;

const StyledKantoPokedexRightFront = styled.div`
  height: 100%;
  width: 100%;
  background: black;
  ${ClipPathBody};
  &:before {
    content: "";
    position: relative;
    height: calc(100% - 2px);
    width: calc(100% - 2px);
    top: 1px;
    left: 1px;
    ${ClipPathBody}
    background: ${colors.principal};
    background: linear-gradient(
      -80deg,
      ${colors.principal} 80%,
      ${colors.shadow} 100%
    );
  }
`;

export {
  StyledKantoPokedexRight,
  StyledKantoPokedexRightBack,
  StyledKantoPokedexRightFront,
  StyledKantoPokedexRightBorder,
};
