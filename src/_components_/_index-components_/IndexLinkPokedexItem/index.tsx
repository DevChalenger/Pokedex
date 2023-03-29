import { StyledIndexItemsLink } from "./styles";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Props {
  item: { link: string; generation: number; preview: string };
}

const IndexLinkPokedexItem = ({ item }: Props) => {
  return (
    <>
      <StyledIndexItemsLink previewPokedex={item.preview}>
        <Link to={item.link}>
          <span>Generation {item.generation} </span>
        </Link>
      </StyledIndexItemsLink>
    </>
  );
};

export default IndexLinkPokedexItem;
