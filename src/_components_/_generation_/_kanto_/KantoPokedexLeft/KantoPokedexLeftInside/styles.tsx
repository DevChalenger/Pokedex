import styled from "styled-components";
import colors from "../../../../../_utils_/_colors_/kanto";

const paddingScreen = 32.5;

const StyledKantoPokedexLeftScreen = styled.div`
  transform-style: preserve-3d;
  height: 200px;
  width: 260px;
  background: ${colors.screen};
  transform: translateZ(5px) translateX(40px) translateY(70px);
  clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 12.5% 100%, 0 87.5%);
  padding: ${paddingScreen}px;

  display: flex;
  justify-content: center;
  #left-screen-top-led {
    display: flex;
    justify-content: space-between;
    height: 10px;
    width: 50px;
    transform: translateY(-20px);
    .left-screen-led {
      background: ${colors.screenLed};
      width: 7.5px;
      height: 7.5px;
      border: 1px solid;
      border-radius: 100%;
      position: relative;
    }
  }
  #left-screen-bottom-led {
    transform: translateY(145px) translateX(-93px);
    height: 12.5px;
    width: 12.5px;
    border: 1px solid;
    border-radius: 100%;
    background: ${colors.screenLed};
  }
`;

const StyledKantoPokedexLeftScreenInside = styled.div`
  background: black;
  width: calc(260px - ${paddingScreen * 2}px);
  height: calc(200px - ${paddingScreen * 2}px);
  transform: translateZ(0px);
`;

const StyledKantoPokedexLeftScreenBorder = styled.div`
  transform-style: preserve-3d;
  transform: translateZ(5px) translateX(40px) translateY(70px);
  height: 200px;
  width: 260px;
  .border {
    background: ${colors.screenBorder};
    &.left {
      transform: translateZ(-2.5px) translateX(-50%) rotateY(90deg);
      height: 87.5%;
      width: 5px;
    }
    &.right {
      transform: translateZ(-2.5px) translateX(257.5px) rotateY(90deg);
      height: 100%;
      width: 5px;
    }
    &.top {
      transform: translateZ(-2.5px) translateY(-2.5px) rotateX(90deg);
      height: 5px;
      width: 100%;
    }
    &.bottom {
      transform: translateZ(-2.5px) translateX(31px) translateY(197.5px)
        rotateX(-90deg);
      height: 5px;
      width: 88%;
    }
    &.diagonale {
      width: 40.5px;
      height: 5px;
      transform: translateZ(-2.5px) translateY(184.75px) translateX(-4.5px)
        rotateX(-90deg) rotateY(-38deg);
    }
  }
`;

const StyledKantoPokedexBorderInside = styled.section`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;

  background: ${colors.shadow};
  clip-path: polygon(
    57.5% 7.5%,
    75% 0,
    100% 0,
    100% 100%,
    0% 100%,
    0 100%,
    0 7.5%
  );

  padding: 3px;
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    clip-path: polygon(
      57.5% 7.5%,
      75% 0,
      100% 0,
      100% 100%,
      0% 100%,
      0 100%,
      0 7.5%
    );

    background: ${colors.principal};
  }
`;

const StyledKantoPokedexLeftInside = styled.section`
  transform-style: preserve-3d;
  width: 340px;
  height: 420px;
  transform: translateZ(10px);
  top: 75px;
  left: 5px;
`;

export {
  StyledKantoPokedexLeftScreen,
  StyledKantoPokedexBorderInside,
  StyledKantoPokedexLeftInside,
  StyledKantoPokedexLeftScreenBorder,
  StyledKantoPokedexLeftScreenInside,
};
