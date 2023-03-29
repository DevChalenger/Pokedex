import styled, { createGlobalStyle } from "styled-components";
import Pokemon from "../_fonts_/solid.ttf";
import Classic from "../_fonts_/classic.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pokemon";
    src: url(${Pokemon})
  }
  @font-face {
    font-family: "Classic";
    src: url(${Classic})
  }
  * {
    box-sizing: content-box;
    list-style: none;
    padding: 0;
    background: none;
    border: none;
    outline: none;
    margin: 0;
    text-decoration: none;
  }
  a {
    color: inherit;
  }
  main {
    flex: 1;
  }
  
`;

const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export { StyledApp, GlobalStyle };
