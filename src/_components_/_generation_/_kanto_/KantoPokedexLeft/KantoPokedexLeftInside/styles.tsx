import styled, { css, keyframes } from "styled-components";
import colors from "../../../../../_utils_/_colors_/kanto";
import { RoundedColumnStyle } from "../../../../../_utils_/_styles_";

const paddingScreen = 32.5;

const StyledKantoPokedexLeftScreen = styled.div`
  transform-style: preserve-3d;
  height: 200px;
  width: 260px;
  background: black;
  transform: translateZ(5px) translateX(40px) translateY(70px);
  clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 12.5% 100%, 0 87.5%);
  padding: ${paddingScreen}px;
  display: flex;
  justify-content: center;
  &:before {
    content: "";
    background: ${colors.screen};
    height: 198px;
    width: 258px;
    position: absolute;
    box-sizing: border-box;
    top: 0.75px;
    left: 0.75px;
    clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 12.5% 100%, 0 87.5%);
  }
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
  #left-screen-sound {
    transform: translateY(140px) translateX(85px);
    height: 20px;
    width: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > * {
      width: 100%;
      border: 0.5px solid;
      background: black;
      position: relative;
    }
  }
`;

const StyledKantoPokedexLeftScreenInside = styled.div`
  background: ${colors.dark};
  background: linear-gradient(to left bottom, ${colors.dark} 25%, #000 100%);
  border: 2px solid;
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
    border: 1px solid;
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

interface PropsRoundedButton {
  isClicked: boolean;
  onClick: any;
}

const RoundedButtonAnimation = keyframes`
  0% {
    transform: translateY(310px) translateZ(10px) translateX(30px);
  }
  50% {
    transform: translateY(310px) translateZ(0px) translateX(30px);
  }
  100% {
    transform: translateY(310px) translateZ(10px) translateX(30px);
  } 
`;

const StyledKantoPokedexLeftRoundedButton = styled.div<PropsRoundedButton>`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  transform: translateY(310px) translateZ(10px) translateX(30px);
  transform-style: preserve-3d;
  ${({ isClicked }) =>
    isClicked &&
    css`
      animation: ${RoundedButtonAnimation} 0.2s ease-in;
    `}
  cursor: pointer;
  .rounded-pad {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 1px solid;
    box-sizing: border box;
    background: ${colors.pad};
    z-index: 1;
  }
  .rounded-container {
    position: absolute;
    transform-style: preserve-3d;
    transform: rotateX(90deg) rotateY(-90deg) translateY(-10px)
      translateX(-16.5px) translateZ(-15px);
    width: 0px;
    .rounded-button {
      width: 3px;
      height: 10px;
      background: black;
      ${RoundedColumnStyle({ width: 90, count: 50 })}
    }
  }
`;

interface KeyArrowProp {
  keyControl: { isClicked: boolean; direction: string };
}

const KeyRight = keyframes`
  0% {
    transform: translateY(310px) translateZ(7.5px) translateX(210px) rotateY(0deg);
  }
  50% {
    transform: translateY(310px) translateZ(7.5px) translateX(210px) rotateY(5deg);
  }
  100% {
    transform: translateY(310px) translateZ(7.5px) translateX(210px) rotateY(0deg);
  }
`;

const KeyLeft = keyframes`
  0% {
    transform: translateY(310px) translateZ(7.5px) translateX(210px) rotateY(0deg);
  }
  50% {
    transform: translateY(310px) translateZ(7.5px) translateX(210px) rotateY(-5deg);
  }
  100% {
    transform: translateY(310px) translateZ(7.5px) translateX(210px) rotateY(0deg);
  }
`;

const KeyTop = keyframes`
  0% {
    transform: translateY(310px) translateZ(7.5px) translateX(210px) rotateY(0deg);
  }
  50% {
    transform: translateY(310px) translateZ(7.5px) translateX(210px) rotateX(5deg);
  }
  100% {
    transform: translateY(310px) translateZ(7.5px) translateX(210px) rotateY(0deg);
  }
`;

const KeyBottom = keyframes`
  0% {
    transform: translateY(310px) translateZ(7.5px) translateX(210px) rotateY(0deg);
  }
  50% {
    transform: translateY(310px) translateZ(7.5px) translateX(210px) rotateX(-5deg);
  }
  100% {
    transform: translateY(310px) translateZ(7.5px) translateX(210px) rotateY(0deg);
  }
`;

const StyledKantoPokedexLeftArrowKey = styled.div<KeyArrowProp>`
  transform-style: preserve-3d;
  transform: translateY(310px) translateZ(7.5px) translateX(210px);
  width: 90px;
  height: 90px;
  position: relative;
  ${({ keyControl }) =>
    keyControl.isClicked &&
    css`
      animation: ${keyControl.direction === "left"
          ? KeyLeft
          : keyControl.direction === "right"
          ? KeyRight
          : keyControl.direction === "bottom"
          ? KeyBottom
          : keyControl.direction === "top" && KeyTop}
        0.2s ease-in-out;
    `}
  .center {
    background: ${colors.pad};
    width: 20px;
    height: 20px;
    transform: translate(34px, 34px);
    display: flex;
    justify-content: center;
    padding: 2px 5px;
    &:before {
      content: "";
      width: 100%;
      height: 100%;
      border: 1px solid;
      border-radius: 100%;
      box-sizing: border-box;
    }
  }
  .arrow {
    transform-style: preserve-3d;
    width: 20px;
    height: 35px;
    background: ${colors.pad};
    border: 1px solid;
    border-bottom: 0;
    cursor: pointer;
    .border {
      background: black;
      width: 20px;
      &.top {
        height: 20px;
        transform: rotateX(90deg) translateY(-9.5px) translateZ(10.5px)
          translateX(-1px);
      }
      &.right {
        height: 35px;
        transform: translateZ(-10px) translateX(-10px) translateY(-0.75px)
          rotateY(90deg);
      }
      &.left {
        height: 35px;
        transform: translateZ(-10px) translateX(9px) translateY(-0.75px)
          rotateY(90deg);
      }
    }

    &.left {
      transform: rotateZ(-90deg) translateY(8px) translateX(-26.5px);
    }
    &.right {
      transform: rotateZ(90deg) translateY(-61px) translateX(26.5px);
    }
    &.top {
      transform: translateX(34px);
    }
    &.bottom {
      transform: rotateZ(180deg) translateY(-54px) translateX(-34px);
    }
  }
`;

const StyledKantoPokedexLeftLed = styled.div`
  width: 100px;
  height: 10px;
  transform: translateY(220px) translateX(90px);
  display: flex;
  flex-directon: row;
  justify-content: space-between;
  .led {
    width: 40px;
    height: 4px;
    border: 1px solid;
    border-radius: 20px;
    position: relative;
    &.red {
      background: red;
    }
    &.blue {
      background: blue;
    }
  }
`;

const StyledKantoPokedexLeftPad = styled.div`
  background: #51ae5f;
  width: 100px;
  height: 50px;
  transform: translateY(250px) translateX(90px);
  border: 1px solid;
  border-radius: 10px;
`;

export {
  StyledKantoPokedexLeftScreen,
  StyledKantoPokedexBorderInside,
  StyledKantoPokedexLeftInside,
  StyledKantoPokedexLeftScreenBorder,
  StyledKantoPokedexLeftScreenInside,
  StyledKantoPokedexLeftRoundedButton,
  StyledKantoPokedexLeftArrowKey,
  StyledKantoPokedexLeftLed,
  StyledKantoPokedexLeftPad,
};
