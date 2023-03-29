import styled from "styled-components";

const StyledHomePokeball = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  overflow: hidden;
  box-shadow: 0 0 1px 0 black;
  border: 0.1px solid black;
  transition: transform 0.2s ease-out;
  will-change: transform;
  &:hover {
    transform: scale(1.5);
  }
  &:before {
    position: absolute;
    top: 0;
    content: "";
    width: 100%;
    height: 50%;
    background: linear-gradient(
      90deg,
      rgba(255, 0, 0, 1) 39%,
      rgba(238, 21, 21, 1) 62%
    );
  }
  &:after {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50%;
    content: "";
    background: #f0f0f0;
  }
`;

const StyledHomePokeballCenter = styled.div`
  position: absolute;
  top: 50%;
  left: -20%;
  height: 7.5%;
  width: 120%;
  background: #222224;
  z-index: 2;
  transform: translate(0, -50%);
`;

const StyledHomePokeballButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  background: #f0f0f0;
  border: 5px solid #222224;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  &:before {
    position: absolute;
    content: "";
    top: 50%;
    left: 48%;
    width: 75%;
    height: 75%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    box-shadow: 2px 2px 5px black;
    cursor: pointer;
    &:active,
    &:focus {
      width: 10px;
      height: 10px;
    }
  }
`;

export {
  StyledHomePokeball,
  StyledHomePokeballCenter,
  StyledHomePokeballButton,
};
