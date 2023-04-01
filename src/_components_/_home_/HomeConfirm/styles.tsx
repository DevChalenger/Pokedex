import styled from "styled-components";

import { keyframes } from "styled-components";

const appearAnimation = keyframes`
  from {
    opacity: 0%;
  }
  to {
    opacity: 100%;
  }
`;

const disappearAnimation = keyframes`
  0%{
    opacity: 1;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    visibility: hidden;
    opacity: 0;
  }
`;

interface ConfirmProps {
  isConfirmed: boolean;
}

const StyledConfirm = styled.div<ConfirmProps>`
  background: white;
  height: 100%;
  width: 100%;
  z-index: 10;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${({ isConfirmed }) => isConfirmed && disappearAnimation} 2s
    ease-out forwards;
`;

const StyledConfirmAppear = styled.div`
  animation: ${appearAnimation} 3s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  span {
    font-size: 40px;
    text-align: center;
    line-height: none;
  }
  div {
    display: flex;
    gap: 2em;
  }
`;

export { StyledConfirm, StyledConfirmAppear };
