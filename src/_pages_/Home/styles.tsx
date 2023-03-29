import styled from "styled-components";
import KantoRoute1 from "../../_assets_/kanto-route-1.jpg";

const StyledHome = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${KantoRoute1}) no-repeat center;
  background-size: cover;

  * {
    font-family: "Pokemon";
    color: #ffcb05;
    -webkit-text-stroke: 0.02rem #3c5aa6;
    text-shadow: -0.08em 0.1em 0px #1e2d5f;
    line-height: 2em;
  }
  &:after {
    content: "";
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
`;

export { StyledHome };
