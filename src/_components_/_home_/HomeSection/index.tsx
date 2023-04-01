import HomePokeball from "../HomePokeball";

import { StyledHomeSection, StyledHomeTitle } from "./styles";

const HomeSection = () => {
  return (
    <StyledHomeSection>
      <HomePokeball />
      <StyledHomeTitle>
        Welcome to my personal pokedex application
        <br />
        If you want to start seeing the pokedex, open the pokeball
      </StyledHomeTitle>
    </StyledHomeSection>
  );
};

export default HomeSection;
