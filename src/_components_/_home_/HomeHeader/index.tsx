import { StyledHomeHeader } from "./styles";
import { ReactComponent as PokemonTitle } from "../../../_assets_/pokemon-title.svg";

const HomeHeader = () => {
  return (
    <StyledHomeHeader>
      <PokemonTitle />
    </StyledHomeHeader>
  );
};

export default HomeHeader;
