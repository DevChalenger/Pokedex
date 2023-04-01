import IndexLinkPokedexItem from "../IndexLinkPokedexItem";
import items from "./items";
import { StyledIndexLinkWrapper } from "./styles";

const IndexLinkPokedexWrapper = () => {
  return (
    <StyledIndexLinkWrapper>
      {items.map((item, key) => (
        <IndexLinkPokedexItem key={key} item={item} />
      ))}
    </StyledIndexLinkWrapper>
  );
};

export default IndexLinkPokedexWrapper;
