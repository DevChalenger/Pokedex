import React from "react";
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

const StyledConfirm = styled.div`
  background: white;
  height: 100%;
  width: 100%;
  z-index: 10;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledConfirmAppear = styled.div`
  animation: ${appearAnimation} 3s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  span {
    color: #ffcb05;
    font-size: 40px;
    text-align: center;
    -webkit-text-stroke: 2px #2a75bb;
    text-shadow: 0 0 2px #3c5aa6;
  }
  div {
    display: flex;
    gap: 2em;
    button {
      background: #3c5aa6;
      border: 5px solid #ffcb05;
      width: 90px;
      height: 30px;
      position: relative;
      border-radius: 10em;
      transition: 0.5s ease-out;
      cursor: pointer;
      &:hover {
        rotate: -15deg;
      }
      span {
        position: absolute;
        color: #ffcb05;

        -webkit-text-stroke: 0.5px #2a75bb;
        top: -50%;
        left: 50%;
        translate: -50%;
        font-size: 20px;
      }
    }
  }
`;

export { StyledConfirm, StyledConfirmAppear };
