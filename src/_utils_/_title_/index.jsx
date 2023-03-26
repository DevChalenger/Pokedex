import React from "react";

import { Helmet } from "react-helmet-async";

const HelmetComponent = ({ title }) => {
  return (
    <Helmet>
      <title>Pokedex - {title}</title>
    </Helmet>
  );
};

export default HelmetComponent;
