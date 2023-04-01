import styled from "styled-components";

const StyledKantoPokedexHeader = styled.header`
  height: 100px;
  width: 100%;
  clip-path: polygon(50% 100%, 60% 70%, 100% 70%, 100% 0, 0 0, 0 100%);
  background: red;

  transform: translateY(0px) translateZ(10px);
  transform-style: preserve-3d;
`;

const StyledKantoPokedexHeaderButtonWrapper = styled.div`
  width: 100%;
  padding: 10px 15px;
  transform: translateY(0px) translateZ(10px);
  #button-glasss {
    width: 70px;
    height: 70px;
    border-radius: 100%;
    background: #dedede;
    position: relative;
    #center {
      width: 90%;
      height: 90%;
      margin-left: auto;
      border-radius: 50%;
      background: cyan;
      transform: translateZ(5px);
      &:hover {
      }
    }
  }
`;

export { StyledKantoPokedexHeader, StyledKantoPokedexHeaderButtonWrapper };
