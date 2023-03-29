import { StyledIndex } from "./styles";
import Title from "../../_utils_/_title_/index";
import IndexLinkPokedexWrapper from "../../_components_/_index-components_/IndexLinkPokedexWrapper";

const Index = () => {
  return (
    <StyledIndex>
      <Title title={"Index"} />
      <IndexLinkPokedexWrapper />
    </StyledIndex>
  );
};

export default Index;
