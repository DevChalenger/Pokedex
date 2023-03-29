import styled, { keyframes } from "styled-components";

import ProfessorLab from "../../_assets_/Pofessor-Lab.png";

const animationAppear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1
  }
`;

const StyledIndex = styled.main`
  background: url(${ProfessorLab}) no-repeat center;
  background-size: cover;
  animation: ${animationAppear} 1.5s ease-out;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Classic";
  text-align: center;
`;

export { StyledIndex };
