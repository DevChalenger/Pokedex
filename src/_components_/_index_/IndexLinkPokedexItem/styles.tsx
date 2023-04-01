import styled, { keyframes } from "styled-components";

const animationHover = keyframes`
   0% {
    left: 15px;
   } 
   50% {
    left: 20px;
   }
   100% {
    left: 15px;
   }
`;

interface Props {
  previewPokedex: string;
}

const StyledIndexItemsLink = styled.li<Props>`
  position: relative;
  background: white;
  padding: 10px 20px;
  padding-bottom: 12.5px;
  width: 200px;
  border-radius: 7.5px;
  display: flex;
  border: 2px solid #b0f8f8;
  box-shadow: inset -2px 0px 1px 5px #68b0f8;
  &:hover {
    &:before,
    &:after {
      display: block;
    }
  }
  cursor: none;
  &:before {
    display: none;
    position: absolute;
    left: 15px;
    top: 50%;
    content: "";
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 12px solid black;
    translate: 0 -50%;
    animation: ${animationHover} 0.4s;
    animation-iteration-count: infinite;
  }
  &:after {
    content: "";
    display: none;
    position: absolute;
    right: 12.5px;
    top: 50%;
    translate: 0 -50%;
    width: 30px;
    height: 30px;
    background: url(${({ previewPokedex }) => previewPokedex}) no-repeat center;
    background-size: 80%;
  }
  a {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    cursor: none;
    padding-right: 1px;
  }
`;

export { StyledIndexItemsLink };
