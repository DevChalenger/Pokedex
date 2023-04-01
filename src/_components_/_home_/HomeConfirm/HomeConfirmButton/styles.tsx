import styled from "styled-components";

interface HomeButtonConfirmProps {
  isConfirmed: boolean;
}

const StyledHomeButtonConfirm = styled.button<HomeButtonConfirmProps>`
  background-color: #3c5aa6;
  border: 5px solid #ffcb05;
  width: 90px;
  height: 30px;
  position: relative;
  border-radius: 10em;
  will-change: transform;
  transition: 0.5s ease-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    rotate: -15deg;
  }
  span {
    position: absolute;
    top: -50%;
    left: 50%;
    translate: -50%;
    font-size: 20px !important;
    line-height: normal;
  }
`;

export { StyledHomeButtonConfirm };
