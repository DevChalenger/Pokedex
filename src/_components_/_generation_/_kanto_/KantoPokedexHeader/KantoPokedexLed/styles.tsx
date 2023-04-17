import styled from "styled-components";

const StyledKantoPokedexHeaderLedBlue = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 100%;
  background: cyan;
  transform: translateY(22.5px) translateX(30px) translateZ(20px);
  z-index: 1;
  transform-style: preserve-3d;

  & > * {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: #196a9e;
  }
  & > :nth-child(1) {
    transform: rotate3d(1, 0, 0, 0deg);
  }
  & > :nth-child(2) {
    transform: rotate3d(1, 0, 0, 36deg);
  }
  & > :nth-child(3) {
    transform: rotate3d(1, 0, 0, 72deg);
  }
  & > :nth-child(4) {
    transform: rotate3d(1, 0, 0, 108deg);
  }
  & > :nth-child(5) {
    transform: rotate3d(1, 0, 0, 144deg);
  }
  &:nth-child(6) {
    transform: rotate3d(0, 1, 0, 0deg);
  }
  & > :nth-child(7) {
    transform: rotate3d(0, 1, 0, 36deg);
  }
  & > :nth-child(8) {
    transform: rotate3d(0, 1, 0, 72deg);
  }
  & > :nth-child(9) {
    transform: rotate3d(0, 1, 0, 108deg);
  }
  & > :nth-child(10) {
    transform: rotate3d(0, 1, 0, 144deg);
  }
  & > nth-child(11) {
    transform: rotate3d(0, 1, 0, 90deg) rotate3d(1, 0, 0, 0deg);
  }
  & > :nth-child(12) {
    transform: rotate3d(0, 1, 0, 90deg) rotate3d(1, 0, 0, 36deg);
  }
  & > :nth-child(13) {
    transform: rotate3d(0, 1, 0, 90deg) rotate3d(1, 0, 0, 72deg);
  }
  & > :nth-child(14) {
    transform: rotate3d(0, 1, 0, 90deg) rotate3d(1, 0, 0, 108deg);
  }
  & > :nth-child(15) {
    transform: rotate3d(0, 1, 0, 90deg) rotate3d(1, 0, 0, 144deg);
  }
`;

const StyledKantoPokedexHeaderLedGray = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 100%;
  background: lightgray;
  border: 1px solid;
  transform: translateY(17.5px) translateX(25px) translateZ(20px);
  padding: 3px;
  &:before {
    content: "";
    display: block;
    width: 55px;
    height: 55px;
    border: 1.5px solid;
    border-radius: 100%;
  }
`;

export { StyledKantoPokedexHeaderLedBlue, StyledKantoPokedexHeaderLedGray };
