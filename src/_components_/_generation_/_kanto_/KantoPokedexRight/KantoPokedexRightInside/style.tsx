import styled, { keyframes } from "styled-components";
import colors from "../../../../../_utils_/_colors_/kanto";

const paddingScreen = 32.5;

const StyledKantoPokedexRightInside = styled.div`
  transform-style: preserve-3d;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  right: 10px;
  top: 10px;
  padding: 0px ${paddingScreen}px;
  .screen-top {
    background: ${colors.dark};
    width: calc(100% - ${paddingScreen * 2}px);
    height: 75px;
    transform: translateY(70px);
    background: linear-gradient(to right bottom, ${colors.dark} 35%, #000 100%);
    border: 1px solid;
    border-radius: 5px;
  }
`;

const StyledKantoPokedexRightInsideButtonWrapper = styled.div`
  width: calc(100% - ${paddingScreen * 2}px);
  height: 75px;
  transform: translateY(170px);
  transform-style: preserve-3d;
  display: grid;
  grid-template-columns: repeat(auto-fill, 53px);
`;

const AnimationButtonClicked = keyframes`
  0% {
    transform: translateZ(-10px);
  }
  50% {
    transform: translateZ(-0px);
  }
  100% {
    transform: translateZ(-10px);
  }
`;

const StyledKantoPokedexRightInsideButtonItems = styled.div`
  width: 100%;
  height: 100%;
  border: 0.5px solid;
  background: blue;
  transform: translateZ(-10px);
  position: relative !important;
  transform-style: preserve-3d;
  box-shadow: inset 0 0 0px 0;
  transition: box-shadow 0.15s ease-in;
  background: ${colors.button};
  cursor: pointer;
  &.isClicked {
    animation: ${AnimationButtonClicked} 0.3s ease-in;
  }
  &:hover {
    box-shadow: inset 0 0 5px 0;
  }
  .border {
    position: absolute;
    background: inherit;
    box-shadow: inset 0 0 2px 0px;
    border: 1px solid;
    box-sizing: content-box;
    &.left,
    &.right {
      width: 10px;
      height: 100%;
    }

    &.top,
    &.bottom {
      width: 100%;
      height: 10px;
    }

    &.left {
      transform: rotateY(90deg) translateZ(-6.5px) translateX(-6px)
        translateY(-1px);
    }

    &.right {
      transform-origin: 0px 0px 0px;
      transform: rotateY(90deg) translateX(-12px) translateY(-1px)
        translateZ(52px);
    }

    &.top {
      transform: rotateX(90deg) translateY(6px) translateZ(6px)
        translateX(-0.5px);
    }
    &.bottom {
      transform: rotateX(-90deg) translateY(-4px) translateZ(30px)
        translateX(-1px);
    }
  }
`;

const StyledKantoPokedexRightInsideButtonBothWrapperLeft = styled.div`
  width: 100px;
  height: 37.5px;
  right: 0;
  transform-style: preserve-3d;
  transform: translateY(25px);
  display: flex;
  div {
    width: 50%;
    border: 0.5px solid;
    background: ${colors.screen};
    .right {
      transform: rotateY(90deg) translateX(-12px) translateY(-1px)
        translateZ(49px) !important;
    }
  }
`;

const StyledKantoPokedexRightInsideBottomSection = styled.section`
  position: relative !important;
  width: 100%;
  transform: translateY(260px);
  transform-style: preserve-3d;
`;

const StyledKantoPokedexRightInsideBothBlackLed = styled.div`
  height: 10px;
  width: 100px;
  display: flex;
  gap: 4px;
  .led {
    height: 100%;
    position: relative;
    border: 1px solid;
    border-radius: 50px;
    background: ${colors.dark};
    width: 50%;
  }
`;

const StyledKantoPokedexRightInsideBothPad = styled.div`
  height: 40px;
  width: 100%;
  transform: translateY(85px);
  display: flex;
  gap: 25px;
  .pad {
    width: 50%;
    height: 100%;
    position: static;
    background: ${colors.dark};
    border-radius: 5px;
    border: 1px solid;
  }
`;

export {
  StyledKantoPokedexRightInside,
  StyledKantoPokedexRightInsideButtonWrapper,
  StyledKantoPokedexRightInsideButtonItems,
  StyledKantoPokedexRightInsideButtonBothWrapperLeft,
  StyledKantoPokedexRightInsideBottomSection,
  StyledKantoPokedexRightInsideBothBlackLed,
  StyledKantoPokedexRightInsideBothPad,
};
