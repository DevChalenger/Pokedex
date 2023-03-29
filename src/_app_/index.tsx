import React from "react";
import {
  BrowserRouter as Router,
  Routes as Navigations,
  Route,
} from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";

import { GlobalStyle, StyledApp } from "./styles";

import Home from "../_pages_/Home";
import Index from "../_pages_/Index";

const App = () => {
  return (
    <HelmetProvider>
      <StyledApp>
        <GlobalStyle />
        <Router>
          <Navigations>
            <Route path="/" element={<Home />} />
            <Route path="/pokedex" element={<Index />} />
          </Navigations>
        </Router>
      </StyledApp>
    </HelmetProvider>
  );
};

export default App;
