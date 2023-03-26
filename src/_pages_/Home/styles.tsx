import styled from "styled-components";
import KantoRoute1 from "../../_assets_/kanto-route-1.jpg";

const StyledHome = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${KantoRoute1}) no-repeat center;
  background-size: cover;
  &:after {
    content: "";
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
`;

const StyledHomeSection = styled.section`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const StyledHomeTitle = styled.h1`
  display: flex;
  justify-content: center;
  svg {
    height: 100px;
  }
`;

const StyledHomePokeball = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  overflow: hidden;
  box-shadow: 0 0 1px 0;
  transition: transform 0.5s ease-out;
  will-change: transform;
  &:hover {
    transform: scale(2);
  }
  &:before {
    position: absolute;
    top: 0;
    content: "";
    width: 100%;
    height: 50%;
    background: linear-gradient(to right, #ee1515, #ff0000);
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
  height: 7.5%;
  width: 100%;
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
    left: 50%;
    width: 75%;
    height: 75%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    box-shadow: 2px 2px 5px;
    cursor: pointer;
    &:active,
    &:focus {
      width: 10px;
      height: 10px;
    }
  }
`;

export {
  StyledHome,
  StyledHomeSection,
  StyledHomeTitle,
  StyledHomePokeball,
  StyledHomePokeballCenter,
  StyledHomePokeballButton,
};
