import styled, { keyframes } from "styled-components";

const AnimationOpenPokedex = keyframes`
  0% {
    transform: translateX(-0%);
  }
  100% {
    transform: translateX(-40%)
  }
  `;

const StyledKantoPokedex = styled.section`
  width: 400px;
  height: 500px;
  transform-style: preserve-3d;
  transform: translateX(-0%) rotate3d(0, 0, 0, 0deg);

  position: relative;

  display: flex;
  flex-direction: column;
  animation: 1s ${AnimationOpenPokedex} ease-in-out 0s forwards;

  * {
    position: absolute;
    box-sizing: border-box;
    &:before,
    &:after {
      display: block;
    }
  }
  /*   @media screen and (max-width: 768px) {
    scale: 0.75;
  }
  @media screen and (max-width: 650px) {
    scale: 0.6;
  }
  @media screen and (max-width: 500px) {
    scale: 0.5;
  }
  @media screen and (max-width: 450px) {
    scale: 0.45;
  } */
`;

export { StyledKantoPokedex };
