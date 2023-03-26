import styled, { createGlobalStyle } from "styled-components";
import font from "../_fonts_/solid.ttf";

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: "Pokemon";
		src: url(${font})
	}
  	* {
		box-sizing: content-box;
		font-family: "Pokemon";
	}
	body, button {
		background: none;
		border: none;
		outline: none;
		margin: 0;
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
